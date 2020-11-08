const form = document.querySelector('#contact-us-form');
//Saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('feedback').add({
        fullname: form.fullName.value,
        email: form.emailAddress.value,
        message: form.messageArea.value
    });
    form.fullName.value = "";
    form.emailAddress.value = "";
    form.messageArea.value = "";
});
