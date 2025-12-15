const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const commentList = document.getElementById('commentList');
const errorComment = document.getElementById('errorComment');
// event listener click ke submitComment
submitComment.addEventListener('click', function() {
    // nilai dari textarea
    const commentText = commentInput.value; 
    // bersihkan pesan error
    errorComment.textContent = '';
    
    // validasi: cek apakah komentar kosong atau kurang dari 5 karakter gunakan trim
    const trimmedComment = commentText.trim();
    
    if (trimmedComment === '') {
        errorComment.textContent = 'Komentar tidak boleh kosong!';
        commentInput.focus();
        return; // hentikan proses
    }
    
    if (trimmedComment.length < 5) {
        errorComment.textContent = 'Komentar harus minimal 5 karakter!';
        commentInput.focus();
        return;
    }
    
    // jika valid, buat elemen komentar baru
    createCommentElement(trimmedComment);
    
    // kosongkan kembali nilai textarea
    commentInput.value = '';
});
// membuat elemen komentar baru
function createCommentElement(commentText) {
    // elemen div baru untuk setiap komentar
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    
    // elemen p untuk menampilkan teks komentar
    const commentParagraph = document.createElement('p');
    commentParagraph.textContent = commentText;
    
    // Buat tombol "Hapus"
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    
    // Tambahkan event listener untuk tombol hapus
    deleteButton.addEventListener('click', function() {
        commentList.removeChild(commentItem);
    });
    
    // Tambahkan elemen p dan tombol hapus ke dalam div komentar
    commentItem.appendChild(commentParagraph);
    commentItem.appendChild(deleteButton);
    
    // Tambahkan spasi antara tombol dan teks komentar
    deleteButton.style.marginLeft = '10px';
    
    // Tambahkan komentar baru ke daftar komentar
    commentList.appendChild(commentItem); 
}