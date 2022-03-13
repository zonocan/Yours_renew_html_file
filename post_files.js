//投稿画像の表示
$(function() {
  $('#post_img').change(function() {
    if (!this.files.length) {
      return;
    }
    $('#preview').text('');
    var $files = $(this).prop('files');
    var post_length = $files.length;
    for (var i = 0; i < post_length; i++) {
      var file = $files[i];
      var fr = new FileReader();

      fr.onload = function(e) {
        var src = e.target.result;
        var img = '<li><img src="' + src + '"></li>';
        $('#preview').append(img);
      }
      fr.readAsDataURL(file);
    }

    $('#preview').css('display', 'block');
    $('.post_item').css('display', 'none');
  });
});
