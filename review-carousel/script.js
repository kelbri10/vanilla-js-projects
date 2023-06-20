import reviews from './reviewData.js'; 

const surpriseBtn = document.querySelector('.surprise-btn'); 
const btnArray = document.querySelectorAll('.change-btn'); 

window.addEventListener('DOMContentLoaded', () => {
    console.log('i loaded in from the dom content loaded code block'); 
    console.log(reviews); 

    btnArray.forEach(btn => btn.addEventListener('click', () =>{
        let show = btn.dataset.show;  

        displayReview(show); 
    })); 

    surpriseBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        let review = getRandomReview(); 

        console.log(review); 
    }); 
}); 

//on document load, user sees the first review in the array
//when user clicks the right arrow, elem + 1 to display next array element if there are no more 
//user restarts back at the beginning of array

//when user clicks the left arrow, elem - 1 to display next array element previous
//user restarts at the last element in the array if there are no more elements 
const displayReview = show => {
     console.log(`this will show the ${show} element`); 
}

//when user clicks surprise me, get random num generator in order to display a review not
//currently being displayed on the page

const getRandomReview = () => { 
    console.log('im in the random review generator'); 
    let randomNumber = Math.floor(Math.random() * reviews.length)

    return reviews[randomNumber]; 
}