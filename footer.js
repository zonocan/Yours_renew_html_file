//フッターボタンのui

$(function() {
  $('.footer_btn_line').hide();
  $('.footer_ui_btn').on('click', function() {
    $('.footer_btn_line').not($('.' + $(this).attr('id'))).hide();
    $('.' + $(this).attr('id')).show();
  })
});
