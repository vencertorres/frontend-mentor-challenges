const toggle = document.querySelector('#theme-toggle');
const prefColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

let theme;

function setTheme() {
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }

  toggle.checked = theme === 'dark' ? false : true;
  document.body.className = theme;
}

theme = prefColorScheme.matches ? 'dark' : 'light';
setTheme();

toggle.addEventListener('change', () => {
  localStorage.setItem('theme', !toggle.checked ? 'dark' : 'light');
  setTheme();
});

prefColorScheme.addEventListener('change', () => {
 theme = prefColorScheme.matches ? 'dark' : 'light';
 setTheme();
});

