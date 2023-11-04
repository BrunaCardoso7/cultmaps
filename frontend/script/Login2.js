const senhaInput = document.getElementById('senha');
const eyeIcon = document.getElementById('eyeIcon');

eyeIcon.addEventListener('click', () => {
    if (senhaInput.getAttribute('type') === 'password') {
        senhaInput.setAttribute('type', 'text');
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        senhaInput.setAttribute('type', 'password');
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
    console.log('bunda')
});
