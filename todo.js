const toDoForm=document.querySelector(".js-todo"),
select=toDoForm.querySelector("select"),
inputToDo=toDoForm.querySelector("input"),
divToDo=toDoForm.querySelector(".js-planmenu"),
toDoUl=toDoForm.querySelectorAll("ul");

const TODOS_LS="toDos";

let toDos=[];

const B="BucketList",
A="AnualPlan",
M="MonthlyPlan",
D="DailyPlan";

var menuToAdd=B;

let ul=divToDo.querySelector(`.js-${menuToAdd}`);

function loadBucketList(){
    const todo=localStorage.getItem(B)
    if(todo===null){

    }else{
        
    }
}

function loadAnualPlan(){
    const todo=localStorage.getItem(A)
    
}

function loadMonthlyPlan(){
    const todo=localStorage.getItem(M)
}

function loadDailyPlan(){
    const todo=localStorage.getItem(D)
}

function printToDo(toDoItem){
    console.log(toDoItem.position);
    menuToAdd=toDoItem.position;
    ul=divToDo.querySelector(`.js-${menuToAdd}`);
    paintToDo(toDoItem.text);
}

function loadtoDo(){
    const loadedToDo=localStorage.getItem(TODOS_LS);
    if(loadedToDo===null){

    }else{
        const parsedToDo=JSON.parse(loadedToDo);
        parsedToDo.forEach(printToDo);
    }
    //loadBucketList();
    //loadAnualPlan();
    //loadMonthlyPlan();
    //loadDailyPlan();
}

function handleClickToDo(event, obj){
    const btn= event.target;
    const li = btn.parentNode;
    const position= obj.position;
    ulToDo=divToDo.querySelector(`.js-${position}`);
    ulToDo.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id !==parseInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
    //localStorage.removeItem(USER_LS)
    //startToDo();
    // askForName();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));

}

let idNumbers=1;

function deleteBtn(){
    console.log("asdfasd");
}

function paintToDo(text){
    const liToDo=document.createElement("li");
    const delBtn=document.createElement("button");
    const span=document.createElement("span");
    const newId=idNumbers;
    idNumbers+=1;
    span.innerText=text;
    delBtn.classList.add("btn");
    delBtn.type="button";
    delBtn.innerText="✅";
    liToDo.style.listStyle="none";
    liToDo.appendChild(span);
    liToDo.appendChild(delBtn);
    liToDo.id=newId;
    ul.appendChild(liToDo);

    const toDoObj={
        text,
        id:newId,
        position:menuToAdd
    }
    delBtn.addEventListener("click",function(event){
        handleClickToDo(event, toDoObj);
    });

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmitToDo(event){
    event.preventDefault();
    const toDoText=inputToDo.value;
    paintToDo(toDoText);
    inputToDo.value="";
}

function handleChangeToDo(e){
    e.preventDefault();
    var key = e.target.selectedIndex;
    var value = select.options[key].value;
    var text = select.options[key].text;
    const selectObj = {
        key: value,
        text
  };
  menuToAdd=value;
  console.log(menuToAdd);
  ul=divToDo.querySelector(`.js-${menuToAdd}`);
  //saveSelectChange(selectObj);
  //changeSelect(value);
}

function checkUser(){
    const getUser=localStorage.getItem(USER_LS);
    if(getUser===null){
        if(toDoForm.classList.toggle(SHOWING_CN)===true){
            toDoForm.classList.toggle(SHOWING_CN)
        }
    }
    else{
        toDoForm.classList.toggle(SHOWING_CN);
    }
}

function startToDo(){
    checkUser();
    loadtoDo();
    select.addEventListener("change",handleChangeToDo);
    toDoForm.addEventListener("submit", handleSubmitToDo);
}

startToDo();