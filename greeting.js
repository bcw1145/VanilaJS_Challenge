const greeting= document.querySelector(".js-greeting");
const form=document.querySelector(".js-form");
const input= form.querySelector("input");

const SHOWING_CN="showing"
const USER_LS="currentUser"

function saveName(getName){
    localStorage.setItem(USER_LS,getName);
}

function handleClick(event){
    const btn= event.target;
    const li = btn.parentNode;
    greeting.removeChild(li);
    localStorage.removeItem(USER_LS);
    localStorage.removeItem(TODOS_LS);
    localStorage.removeItem(COORDS);
    startToDo();
    askForName();
}

function paintGreeting(getName){
    form.classList.remove(SHOWING_CN);
    const greeting_li=document.createElement("li")
    const greeting_span=document.createElement("span");
    const greeting_btn=document.createElement("button");
    greeting.classList.add(SHOWING_CN);
    greeting_span.innerText=`Welcome ${getName} `;
    input.value="";
    greeting_btn.innerText="🚪🔚";
    greeting_btn.classList.add("btn");
    greeting_span.classList.add("greeting_span")
    greeting_btn.addEventListener("click",handleClick);
    greeting_li.appendChild(greeting_span);
    greeting_li.appendChild(greeting_btn);
    greeting.appendChild(greeting_li);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue= input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
    startToDo();
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}


function loadName(){
    const loadedName= localStorage.getItem(USER_LS);
    if(loadedName===null){
        askForName()
    }else{
        paintGreeting(loadedName);
    }
}

function init(){
    //greeting.addEventListener("submit",handleSubmit);
    loadName();
}

init();