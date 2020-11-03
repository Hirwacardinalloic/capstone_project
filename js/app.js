// const userList = document.querySelector("#users-list");

// function renderUser(doc) {
//     let li = document.createElement('li');
//     let email = document.createElement('span');
//     let password = document.createElement('span');

//     li.setAttribute('data-id', doc.id);
//     email.textContent = doc.data().email;
//     password.textContent = doc.data().password;

//     li.appendChild(email);
//     li.appendChild(password)
//     userList.appendChild(li);
// }

// db.collection('login').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderUser(doc);
//     });
// });