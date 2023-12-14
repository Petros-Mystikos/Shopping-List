// querySelectors

const shoppingList = document.querySelector(".shoppingList");
const addBtn = document.querySelector('.add');
const itemText = document.querySelector('input');
itemText.focus();

// functions - eventListeners

addBtn.addEventListener('click', ()=> {
    if (itemText.value !== ''){
        theMagic();  
    }
    else{
        itemText.focus();
    }   
})

itemText.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter'){
        if (itemText.value !== ''){
            theMagic();  
        }    
    }
})


function theMagic(){
    // elements
    const list = document.createElement('li');
    const item = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    // get text from input and clear it
    item.textContent = itemText.value;
    itemText.value = '';

    // add text and appendChild 
    list.appendChild(checkBox); 
    list.appendChild(item);
    deleteBtn.textContent = 'Delete';
    list.appendChild(deleteBtn);

    shoppingList.appendChild(list);

    // delete item function
    deleteBtn.addEventListener('click', () => {
        shoppingList.removeChild(list);
        itemText.focus();
    })

    // focus the input box again
    itemText.focus();
}