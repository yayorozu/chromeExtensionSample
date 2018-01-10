(function() {
	chrome.contextMenus.create({
		title: "Open New Tab",
		onclick: function (info, tab) {
			chrome.tabs.create();
		}
	});
}).call(this);