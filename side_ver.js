//サイドバボタンーの実装 1

$(function() {
  $('.side_nav_btn').hover(
    function() {
      $('.side_nav_cover').css('display', 'block');
      $('.side_nav_btn').css('background-color', 'white');
      $('.main_contents').css('margin', '0 10% 0 35%');
    }
  );

//サイドバーの実装
  $('.close_side_nav_btn').on('click', function() {
    $('.side_nav_cover').fadeOut();
    $('.main_contents').css('margin', '0 10% 0 20%');
    $('.side_nav_btn').css('background-color', 'black');
  })

//サイドバーのUiの実装
  $('.side_btns_guid_line').hide();
  $('.side_ui_btn').on('click', function() {
    $('.side_btns_guid_line').not($('.' + $(this).attr('id'))).hide();
    $('.' + $(this).attr('id')).show();
  })

//サイドバーのulの実装
  $('.side_btns_guid_line').hide();
  $('.side_guid').on('click', function() {
    $('.side_btns_guid_line').not($('.' + $(this).attr('id'))).hide();
    $('.' + $(this).attr('id')).show();
  })


})
