

$(function() {
  let like = $('.like_toggle');
  like.on('click',function(){
    let $this = $(this);
    $this.toggleClass('liked');
  });
});
