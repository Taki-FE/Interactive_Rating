document.addEventListener('DOMContentLoaded', () => {

  const ratingState = document.querySelector('.rating-state');
  const thankYouState = document.querySelector('.thank-you-state');
  const submitButton = document.querySelector('button');
  const rated = document.querySelector('span');
  const rating = document.querySelectorAll('.ratings > div');

  let previousClickedRating = null;

  rating.forEach((param) => {
    param.addEventListener('click', () => {
      if (previousClickedRating) {
        previousClickedRating.style.backgroundColor = '#383e47'
      }

      param.style.backgroundColor = '#fb7413';
      param.style.color = '#ffffff';

      previousClickedRating = param;

      const clickedRating = param.textContent;
      rated.textContent = clickedRating;
    });
  });

  submitButton.addEventListener('click', () => {
    ratingState.style.display = 'none';
    thankYouState.style.display = 'flex';
  });

})