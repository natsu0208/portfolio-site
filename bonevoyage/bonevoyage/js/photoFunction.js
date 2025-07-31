$(function () {
  const photoArray = [
    { src: './images/photo01.jpg', alt: '海洋散骨で自然に還る' },
    { src: './images/photo02.jpg', alt: '広大な大地' },
    { src: './images/photo03.jpg', alt: 'スフィンクスに見守られて' },
    { src: './images/photo04.jpg', alt: '空の上で' },
    { src: './images/photo05.jpg', alt: '静かな教会で' },
    { src: './images/photo06.jpg', alt: '古き良き日本のお葬式' },
    { src: './images/photo07.jpg', alt: 'たくさんの友人と' },
    { src: './images/photo08.jpg', alt: '街を巻き込んで盛大に' },
    { src: './images/photo09.jpg', alt: 'ストームトルーパー！？' },
    { src: './images/photo10.jpg', alt: '大好きだったクラブで' },
    { src: './images/photo11.jpg', alt: '生前葬も良いものです' },
    { src: './images/photo12.jpg', alt: '音楽で彩るお葬式' },
    { src: './images/photo13.jpg', alt: '世界の頂きで' },
    { src: './images/photo14.jpg', alt: '美しい花に囲まれて' },
    { src: './images/photo15.jpg', alt: '子供のころの憧れと' },
    { src: './images/photo16.jpg', alt: '大好物に埋もれたい' },
  ];

  photoArray.map((photo) => {
    $('#photo').append(`<figure class='grid'>
        <img src=${photo.src} alt=${photo.alt} />
        <figcaption>${photo.alt}</figcaption>
      </figure>`);
  });

  $('.gridContainer').imagesLoaded(function () {
    $('.grid').each(function () {
      const target = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > target - windowHeight) {
        $(this).addClass('active');
      }
    });
  });

  $(window).on('scroll', function () {
    $('.grid').each(function () {
      const target = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > target - windowHeight) {
        $(this).addClass('active');
      }
    });
  });

  // colorConversion
  $(window).on('load scroll', function () {
    const scroll = $(this).scrollTop();
    const trigger1 = $('.gridContainer').offset().top;
    const trigger2 = trigger1 + $('.gridContainer').height();

    // logo + hamburger
    const $logoColor = $('.cls-1');
    const $hamburger = $('.hamburger span');

    if ($(this).width() < 768) {
      if (trigger1 <= scroll && scroll < trigger2) {
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
