myCarouselFunction = function () {
  const cardDeck = document.querySelector('.card-container');
  const cards = Array.from(cardDeck.children);

  const nextButton = document.querySelector('.carousel-control-next');
  const nextButtonIcon = document.querySelector('.carousel-control-next-icon');

  const backButton = document.querySelector('.carousel-control-prev');
  const backButtonIcon = document.querySelector('.carousel-control-prev-icon');

  var ifPrevShownCard = document.querySelector('.shownCard')?.previousElementSibling;
  var cardSize = cards[0]?.getBoundingClientRect().width;
  var divs = Array.from(document.querySelectorAll('#actualCards'));

  gsap.timeline()
    .set($(".carousel-item"), {
      marginRight: () => +24,
      backgroundImage: (i) =>
        "url(" + location.origin + "/assets/img/work/carousel/" + i + ".png)",
      backfaceVisibility: "hidden",
    });

  // Set initial state of backButton
  if (ifPrevShownCard === null) {
    backButton.classList.add('disabled');
    backButton.disabled = true;
  } else {
    backButton.classList.remove('disabled');
    backButton.disabled = false;
  }

  // Add event listener to backButtonIcon
  backButtonIcon.addEventListener('click', function () {
    const currentCard = document.querySelector('.shownCard');
    const targetCard = currentCard?.previousElementSibling;
    gsap.to(".carousel-item", {
      duration: 0.5,
      backgroundPositionX: "-=10",
      ease: "expo",
    });
    moveToCard(cardDeck, currentCard, targetCard);

    // Update state of backButton
    if (targetCard?.previousElementSibling === null) {
      backButton.classList.add('disabled');
      backButton.disabled = true;
    } else {
      backButton.classList.remove('disabled');
      backButton.disabled = false;
    }

    // Update state of nextButton
    nextButton.classList.remove('disabled');
    nextButton.disabled = false;
    backButton.blur();
  });

  // Add event listener to nextButtonIcon
  nextButtonIcon.addEventListener('click', function () {
    const currentCard = document.querySelector('.shownCard');
    const targetCard = currentCard?.nextElementSibling;
    if (targetCard == null) return;
    gsap.to(".carousel-item", {
      duration: 0.5,
      backgroundPositionX: "+=10",
      ease: "expo",
    });
    moveToCard(cardDeck, currentCard, targetCard);

    // Update state of nextButton
    if (targetCard?.nextElementSibling == null) {
      nextButton.classList.add('disabled');
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove('disabled');
      nextButton.disabled = false;
    }
    // Update state of backButton
    backButton.classList.remove('disabled');
    backButton.disabled = false;
    nextButton.blur();
  });
 

divs[0].addEventListener('click', function() {
  window.location.href = location.origin + '/project/kiesraad';
});

// divs[1].addEventListener('click', function() {
//    $(".stage").css("backgroundColor", "#000");
// });

// divs[2].addEventListener('click', function() {
//    $(".stage").css("backgroundColor", "#6905BBff");
// })

// divs[3].addEventListener('click', function() { 
//    $(".stage").css("backgroundColor", "#2a9d8f");
  
// });

  //Find a color for each one of the div cards
  cards.forEach((card, index) => {
    card.style.left = cardSize * index + 'px';
  });

  const moveToCard = (cardDeck, currentCard, targetCard) => {
    cardDeck.style.transform = 'translateX(-' + targetCard?.style.left + ')';
    cardDeck.style.transitionDuration = '0.7s';
    cardDeck.style.transitionTimingFunction = 'cubic-bezier(.4,0,.2,1)';
    currentCard?.classList.remove('shownCard');
    targetCard?.classList.add('shownCard');
  };
}