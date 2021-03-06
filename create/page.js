var PhotoCreate = function () {
}

PhotoCreate.prototype.photo = null;

PhotoCreate.prototype.photoCaptured = function (data) {
  $('.processing').addClass('hidden');
  
  var photoProcessingDiv = $('.photo-pane');
  var photoDiv = $('<img class="aspect-img" src="' + data.urls.full + '"></img>');
  photoProcessingDiv.append(photoDiv);

  photoProcessingDiv.find('img').each(function(){
  var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
  $(this).addClass(imgClass);
  })
  
  this.photo = data.urls;
}

PhotoCreate.prototype.retakePressed = function (e) {
  $('.aspect-img').remove();
  this.photo = null;
  BL.getPicture(photoCreate.photoCaptured.bind(photoCreate));
  $('.processing').removeClass('hidden');
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

