
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// console.log(inputBox);
// console.log(listContainer);

function addTask(){
    if(inputBox.value == ''){
        alert("You must write your task....!!");
    }else{
        let li = document.createElement("li"); //li element bna rhe hain jo li mein store ho rhi h//
        li.innerHTML = inputBox.value;
        //whatever text will be entered jisme koi value hogi wahi add hoga//
        listContainer.appendChild(li);//jo li add kiya usko listcontainer mein display kr rhe hain using append//
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ''; //input hone ke baad box khali hojega//
    saveData();
}

//below is for taskdone or not//
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//function to store in local storage//

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();