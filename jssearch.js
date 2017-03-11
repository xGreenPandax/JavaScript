(()=>{console.log(1)})()
var pageList = ["Main", "guide", "about", "rules"];
var createPage = function createPage(page){
  $("#pages").append($("<li>").text(page).attr("id", "page-" + page));
};
pageList.forEach(createPage);
var filterPage = function filterPage(page) {
  	return page.indexOf($( "#search" ).val()) > -1;
  };
$("#search").keyup(function() {
  $("li").hide();
  var results = pageList.filter(filterPage);
  results.forEach(function(page) {
  	$("#page-" + page).show();
  })
});
