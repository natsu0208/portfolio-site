$(function () {
  $(window).on('load scroll', function () {
    const scroll = $(this).scrollTop();
    const trigger1 = $('.about').offset().top;
    const trigger2 = trigger1 + $('.about').height();
    const trigger3 = $('.plan').offset().top;
    const trigger4 = trigger3 + $('.plan').height();
    const trigger5 = $('.photoGallery').offset().top;

    // snsNav
    const $sns = $('.sns li a, .sns span');
    const $snsSelect = $('.snsSelect');

    if ($(this).width() < 1500) {
      if (trigger1 <= scroll && scroll < trigger2) {
        $sns.addClass('changeFontColor');
        $snsSelect.addClass('changeBgColor');
      } else if (trigger3 <= scroll && scroll < trigger4) {
        $sns.addClass('changeFontColor');
        $snsSelect.addClass('changeBgColor');
      } else if (trigger5 <= scroll) {
        $sns.addClass('changeFontColor');
        $snsSelect.addClass('changeBgColor');
      } else {
        $sns.removeClass('changeFontColor');
        $snsSelect.removeClass('changeBgColor');
      }
    } else {
      $sns.removeClass('changeFontColor');
      $snsSelect.removeClass('changeBgColor');
    }

    // logo + hamburger
    const $logoColor = $('.cls-1');
    const $hamburger = $('.hamburger span');

    if ($(this).width() < 768) {
      if (trigger1 <= scroll && scroll < trigger2) {
        $logoColor.css('fill', '#4b55a1');
        $hamburger.css('background', '#4b55a1');
      } else if (trigger3 <= scroll && scroll < trigger4) {
        $logoColor.css('fill', '#4b55a1');
        $hamburger.css('background', '#4b55a1');
      } else if (trigger5 <= scroll) {
        $logoColor.css('fill', '#4b55a1');
        $hamburger.css('background', '#4b55a1');
      } else {
        $logoColor.css('fill', '#f1f6f9');
        $hamburger.css('background', '#f1f6f9');
      }
    } else {
      $logoColor.css('fill', '#f1f6f9');
    }
  });
});
