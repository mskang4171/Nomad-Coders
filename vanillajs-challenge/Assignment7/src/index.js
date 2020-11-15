// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const taskForm = document.querySelector(".js-taskForm"),
    taskInput = taskForm.querySelector("input"),
    pendingList = document.querySelector(".js-pending"),
    finishedList = document.querySelector(".js-finished");

const PENDING_LS = 'PENDING',
    FINISHED_LS = 'FINISHED';

let pendings = [],
    finisheds = [];

function rewindFinished(event){
    deleteFinished(event);
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.querySelector("span");
    paintPending(span.innerText);
}

function movePending(event){
    deletePending(event);
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.querySelector("span");
    paintFinished(span.innerText);
}

function deleteFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);
    const cleanFinisheds = finisheds.filter(function(finished){
        return finished.id !== Number(li.id);
    });
    finisheds = cleanFinisheds;
    saveFinisheds();
}
    
function deletePending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    const cleanPendings = pendings.filter(function(pending){
        return pending.id !== Number(li.id);
    });
    pendings = cleanPendings;
    savePendings();
}

function saveFinisheds(){
    localStorage.setItem(FINISHED_LS, JSON.stringify(finisheds));
}

function paintFinished(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const rewBtn = document.createElement("button");
    const span = document.createElement("span");
    const lastElem = finisheds[finisheds.length-1];
    const newId = lastElem? lastElem.id+1: 1;
    delBtn.innerText = "❌";
    rewBtn.innerText = "⏪";
    delBtn.addEventListener("click", deleteFinished);
    rewBtn.addEventListener("click", rewindFinished);
    span.innerText = text;  
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(rewBtn);
    li.id = newId;
    finishedList.appendChild(li);
    const finishedObj = {
        text: text,
        id: newId
    };
    finisheds.push(finishedObj);
    saveFinisheds();
}

function savePendings(){
    localStorage.setItem(PENDING_LS, JSON.stringify(pendings));
}

function paintPending(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const finBtn = document.createElement("button");
    const span = document.createElement("span");
    const lastElem = pendings[pendings.length-1];
    const newId = lastElem? lastElem.id+1: 1;
    delBtn.innerText = "❌";
    finBtn.innerText = "✔";
    delBtn.addEventListener("click", deletePending);
    finBtn.addEventListener("click", movePending);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finBtn);
    li.id = newId;
    pendingList.appendChild(li);
    const pendingObj = {
        text: text,
        id: newId
    };
    pendings.push(pendingObj);
    savePendings();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    paintPending(currentValue);
    taskInput.value="";
}

function loadTasks() {
    const loadedPending = localStorage.getItem(PENDING_LS),
        loadedFinished = localStorage.getItem(FINISHED_LS)
    if(loadedPending !== null){
        const parsedPending = JSON.parse(loadedPending);
        parsedPending.forEach(function(pending){
            paintPending(pending.text);
        });
    }
    if(loadedFinished !== null){
        const parsedFinished = JSON.parse(loadedFinished);
        parsedFinished.forEach(function(finished){
            paintFinished(finished.text);
        })
    }
}

function init() {
    loadTasks();
    taskForm.addEventListener("submit", handleSubmit);
}

init();
