import reviews from './reviewData.js'; 

const surpriseBtn = document.querySelector('.surprise-btn'); 
const btnArray = document.querySelectorAll('.change-btn'); 
const reviewContainer = document.querySelector('.review_container'); 
let currentIndex = 0;
window.addEventListener('DOMContentLoaded', () => {
    //display first review on document load 
    let firstReview = reviews[0]; 
    let lastReview = reviews[reviews.length-1];   

    reviewContainer.innerHTML = `
        <p> ${firstReview.author} </p>
    `; 
    
    //increases or decreases index to display next or previous review
    btnArray.forEach(btn => btn.addEventListener('click', (e) =>{
        e.preventDefault(); 
        let show = btn.dataset.show;  
        // reviewContainer.innerHTML = ''; 
        switch(show) {
            case 'next': 
                currentIndex += 1;
                getReviewDisplay(currentIndex, show); 
                break; 
            case 'previous': 
                currentIndex -= 1; 
                getReviewDisplay(currentIndex, show);    
                break;
        }

    })); 

    const getReviewDisplay = (index, show) => {
        let nextReview = reviews[index]; 

        //checks the value of queued review and filter, resets if undefined 
        if ((typeof nextReview === 'undefined') && (show === 'next')){
            reviewContainer.innerHTML = `<p> ${firstReview.author} </p>`; 
            return currentIndex = 0; 
        } else if((typeof nextReview === 'undefined') && (show === 'previous')){
            reviewContainer.innerHTML = `<p> ${lastReview.author} </p>`; 
            return currentIndex = reviews.length - 1; 
        }else{ 
            reviewContainer.innerHTML = `<p> ${nextReview.author} </p>`
        }
    }

    //shows random review, sets current index to the random index
    surpriseBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        let randomReview = getRandomReview(); 
        reviewContainer.innerHTML = `<p> ${randomReview.author} </p>`; 

        currentIndex = reviews.indexOf(randomReview); 
    }); 
}); 

//when user clicks surprise me, get random num generator in order to display a review not
//currently being displayed on the page
const getRandomReview = () => { 
    console.log('im in the random review generator'); 
    let randomNumber = Math.floor(Math.random() * (reviews.length - 1)); 
    let randomReview = reviews[randomNumber]; 

    return randomReview; 
}