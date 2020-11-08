var docId = localStorage.getItem('article_id');
alert()
const content1 = document.querySelector('.content1');
//getting specific article
// db.collection('article').where('id', '==', docId).get().then( (snapshot)=> {
//     snapshot.docs.forEach(doc => {
//         content1.innerHTML = doc.data().content;
//     });
// });