const slides = document.querySelectorAll(".slide");
let count = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const imageSlide = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};
imageSlide();


const next = () => {
  if (count < slides.length - 1) {
    count++;
    imageSlide();
  } else {
    count=0;
    imageSlide();
  }
};


const prev = () => {
  if (count > 0) {
    count--;
    imageSlide();
  } else {
    count=slides.length-1;
    imageSlide();
  }
};



