// Optional functionality (future enhancement)
console.log("Welcome page loaded successfully!");


const imgContainer = document.getElementById('image-container');

imgContainer.addEventListener('mouseenter', () => {
  imgContainer.classList.add('active');
});

imgContainer.addEventListener('mouseleave', () => {
  imgContainer.classList.remove('active');
});

// Touch for mobile
imgContainer.addEventListener('touchstart', () => {
  imgContainer.classList.add('active');
});

imgContainer.addEventListener('touchend', () => {
  imgContainer.classList.remove('active');
});
