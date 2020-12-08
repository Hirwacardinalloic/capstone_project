
const readFeedback = ()=>{
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.message').value;
    const form = document.getElementById('contact-us-form');
    db.collection('feedback').add({
        email: email,
        fullname: name,
        message: message
    }).then(()=>{
        alert('feedback sent');
        form.reset();
    });
}

document.querySelector('.submit_button').addEventListener('click', (e)=>{
    e.preventDefault();
    readFeedback();

});
