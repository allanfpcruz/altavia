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
  })
  document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
      swiper.slidePrev()
    } else if (e.key === 'ArrowRight') {
      swiper.slideNext()
    }
  })  
})

//configurações da primeira progressbar
const circleContainer1 = document.querySelector('#circle-container-1')

const progressbar1 = new ProgressBar.Circle(circleContainer1, {
  strokeWidth: 5,
  color: '#3b82f6',
  from: {color: '#aaa'},
  to: {color: '#3b82f6'},
  easing: 'easeOut',
  duration: 1400,
  text: {
    value: '0',
    className: 'progress-text',
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      padding: 0,
      margin: 0,
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '3.5rem'
    }
  }
})

const animateProgressbar1 = () => {
  progressbar1.animate(1.0, {
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color)
  
      let value = Math.round(circle.value() * 60)
  
      circle.setText(value)
    }
  })
}

//configurações da segunda progressbar
const circleContainer2 = document.querySelector('#circle-container-2')

const progressbar2 = new ProgressBar.Circle(circleContainer2, {
  strokeWidth: 5,
  color: '#3b82f6',
  from: {color: '#aaa'},
  to: {color: '#3b82f6'},
  easing: 'easeOut',
  duration: 1600,
  text: {
    value: '+0',
    className: 'progress-text',
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      padding: 0,
      margin: 0,
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '3.5rem'
    }
  }
})

const animateProgressbar2 = () => {
  progressbar2.animate(1.0, {
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color)
  
      let value = '+' + Math.round(circle.value() * 750)
  
      circle.setText(value)
    }
  })
}

//configurações da terceira progressbar
const circleContainer3 = document.querySelector('#circle-container-3')

const progressbar3 = new ProgressBar.Circle(circleContainer3, {
  strokeWidth: 5,
  color: '#3b82f6',
  from: {color: '#aaa'},
  to: {color: '#3b82f6'},
  easing: 'easeOut',
  duration: 1800,
  text: {
    value: '0',
    className: 'progress-text',
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      padding: 0,
      margin: 0,
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '3.5rem'
    }
  }
})

const animateProgressbar3 = () => {
  progressbar3.animate(1.0, {
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color)
  
      let value = Math.round(circle.value() * 375)
  
      circle.setText(value)
    }
  })
}

//configurações da quarta progressbar
const circleContainer4 = document.querySelector('#circle-container-4')

const progressbar4 = new ProgressBar.Circle(circleContainer4, {
  strokeWidth: 5,
  color: '#3b82f6',
  from: {color: '#aaa'},
  to: {color: '#3b82f6'},
  easing: 'easeOut',
  duration: 2000,
  text: {
    value: '+0Mil',
    className: 'progress-text',
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      padding: 0,
      margin: 0,
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '3.5rem'
    }
  }
})

const animateProgressbar4 = () => {
  progressbar4.animate(1.0, {
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color)
  
      let value = '+' + Math.round(circle.value() * 15) + 'Mil'
  
      circle.setText(value)
    }
  })
}


//realiza a animação da progressbar quando o elemento se torna 50% visível
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      animateProgressbar1()
      animateProgressbar2()
      animateProgressbar3()
      animateProgressbar4()
      observer.unobserve(circleContainer1)
    }
  })
}, { threshold: .3 })

observer.observe(document.querySelector('.separator'))