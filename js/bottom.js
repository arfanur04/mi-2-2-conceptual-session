let scroll = setInterval(function () {
	window.scrollBy(0, document.body.scrollHeight);
}, 2000);

function scrollToBottom() {
	window.scrollTo(0, document.body.scrollHeight);
}
history.scrollRestoration = "manual";
window.onload = scrollToBottom;
