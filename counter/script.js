const numDisplay = document.querySelector('.number_display'); 
let counter = 0; 

//get all the btns by class name btn 
const btnsArr = document.querySelectorAll('button'); 

//add an event listener that checks the data attribute associated with the button
btnsArr.forEach(btn => {
    btn.addEventListener('click', (e) => { 
        counterFunc(btn.innerText.toLowerCase()); 
        checkNum(counter, numDisplay); 
        numDisplay.innerText = counter; 
    })
}); 

//switch statement that increments, decreases or sets the counter to 0
const counterFunc = (operator) => { 
    switch (operator) { 
        case 'decrease': 
            counter--; 
            break; 
        case 'reset': 
            counter = 0; 
            break; 
        case 'increase': 
            counter++; 
            break;  
    }
}

//check if 
const checkNum = (counter, numDisplay) => { 
    if (counter < 0 ) { 
        numDisplay.style.color = 'red'; 
    } else if (counter > 0) {
        numDisplay.style.color = 'green'; 
    } else { 
        numDisplay.style.color ='#28282B'; 
    }
    // switch(counter) { 
    //     case counter < 0: 
    //         numDisplay.style.color = 'red'; 
    //         break; 
    //     case counter > 0: 
    //         numDisplay.style.color = 'green'; 
    //         break; 
        // default: 
        //     numDisplay.style.color = '#28282B'; 
        //     break; 
    // }
}