import reviews from './reviewData.js'; 

const surpriseBtn = document.querySelector('.surprise-btn'); 
const btnArray = document.querySelectorAll('.change-btn'); 
const reviewContainer = document.querySelector('.review_container'); 
let currentIndex = 0;
window.addEventListener('DOMContentLoaded', () => {
    //display first review on document load 
    let firstReview = reviews[0]; 
    let lastReview = reviews[reviews.length-1];   

    generateHTML(firstReview); 
    //increases or decreases index to display next or previous review
    btnArray.forEach(btn => btn.addEventListener('click', (e) =>{
        e.preventDefault(); 
        let show = btn.dataset.show;  
    
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
            generateHTML(firstReview); 
            return currentIndex = 0; 
        } else if((typeof nextReview === 'undefined') && (show === 'previous')){
            generateHTML(lastReview); 
            return currentIndex = reviews.length - 1; 
        }else{ 
            generateHTML(nextReview); 
        }
    }

    //shows random review, sets current index to the random index
    surpriseBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        let randomReview = getRandomReview(); 
        generateHTML(randomReview); 

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

const generateHTML = (obj) => { 
    return reviewContainer.innerHTML = `
        <img src =${obj.img} alt ='placeholder img' />
        <p class='review_author'> ${obj.author} </p>
        <p class = 'review_title'> ${obj.title} </p> 
        <p class='review_content'> ${obj.content}</p>
    `; 
}