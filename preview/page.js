var displayContent = function (content, index, tileWidth) {
  var id = content[index].id;
  var data = JSON.parse(content[index].data);

  // big tile
  var tile = $('<div class="preview-frame"></div>');

  (function (cid) {
    tile.click(function (e) {
      BL.showContent(cid);
    });
  })(id);

  tile.append('<img src="' + data.full + '"></img>')

  $('.frame').append(tile);

  tile.css('width', '' + tileWidth + 'px');
  tile.css('height', '' + tileWidth + 'px');
}

$(function () {
  var width = $('.frame').width();

  var content = BL.getContentForPreview().content;
  var num = content.length;

  if (num == 1) {
    var PADDING = 2;//px
    var tileWidth = width - PADDING;
    displayContent(content, 0, tileWidth);
  }
  else {
    var PADDING = 4;//px
    var tileWidth = (width - PADDING) / 2;

    for (var i in content) {
      displayContent(content, i, tileWidth);
    }
  }

  BL.previewReady();
});