const button = document.querySelector('.share-button');
const share = document.querySelector('.share');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  const isVisible = share.classList.toggle('visible');

  if (isVisible) {
    share.classList.remove('hidden');
  } else {
    share.classList.add('hidden');
  }
});