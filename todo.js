const addButton = document.querySelector("addButton");
var inputValue = document.querySelector(".toAdd");
const main = document.querySelector(".main");

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    

    createDiv(itemName){
        let toAdd=document.createElement("toAdd");
        input.value=itemName;
        input.classList.add("item_name");
        input.type="text";

        let itemBox= document.createElement("div");
        itemBox.classList.add("item");

        let editButton=document.createElement("button");
        
        editButton.classList.add("editButton");

        let removeButton=document.createElement("button");
        
        removeButton.classList.add("removeButton");

        main.appendChild(itemBox);
        item.appendChild(toAdd);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
   
   
        editButton.addEventListener('click', ()=>this.edit(toAdd));
        removeButton.addEventListener("click",()=>this.remove(itemBox));

    }

    edit(toAdd){
        toAdd.disabled=!toAdd.disabled;
    } 

    remove(itemName){
        container.removeChild(itemName)
    }
    }
    function check(){
        if(input.value != ""){
            new item_name(input.value);
            input.value="";

        }
    }

    addButton.addEventListener('click', check);

