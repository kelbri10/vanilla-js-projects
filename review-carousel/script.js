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
    
    btnArray.forEach(btn => btn.addEventListener('click', (e) =>{
        e.preventDefault(); 
        let show = btn.dataset.show;  
        // reviewContainer.innerHTML = ''; 
        switch(show) {
            case 'next': 
                console.log(`this is the current index: ${currentIndex}`); 
                currentIndex += 1;
                console.log(`this is the next index: ${currentIndex}`); 
                getReviewDisplay(currentIndex, show); 
               
                break; 
            case 'previous': 
                console.log(`this is the current index: ${currentIndex}`); 
                currentIndex -= 1; 
                console.log(`this is the previous index: ${currentIndex}`)
                getReviewDisplay(currentIndex, show);    
                break;
        }

        // displayReview(reviews, show); 
    })); 

    const getReviewDisplay = (index, show) => {
        let nextReview = reviews[index]; 

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