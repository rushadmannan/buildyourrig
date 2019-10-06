const form = document.querySelector('#add-cafe-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafe').add({
        price: form.price.value,
        mobo: form.mobo.value,
        casing: form.casing.value,
        ram: form.ram.value,
        gpu: form.gpu.value,
        pro: form.pro.value,
    });
    form.price.value = '';
    form.mobo.value = '';
    form.casing.value = '';
    form.ram.value = '';
    form.gpu.value = '';
    form.pro.value = '';
});