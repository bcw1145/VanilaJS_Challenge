const body=document.querySelector("body");

const IMG_NUMBER=10;

function paintImg(num){
    const image= new Image();
    image.src=`./images/${num}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

}

function getRandomNumber(){
    randomNum=Math.floor(Math.random()*IMG_NUMBER)+1;
    return randomNum;
}

function init(){
    const randomNumber=getRandomNumber();
    paintImg(randomNumber);
}

init()
