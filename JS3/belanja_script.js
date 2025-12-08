let shoppingList = [];
// Fungsi untuk merender daftar belanja
function renderList() {
    const itemsList = document.getElementById('itemsBelanja');
    itemsList.innerHTML = '';
    
    for (let i = 0; i < shoppingList.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = shoppingList[i];
        itemsList.appendChild(listItem);
    }
    
    // Perbarui jumlah item
    const jumlahItemElement = document.getElementById('jumlahItem');
    jumlahItemElement.textContent = `Jumlah item: ${shoppingList.length}`;
}
// Fungsi untuk menambah item baru
function tambahItem() {
    const newItemInput = document.getElementById('newItem');
    const newItemValue = newItemInput.value.trim();
    
    if (newItemValue !== '') {
        shoppingList.push(newItemValue);
        newItemInput.value = '';
        renderList();
    }
}
// Fungsi untuk menghapus item terakhir
function hapusItemTerakhir() {
    if (shoppingList.length > 0) {
        shoppingList.pop();
        renderList();
    }
}
//untuk inisialisasi
renderList();