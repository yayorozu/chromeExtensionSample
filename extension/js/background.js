
chrome.contextMenus.create({
	title: "新しいタブを開く ",
	onclick: function () {
		chrome.tabs.create({
			url: "https://www.google.co.jp/"
		});
	}
});

chrome.contextMenus.create({
	title: "aタグリンクを開く",
    contexts: ["link"],
	onclick: function (info) {
		chrome.tabs.create({
			url: info.pageUrl
		});
	}
});