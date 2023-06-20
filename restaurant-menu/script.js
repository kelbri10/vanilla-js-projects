import menuItems from './menuData.js';  
const menuContainer = document.querySelector('.menu_container');
const btnArr = document.querySelectorAll('button'); 

window.addEventListener('DOMContentLoaded', (e) => {
    console.log('dom loaded and parsed');  

    displayAllItems(menuItems); 

    //click event added to filter items according to filter data attr 
    btnArr.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        let filter = btn.dataset.filter; 
        
        filteredItems(filter);  
        })); 
});

const displayAllItems = (arr) => { 
    arr.forEach(a => {
        createNewItemElement(a); 
    })
}

const filteredItems = (filter) => { 
    //filter all menu items if filter included in the types array of obj
    let filterArr = menuItems.filter(item => item.type.includes(filter)); 

    //clear menu container
    menuContainer.innerHTML=''; 

    //create new elements for each obj in filtered wraith 
    filterArr.forEach(e => {
        createNewItemElement(e); 
    }); 
}

const createNewItemElement = (elem) => {
    //create new elem div 
    let div = document.createElement('div'); 

    //set class attr
    div.setAttribute('class', 'menu-card'); 

    //return div element 
    div.innerHTML = `
        <img src=${elem.imgSm} alt="placeholder img">
        <div class="item_container">
            <div class="item-info">
                <p class="item-name">${elem.name}</p>
                <p class="item-price">${elem.price}</p>
            </div>
            <div class="item-desc">
                <p>
                    ${elem.description}
                </p>
            </div>
        </div>
    `; 

    //append div element to menu container 
    document.querySelector('.menu_container').appendChild(div); 
}