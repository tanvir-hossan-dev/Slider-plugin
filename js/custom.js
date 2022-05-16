let images = ["url(img/img-1.jpg) no-repeat center / cover","url(img/img-2.jpg) no-repeat center / cover","url(img/img-3.jpg) no-repeat center / cover","url(img/img-4.jpg) no-repeat center / cover"];
let slider = document.querySelector(".slider");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let count = 0;


next.addEventListener("click",() => {
    count++;
    if(count == images.length){
        count = 0;
        slider.style.background = images[count];
    }else{
        slider.style.background = images[count];
    }
})

prev.addEventListener("click", () => {
    count--;
    if(count < 0){
        count = images.length - 1 ;
        slider.style.background = images[count];

    }else{
        slider.style.background = images[count];

    }
})

