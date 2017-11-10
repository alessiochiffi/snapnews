
var $techcHeader = $('#techcrunch-header');

$.ajax({
type: 'GET',
url: "https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=3c3fca380a754de1b3b353f510d69acc",
}).done(function(data) {
  var tempContent = '';
  var img = '';
  for (var i=0; i<data.articles.length; i++) {
    img = data.articles[i].urlToImage;
    if(img == null){
      img = 'http://howdoimoney.com/wp-content/uploads/2016/05/Business-Insider-logo.png';
    }
    tempContent += '<div class="article col-lg-3 item"><div class="cont-img"><a target="blank" href="'
            +data.articles[i].url+'"><img src="'+ img +'"></a></div><h2>' +
            data.articles[i].title+ '</h2><div class="desc-cont"><p>' +data.articles[i].description+ '</p></div></div>';
  };
  $techcHeader.html(tempContent);
  $('.slider5').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: '<span class="slick-next"></span>',
    prevArrow: '<span class="slick-prev"></span>',
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       }
     ]

  });
});




var $ftHeaderElem = $('#ft-header');

$.ajax({
type: 'GET',
url: "https://newsapi.org/v1/articles?source=financial-times&sortBy=latest&apiKey=3c3fca380a754de1b3b353f510d69acc",
}).done(function(data) {
  var tempContent = '';
  var img = '';
  for (var i=0; i<data.articles.length; i++) {
    img = data.articles[i].urlToImage;
    if(img == null){
      img = 'https://project-firefly.com/sites/default/files/styles/partners-logo/public/ft-logo.png?itok=zjfYvKZd';
    }
    tempContent += '<div class="article col-lg-3 item"><div class="cont-img"><a target="blank" href="'
            +data.articles[i].url+'"><img src="'+ img +'"></a></div><h2>' +
            data.articles[i].title+ '</h2><div class="desc-cont"><p>' +data.articles[i].description+ '</p></div></div>';
  };
  $ftHeaderElem.html(tempContent);
  $('.slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: '<span class="slick-next"></span>',
    prevArrow: '<span class="slick-prev"></span>',
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       }
     ]
  });
});



  var $bloombergHeaderElem = $('#bloomberg-header');

  $.ajax({
  type: 'GET',
  url: "https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=3c3fca380a754de1b3b353f510d69acc",
  }).done(function(data) {
    var tempContent = '';
    var img = '';
    for (var i=0; i<data.articles.length; i++) {
      img = data.articles[i].urlToImage;
      if(img == null){
        img = 'http://howdoimoney.com/wp-content/uploads/2016/05/Business-Insider-logo.png';
      }
      tempContent += '<div class="article col-lg-3 item"><div class="cont-img"><a target="blank" href="'
              +data.articles[i].url+'"><img src="'+ img +'"></a></div><h2>' +
              data.articles[i].title+ '</h2><div class="desc-cont"><p>' +data.articles[i].description+ '</p></div></div>';
    };
    $bloombergHeaderElem.html(tempContent);
    $('.slider2').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: '<span class="slick-next"></span>',
      prevArrow: '<span class="slick-prev"></span>',
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         }
       ]
    });

  });




  var $biHeader = $('#bi-header');

  $.ajax({
  type: 'GET',
  url: "https://newsapi.org/v1/articles?source=business-insider&sortBy=latest&apiKey=3c3fca380a754de1b3b353f510d69acc",
  }).done(function(data) {
    var tempContent = '';
    var img = '';
    for (var i=0; i<data.articles.length; i++) {
      img = data.articles[i].urlToImage;
      if(img == null){
        img = 'http://howdoimoney.com/wp-content/uploads/2016/05/Business-Insider-logo.png';
      }
      tempContent += '<div class="article col-lg-3 item"><div class="cont-img"><a target="blank" href="'
              +data.articles[i].url+'"><img src="'+ img +'"></a></div><h2>' +
              data.articles[i].title+ '</h2><div class="desc-cont"><p>' +data.articles[i].description+ '</p></div></div>';
    };
    $biHeader.html(tempContent);
    $('.slider3').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: '<span class="slick-next"></span>',
      prevArrow: '<span class="slick-prev"></span>',
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         }
       ]
    });
  });




    var $ecoHeader = $('#economist-header');

    $.ajax({
    type: 'GET',
    url: "https://newsapi.org/v1/articles?source=the-economist&sortBy=latest&apiKey=3c3fca380a754de1b3b353f510d69acc",
    }).done(function(data) {
      var tempContent = '';
      var img = '';
      for (var i=0; i<data.articles.length; i++) {
        img = data.articles[i].urlToImage;
        if(img == null){
          img = 'http://howdoimoney.com/wp-content/uploads/2016/05/Business-Insider-logo.png';
        }
        tempContent += '<div class="article col-lg-3 item"><div class="cont-img"><a target="blank" href="'
                +data.articles[i].url+'"><img src="'+ img +'"></a></div><h2>' +
                data.articles[i].title+ '</h2><div class="desc-cont"><p>' +data.articles[i].description+ '</p></div></div>';
      };
      $ecoHeader.html(tempContent);
      $('.slider4').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: '<span class="slick-next"></span>',
        prevArrow: '<span class="slick-prev"></span>',
        responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
             }
           },
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2
             }
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 1
             }
           }
         ]
      });
    });
