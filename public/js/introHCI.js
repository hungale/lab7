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
  /*
  // In an event listener, $(this) is 
  // the element that fired the event
  var projectTitle = $(this).find("p").text();

  //"#" refers to id, "." refers to class 
  var jumbotronHeader = $(".jumbotron h1");
  jumbotronHeader.text(projectTitle);

  var containingProject = $(this).closest(".project")
  var description = $(containingProject).find(".project-description");

  if(description.length == 0){
    containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
  }
  else{
    description.fadeToggle()
  }
  */
}
