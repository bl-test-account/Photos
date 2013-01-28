var PhotoCreate = function () {
}

PhotoCreate.prototype.photo = null;

PhotoCreate.prototype.photoCaptured = function (data) {
  var photoProcessingDiv = $('.photo-pane');
  var photoDiv = $('<img class="aspect-img" src="' + data.urls.full + '"></img>');
  photoProcessingDiv.append(photoDiv);

  this.photo = data.urls;
}

PhotoCreate.prototype.retakePressed = function (e) {
  $('.aspect-img').remove();
  this.photo = null;
  BL.getPicture(photoCreate.photoCaptured.bind(photoCreate));
}

PhotoCreate.prototype.uploadPressed = function (e) {
  if (this.photo) {
    data = JSON.stringify(this.photo);
    BL.createContent(data);
  }
  else {
    alert("No photo!");
  }
}

$(function () {
  window.photoCreate = new PhotoCreate();
  $('#take').click(photoCreate.retakePressed.bind(photoCreate));
  $('#upload').click(photoCreate.uploadPressed.bind(photoCreate));
  BL.getPicture(photoCreate.photoCaptured.bind(photoCreate));
});

