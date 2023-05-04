const userCards = document.querySelectorAll('.user-card');
let isDragging = false;
let currentCard;
let initialX;
let currentX;
let xOffset = 0;

userCards.forEach(card => {
  card.addEventListener('mousedown', dragStart);
  card.addEventListener('mouseup', dragEnd);
  card.addEventListener('mousemove', drag);
  card.addEventListener('touchstart', dragStart);
  card.addEventListener('touchend', dragEnd);
  card.addEventListener('touchmove', drag);
});

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
  } else {
    initialX = e.clientX - xOffset;
  }
  currentCard = this;
  isDragging = true;
}

function dragEnd(e) {
    //console.log("dragend")
    if (xOffset < -50) {
      currentCard.style.transform = `translateX(-200%)`;
      currentCard.classList.add('dislike');
    //   var likeForm = currentCard.querySelector('form[action$="/like"]');
    //   console.log(likeForm)
    //     if (likeForm) {
    //       likeForm.querySelector('button[type="submit"]').click();
    //       console.log("in dislike form")
    //     }
    const dislikBtn = document.getElementById('dislik');
    // console.log(dislikBtn)
    dislikBtn.querySelector('button[type="submit"]').click();
      setTimeout(() => {
        currentCard.remove();
      }, 300);
    } if (xOffset > 20) {
      currentCard.style.transform = `translateX(200%)`;
    //   currentCard.classList.add('like');
    //   var likeForm = currentCard.querySelector('form[action$="/like"]');
    //     if (likeForm) {
    //       likeForm.querySelector('button[type="submit"]').click();
    //     }
    const likBtn = document.getElementById('lik');
    console.log(likBtn)
    likBtn.querySelector('button[type="submit"]').click();

      setTimeout(() => {
        currentCard.remove();
      }, 300);
    } else {
      currentCard.style.transform = '';
    }
    initialX = 0;
    xOffset = 0;
    isDragging = false;
  }

// function dragEnd(e) {
//     if (xOffset < -50) {
//       currentCard.style.transform = `translateX(-200%)`;
//       currentCard.classList.add('dislike');
//       const dislikeForm = currentCard.querySelector('form[action$="/dislike"]');
//       dislikeForm.querySelector('button[type="submit"]').click();
//       setTimeout(() => {
//         currentCard.remove();
//       }, 300);
//     } else if (xOffset > 50) {
//       currentCard.style.transform = `translateX(200%)`;
//       currentCard.classList.add('like');
//       const likeForm = currentCard.querySelector('form[action$="/like"]');
//       likeForm.querySelector('button[type="submit"]').click();
//       setTimeout(() => {
//         currentCard.remove();
//       }, 300);
//     } else {
//       currentCard.style.transform = '';
//     }
//     isDragging = false;
//     currentCard = null;
//     initialX = 0;
//     xOffset = 0;
//   }
  

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
    } else {
      currentX = e.clientX - initialX;
    }
    xOffset = currentX;
    currentCard.style.transform = `translateX(${currentX}px)`;
  }
}
