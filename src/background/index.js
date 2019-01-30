/* eslint-disable no-undef */

chrome.webNavigation.onCompleted.addListener(
  function (navigationEvent) {
    let tabId = navigationEvent.tabId;
    chrome.tabs.insertCSS(tabId, { file: 'lib/css/insta-down-css.css' });
    chrome.tabs.executeScript(tabId, { file: 'lib/js/download.js' });
    chrome.tabs.executeScript(tabId, { file: 'lib/js/jszip.min.js' });
    chrome.tabs.executeScript(tabId, { file: 'lib/js/jszip-utils.min.js' });
    chrome.tabs.executeScript(tabId, { file: 'lib/js/FileSaver.min.js' });
  },
  { url: [{ hostSuffix: '.instagram.com' }] }
);
