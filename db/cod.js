const cafeList = document.querySelector('#cafe-list');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let price = document.createElement('span');
    let casing = document.createElement('span');
    let gpu = document.createElement('span');
    let mobo = document.createElement('span');

    let pro = document.createElement('span');
    let ram = document.createElement('span');
//    let notun = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    price.textContent = doc.data().price;
    casing.textContent = doc.data().casing;
    gpu.textContent = doc.data().gpu;
    mobo.textContent = doc.data().mobo;

    pro.textContent = doc.data().pro;
    ram.textContent = doc.data().ram;
//    notun.textContent = doc.data().notun;

    li.appendChild(price);
    li.appendChild(casing);
    li.appendChild(gpu);
    li.appendChild(mobo);
    li.appendChild(pro);
    li.appendChild(ram);
  //  li.appendChild(notun);

    cafeList.appendChild(li);
}

// getting data
db.collection('cod').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});
