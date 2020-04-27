import $ from 'jquery'
import lity from 'lity'
import AOS from 'aos'

import './index.html'
import './index.css'

import script from './scripts/components/script'

;(function () {
  // use "data-aos='fade-up'" attr
  if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
    $("[data-aos^=fade][data-aos^=fade]").css({
      "opacity": "1",
      "transform": 'translate3d(0, 0, 0)'
    })
  } else {
    AOS.init({
      disableMutationObserver: true,
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 650, // values from 0 to 3000, with step 50ms
      easing: 'ease-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false // whether elements should animate out while scrolling past them
    })
  }

  // execute here
  script()

  // Lightbox
  $(document).on('click', '.js-lightbox', lity)

  // Track Mailto
  $('a').on('click', function (e) {
    const href = $(this).attr('href')
    const mailto = href.indexOf('mailto:')
    const tel = href.indexOf('tel:')

    if (mailto > -1) {
      gtag('event', 'click', {
        'event_category': 'link',
        'event_label': 'mailto',
        'value': 1
      })
    }

    if (tel > -1) {
      gtag('event', 'click', {
        'event_category': 'link',
        'event_label': 'tel',
        'value': 1
      })
    }
  })
})()
