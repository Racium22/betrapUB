// Lấy đối tượng bao ngoài popup bằng ID
const lopPhuPopup = document.getElementById("popup-chi-tiet");
// Lấy thẻ tiêu đề bên trong popup
const tieuDePopup = document.getElementById("tieu-de-popup");
// Lấy khu vực ảnh bên trong popup
const anhPopup = document.getElementById("anh-popup-hien-thi");

// Hàm mở popup xem chi tiết mẫu tráp, nhận vào tên tráp và tên lớp ảnh giữ chỗ
function moPopup(tenTrap, tenLopAnh) {
    // Nếu các đối tượng tồn tại thì mới xử lý
    if (lopPhuPopup && tieuDePopup && anhPopup) {
        // Cập nhật tiêu đề popup bằng tên tráp được truyền vào
        tieuDePopup.innerText = tenTrap;
        // Cập nhật chữ trong khung ảnh giữ chỗ
        anhPopup.innerText = "Ảnh chi tiết " + tenTrap;
        // Chuyển display từ none sang flex để hiển thị popup
        lopPhuPopup.style.display = "flex";
    }
}

// Hàm đóng popup
function dongPopup() {
    if (lopPhuPopup) {
        // Ẩn popup bằng cách đổi display về none
        lopPhuPopup.style.display = "none";
    }
}

// Lắng nghe sự kiện click ra ngoài nội dung popup để đóng popup
window.addEventListener("click", function(event) {
    // Nếu người dùng click vào vùng mờ (lớp phủ) mà không phải nội dung bên trong
    if (event.target === lopPhuPopup) {
        dongPopup();
    }
});

// Lấy đối tượng popup ảnh lớn
const lopPhuPopupAnh = document.getElementById("popup-anh-lon");
// Lấy khung chứa ảnh lớn
const khungAnhLon = document.getElementById("khung-anh-lon-hien-thi");
// Lấy tiêu đề ảnh lớn
const tieuDeAnhLon = document.getElementById("tieu-de-anh-lon");

// Hàm mở popup xem ảnh lớn
function moPopupAnh(tieuDe) {
    if (lopPhuPopupAnh && khungAnhLon && tieuDeAnhLon) {
        // Cập nhật chữ trong khung giữ chỗ ảnh lớn
        khungAnhLon.innerText = tieuDe + " (Kích thước lớn)";
        // Cập nhật tiêu đề bên dưới ảnh
        tieuDeAnhLon.innerText = tieuDe;
        // Hiển thị popup
        lopPhuPopupAnh.style.display = "flex";
    }
}

// Hàm đóng popup xem ảnh lớn
function dongPopupAnh() {
    if (lopPhuPopupAnh) {
        lopPhuPopupAnh.style.display = "none";
    }
}

// Lắng nghe sự kiện click ra ngoài để đóng popup ảnh lớn
window.addEventListener("click", function(event) {
    if (event.target === lopPhuPopupAnh) {
        dongPopupAnh();
    }
});

