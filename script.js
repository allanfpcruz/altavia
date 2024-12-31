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

const totalLength = 390

//círculo 1
const progressCircle = document.querySelector('#circle-container-1 .progress-circle')
const progressText = document.querySelector('#circle-container-1 .progress-text')
const targetProgress = 78 //preencher totalmente o círculo

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      let currentProgress = 0
      const interval = setInterval(() => {
        if(currentProgress <= targetProgress) {
          const offset = (currentProgress * (totalLength / targetProgress)) / 100
          progressCircle.style.strokeDashoffset = offset
          progressText.textContent = `+${currentProgress}`
          currentProgress++
        } else {
          clearInterval(interval)
        }
      }, 15)
      observer1.unobserve(entry.target)
    }
  })
}, { threshold: 0.5 })

//aplica ao elemento 
observer1.observe(document.querySelector('#circle-container-1'))


//círculo 2
const progressCircle2 = document.querySelector('#circle-container-2 .progress-circle')
const progressText2 = document.querySelector('#circle-container-2 .progress-text')
const targetProgress2 = 750 //preencher totalmente o círculo

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      let currentProgress = 0
      const interval = setInterval(() => {
        if(currentProgress <= targetProgress2) {
          const offset = (currentProgress * (totalLength / targetProgress2)) / 100
          progressCircle2.style.strokeDashoffset = offset
          progressText2.textContent = `+${currentProgress}`
          currentProgress++
        } else {
          clearInterval(interval)
        }
      }, 5)
      observer1.unobserve(entry.target)
    }
  })
}, { threshold: 0.5 })

//aplica ao elemento 
observer2.observe(document.querySelector('#circle-container-2'))