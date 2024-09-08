import {
  KeyCommunitiesButton,
  KeyFollowingTimeline,
  KeyHideViewCount,
  KeyListsButton,
  KeyRecentMedia,
  KeyRemoveTimelineTabs,
  KeyTopicsButton,
  KeyTrendsHomeTimeline,
  KeyWriterMode,
  KeyXPremiumButton,
} from "../../../storage-keys";
import changeHideViewCounts from "./options/hideViewCount";
import { addCommunitiesButton, addListsButton, addTopicsButton } from "./options/navigation";
import { changeFollowingTimeline, changeRecentMedia, changeTimelineTabs, changeTrendsHomeTimeline } from "./options/timeline";
import { addWriterModeButton, changeWriterMode } from "./options/writer-mode";
import addStyleSheet from "./utilities/addStyleSheet";
import { extractColorsAsRootVars } from "./utilities/colors";
import debounce from "./utilities/debounce";
import hideRightSidebar from "./utilities/hideRightSidebar";
import isMutationSkippable from "./utilities/isMutationSkippable";
import { addSmallerSearchBarStyle } from "./utilities/other-styles";
import { getStorage } from "./utilities/storage";
import throttle from "./utilities/throttle";

// Function to add main stylesheet
export const addStylesheets = async () => {
  addStyleSheet("main", chrome.runtime.getURL("css/main.css"));

  // Load cached CSS
  const mainStylesheetFromCDN = await fetch("https://raw.githubusercontent.com/typefully/minimal-twitter/main/css/main.css");
  const mainText = (await mainStylesheetFromCDN.text()).trim();
  addStyleSheet("external", null, mainText.concat("\n\n"));
};

export const runDocumentMutations = throttle(async () => {
  extractColorsAsRootVars();

  const data = await getStorage([KeyWriterMode, KeyFollowingTimeline, KeyTrendsHomeTimeline, KeyRemoveTimelineTabs, KeyHideViewCount, KeyRecentMedia]);

  if (data) {
    if (data[KeyWriterMode] === "on") {
      changeWriterMode(data[KeyWriterMode]);
    } else {
      changeTimelineTabs(data[KeyRemoveTimelineTabs], data[KeyWriterMode]);
      changeTrendsHomeTimeline(data[KeyTrendsHomeTimeline], data[KeyWriterMode]);
      changeFollowingTimeline(data[KeyFollowingTimeline]);
      changeHideViewCounts(data[KeyHideViewCount]);
      changeRecentMedia(data[KeyRecentMedia]);
    }
  }

  hideRightSidebar();
  addSmallerSearchBarStyle();
  addWriterModeButton();

  return;
}, 50);

// Function to start MutationObserver
export const addMutationsOnDomChanges = () => {
  const observer = new MutationObserver((mutationsList) => {
    if (!mutationsList.length) return;
    if (isMutationSkippable(mutationsList)) return;
    runDocumentMutations();
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
};

export const addMutationsOnPageLoad = () => {
  // Inject on page load
  document.addEventListener("DOMContentLoaded", () => {
    addSidebarButtons(false);
    runDocumentMutations();
  });
};

// On resize, remove and re-add the sidebar buttons, because their original
// Twitter counterparts styles change programmatically based on window size,
// so we need to re-create them when the window size changes.
export const addMutationsOnResize = () => {
  window.addEventListener(
    "resize",
    debounce(() => {
      addSidebarButtons(true);
    }, 50)
  );
};

// Use "forced" when you want to re-add a button even if it's already there
async function addSidebarButtons(forced) {
  const data = await getStorage([KeyListsButton, KeyCommunitiesButton, KeyTopicsButton, KeyXPremiumButton]);

  if (!data) return;

  if (data[KeyListsButton] === "on") addListsButton(forced);
  if (data[KeyCommunitiesButton] === "on") addCommunitiesButton(forced);
  if (data[KeyTopicsButton] === "on") addTopicsButton(forced);
}
