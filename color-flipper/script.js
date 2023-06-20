// const simpleArray = require('./simpleData'); 
// const hexCodeArray = require('./hexCodeData'); 
const colors = ['Red', '#FAEDCB', 'RGB(201,230,192)', 'Blue', 'Orange', '#F8C8DC']; 
const backgroundColorLabel = document.querySelector('.background-color-label'); 
const btn = document.querySelector('.submit-btn'); 

//generates a random number 
const getRandomNum = () => { 
    const num = Math.floor(Math.random() * colors.length);
    console.log(`i am inside the getRandomNum(), the num is ${num}`);  

    return num; 
}

//checks what the current background color is, reruns the random num generator to get new number is current
//background color is already being displayed to the user 
const checkCurrentBackgroundColor = (num, randomColor) => { 
    if (document.querySelector('.container').style.backgroundColor !== randomColor){ 
         return num; 
    } else { 
        console.log(`i am inside the checkFunction, the num is ${num}`); 
        getRandomNum(); 
    }

}

//calls random number function to get random color
//test to make sure calls 
const changeBackgroundColor = (num) =>{ 
    const randomColor = colors[num]; 

    checkCurrentBackgroundColor(num, randomColor); 

    //changes background color and sets innerHTML to new color
    document.querySelector('.container').style.backgroundColor = randomColor; 
    backgroundColorLabel.innerHTML = randomColor;   
}

//adds click event to trigger getRandomNum and backgroundColor functions 
btn.addEventListener('click', (e) => {
    e.preventDefault();

    //sets the color to the current background color
    let color = document.querySelector('.container').style.backgroundColor; 
    let num = getRandomNum(); 

    //changes value to returned color from function 
    color = changeBackgroundColor(num); 
})

