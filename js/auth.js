//Listen for authentication status
auth.onAuthStateChanged(user => {
    if(user){
        console.log("user logged in",user);
    }else {
        console.log("user logged out");
    }
});

// const signupForm = document.getElementById('signup-form');

// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();
     
//     const email = document.getElementById('signup_email').value;
//     const password = document.getElementById('signup_password').value;
    

//     //sign up user
//     auth.createUserWithEmailAndPassword(email, password).then( cred =>{
//         console.log(cred);
//     });
    
// });
// //sign out 
// // const signOutBtn = document.getElementById('sign-out');
// // signOutBtn.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     auth.signOut().then(() => {
// //         console.log("user signed out");
// //     });
// // });

//Sign in
document.getElementById('signin-form').addEventListener('submit', (e) =>{
    e.preventDefault();
    const email = document.getElementById('signin_email').value;
    const password = document.getElementById('signin_password').value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        
    });
});