// Login Validation & Authentication
function validateLogin () {
  event.preventDefault ();
  // Get Input values
  const username = document.getElementById('uname').value.trim();
  const password = document.getElementById('pwd').value.trim();
  // Credential verification
  const validUsername = "admin";
  const validPassword = "mobiwash2026";

  if (username === validUsername && password === validPassword) {
    window.location.href = 'index.html';
  }else {
    // Failure:Display error
    showModal();
    // Clear password field for security
    document.getElementById('pwd').value ='';
  }
}
// Modal Management
const modal = document.querySelector('.modal');
function showModal () {
  modal.style.display = 'block';
}
function dismissModal () {
  modal.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
  modal.style.display = 'none';
})
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    dismissModal();
  }
});
// Navigation toggle
const sidebar = document.querySelector('.nav-sidebar');
const toggleBtn = document.querySelector('.btn-toggle-nav');
let sidebarOpen = false;

function toggleNav () {
  sidebarOpen = !sidebarOpen;

  if (sidebarOpen) {
    sidebar.style.width = '272px';
    toggleBtn.style.transform = 'rotate(90deg)';
    sidebar.querySelectorAll('ul li').forEach(link => {
      link.style.opacity = '1';
      link.style.pointerEvents = 'auto';
    });
  } else {
    sidebar.style.width = '50px';
    toggleBtn.style.transform = 'rotate(0deg)';
    sidebar.querySelectorAll('ul li').forEach(link => {
      link.style.opacity = '0';
      link.style.pointerEvents = 'none'
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  sidebar.style.width = '50px';
  sidebar.style.transition = 'width 0.3s ease';
  toggleBtn.style.transition = 'transform 0.3s ease';

  sidebar.querySelectorAll('ul li').forEach(link => {
    link.style.opacity = '0';
    link.style.transition = 'opacity 0.3s ease';
    link.style.pointerEvents = 'none';
  });
});