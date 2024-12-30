document.addEventListener('DOMContentLoaded', () => {
  //swiper
  var swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // }
  })
  document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
      swiper.slidePrev()
    } else if (e.key === 'ArrowRight') {
      swiper.slideNext()
    }
  })

  //progressbar
  // let containerA = document.querySelector('#circleA')

  // let circleA = new ProgressBar.Circle(containerA, {
  //   color: '#64daf9',
  //   strokeWidth: 8,
  //   duration: 1400,
  //   from: {color: '#aaa'},
  //   to: {color: '#64daf9'},
  //   step: function(state, circle) {
  //       circle.path.setAttribute('stroke', state.color)

  //       let value = Math.round(circle.value() * 60)

  //       circle.setText(value)
  //   }
  // })

  // let containerB = document.querySelector('#circleB')

  // let circleB = new ProgressBar.Circle(containerA, {
  //   color: '#64daf9',
  //   strokeWidth: 8,
  //   duration: 1400,
  //   from: {color: '#aaa'},
  //   to: {color: '#64daf9'},
  //   step: function(state, circle) {
  //       circle.path.setAttribute('stroke', state.color)

  //       let value = Math.round(circle.value() * 60)

  //       circle.setText(value)
  //   }
  // })

  // let containerC = document.querySelector('#circleC')

  // let circleC = new ProgressBar.Circle(containerA, {
  //   color: '#64daf9',
  //   strokeWidth: 8,
  //   duration: 1400,
  //   from: {color: '#aaa'},
  //   to: {color: '#64daf9'},
  //   step: function(state, circle) {
  //       circle.path.setAttribute('stroke', state.color)

  //       let value = Math.round(circle.value() * 60)

  //       circle.setText(value)
  //   }
  // })

  // let containerD = document.querySelector('#circleD')

  // let circleD = new ProgressBar.Circle(containerA, {
  //   color: '#64daf9',
  //   strokeWidth: 8,
  //   duration: 1400,
  //   from: {color: '#aaa'},
  //   to: {color: '#64daf9'},
  //   step: function(state, circle) {
  //       circle.path.setAttribute('stroke', state.color)

  //       let value = Math.round(circle.value() * 60)

  //       circle.setText(value)
  //   }
  // })
})