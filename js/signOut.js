const signOutBtn = document.querySelector('.sign-out');
signOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        localStorage.removeItem('token');
        location.reload();
    });
});