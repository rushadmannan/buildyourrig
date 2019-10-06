const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let mobo = document.createElement('span');
    let casing = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    mobo.textContent = doc.data().mobo;
    casing.textContent = doc.data().casing;

    li.appendChild(mobo);
    li.appendChild(ca);

    cafeList.appendChild(li);
}

// getting data
db.collection('cafes').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafe').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
});
