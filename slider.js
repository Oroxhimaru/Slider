const left = document.querySelector(".left"); //1
const right = document.querySelector(".right"); //1 
const slider = document.querySelector(".slider");  //1
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
  };

  const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
  };

  right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeColor()
  });

  const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
  };
  const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
  };

  left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeColor()
  });

  for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
  }

  const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach((button) => {
      button.style.backgroundColor = "transparent";
    });
  };

  
buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      resetBg();
      slider.style.transform = `translateX(-${i * 800}px)`;
      slideNumber = i + 1;
      button.style.backgroundColor = "white";
    });
  });

  const changeColor = ()=>{
    resetBg()
    buttons[slideNumber-1].style.backgroundColor = "white";
  }
  
  