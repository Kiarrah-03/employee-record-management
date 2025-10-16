const USER_KEY = 'ems_user';
function $(id){ return document.getElementById(id); }

$('showRegister').onclick = () => {
  $('loginForm').style.display = 'none';
  $('registerForm').style.display = 'block';
};

$('showLogin').onclick = () => {
  $('registerForm').style.display = 'none';
  $('loginForm').style.display = 'block';
};

$('registerBtn').onclick = () => {
  const u = $('regUser').value.trim();
  const p = $('regPass').value.trim();
  if(!u || !p) return alert('Please fill in all fields.');
  localStorage.setItem(USER_KEY, JSON.stringify({u,p}));
  alert('Registration successful! You can now log in.');
  $('registerForm').style.display='none';
  $('loginForm').style.display='block';
};

$('loginForm').addEventListener('submit', e=>{
  e.preventDefault();
  const u = $('username').value.trim();
  const p = $('password').value.trim();
  const saved = JSON.parse(localStorage.getItem(USER_KEY) || '{}');
  if(u === saved.u && p === saved.p){
    alert('Login successful!');
  } else {
    alert('Invalid username or password.');
  }
});
