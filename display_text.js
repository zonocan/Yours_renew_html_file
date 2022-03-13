
//投稿内容の表示

$(function() {

  $('.display_btn').on('click', function() {

    $('.review_text').toggle('fast', alertFunc);

  });

  function alertFunc() {

    if ($(this).css('display') == 'none') {

      $(".display_btn_inner").text("...詳しく読む");

    } else {

      $(".display_btn_inner").text("閉じる ▲");

    }
  };
});
