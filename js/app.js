// const feedback = document.querySelector('#feedback-list');
// const feedbackButton = document.querySelector('#feedback-button');

// function renderFeedback(doc) {
//     let li = document.createElement('li');
//     let fullName = document.createElement('p');
//     let emailAddress = document.createElement('p');
//     let message = document.createElement('p');

//     li.setAttribute('doc-id', doc.id);
//     fullName.textContent = doc.data().fullname;
//     emailAddress.textContent = doc.data().email;
//     message.textContent = doc.data().message;

//     li.appendChild(fullName);
//     li.appendChild(emailAddress);
//     li.appendChild(message);

//     feedback.appendChild(li);

// }

// //Getting data from firebase
// feedbackButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     db.collection('feedback').get().then((snapshot) =>{
//         snapshot.docs.forEach(doc =>{
//             renderFeedback(doc);
//         });
//     });
// });
// const form = document.querySelector('#contact-us-form');
// //Saving data
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('feedback').add({
//         fullname: form.fullName.value,
//         email: form.emailAddress.value,
//         message: form.messageArea.value
//     });
//     form.fullName.value = "";
//     form.emailAddress.value = "";
//     form.messageArea.value = "";
// });
