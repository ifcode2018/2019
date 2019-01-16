$(document).ready(function () {
  var partners = [{
      src: 'ifba.png',
      alt: 'Logomarca: Ifba Campus Irecê'
    },
    {
      src: 'dagh.png',
      alt: 'Logomarca: Diretório Acadêmico Grace Hopper'
    }, 
    {
      src: 'sebrae.jpeg',
      alt: 'Logomarca: sebrae'
    }
  ]

  var gold = [{
      src: 'meganews.png',
      alt: 'Logomarca: Mega News'
    },
    {
      src: 'ticonsultoria.png',
      alt: 'Logomarca: TI Consultoria'
    }
  ]

  var silver = [{
      src: 'meuesporte.png',
      alt: 'Logomarca: MeuEsporte.com'
    },
    {
      src: 'worldgames.jpg',
      alt: 'Logomarca: Word Games e Iphone Irecê'
    },
    {
      src: 'biocomp.jpeg',
      alt: 'Logomarca:biocomp'
    }
  ]

  // load images
  function loadImages(type, data, size) {
    var dir = '/dist/images/' + type + '/'

    var $container = $('<div/>', {
      'class': 'pure-g'
    })

    data.forEach(function (image) {
      let alt = image.alt
      let src = 'https://' + window.location.host + dir + image.src

      let $imageElement =
        '<div class="pure-u-' + size[1] + ' pure-u-' + size[2] + '">' +
        '<img width="100%" class="pure-img" src="' + src + '" alt="' + alt + '">' +
        '</div>'

      $container.append($imageElement)
      $('#' + type + ' .img-container').append($container, '<br><br>')
    })
  }

  loadImages('sponsors', gold, ['1', 'md-1-2'])
  loadImages('sponsors', silver, ['1-2', 'md-1-3'])
  // loadImages('sponsors', platinum, ['1-3', 'md-1-5'])
  loadImages('partners', partners, ['1', 'md-1-3'])

  // animate the navbar when the user schroll down
  $(window).scroll(function () {
    var scroll = $(window).scrollTop()
    if (scroll >= 100) {
      $('.pure-menu').addClass('scrolling')
    } else {
      $('.pure-menu').removeClass('scrolling')
    }
  })

  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault()
      // Store hash
      var hash = this.hash
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash
      })
    } // End if
  })

  $('.event-card').on('click', function () {
    $('.event-info .icon').toggleClass('is--hidden')
    $(this).children('.event-description').slideToggle(300)
  })

  // Responsive menu toogle
  $('#navbar-toggle').on('click', function () {
    // toggle the menu
    $('.pure-menu').slideToggle(300)
    // remove the default icon
    $('#navbar-toggle .icon').toggleClass('is--hidden')
  })

  // Header jumbotron typing animation
  new TypeIt('#typewriter', {
      // set the typing speed to 200
      speed: 200,
      // simulate real life typing
      lifeLike: true,
      // disable breaklines (!important)
      breakLines: false,
      // strings to write
      strings: ['Workshops...', 'Palestras!', 'Games!!', ''],
      // set the cursor
      cursorChar: '_',
      cursor: true
    })
    // final string
    .type('IF(CODE){...} 2018')
})

var loadDeferredStyles = function () {
  var addStylesNode = document.getElementById('deferred-styles')
  var replacement = document.createElement('div')
  replacement.innerHTML = addStylesNode.textContent
  document.body.appendChild(replacement)
  addStylesNode.parentElement.removeChild(addStylesNode)
}

var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
if (raf) {
  raf(function () {
    window.setTimeout(loadDeferredStyles, 0)
  })
} else {
  window.addEventListener('load', loadDeferredStyles)
}