'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
  $(".likeBtn").click(likeClick);
}



function likeClick(e) {
  console.log("Like button clicked");
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

  ga("send", "event", 'like', 'click');
}
