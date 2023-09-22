const carousel = document.querySelector('.carousel-js')
fetch('/carousel.html')
.then(res => res.text())
.then(data => {
  carousel.innerHTML = data
})