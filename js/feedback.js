const content = document.querySelector('.contentFeedback');

function renderFeedback(doc) {
    let section = document.createElement('section');
    section.setAttribute('class', 'feedback');
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    let fullName = document.createElement('p');
    let emailAddress = document.createElement('p');
    let message = document.createElement('p');
    let li = document.createElement('li');
    li.setAttribute('doc-id', doc.id);
    fullName.textContent = doc.data().fullname;
    emailAddress.textContent = doc.data().email;
    message.textContent = doc.data().message;

    li.appendChild(fullName);
    // li.appendChild(emailAddress);
    li.appendChild(message);

    ul.appendChild(li);
    div.append(ul);
    section.appendChild(div);
    content.appendChild(section);

}
const feedback= ()=>{
    db.collection('feedback').get().then((snapshot) =>{
        snapshot.docs.forEach(doc =>{
            renderFeedback(doc);
        });
    });
}
feedback();

   




