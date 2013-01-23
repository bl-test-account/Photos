$(function () {
  var content = JSON.parse(BL.getContentItem());
  $('.show-image').attr('src', content.full);
});