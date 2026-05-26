// Lấy đối tượng popup ảnh lớn
const lopPhuPopupAnh = document.getElementById("popup-anh-lon");
// Lấy khung chứa ảnh lớn
const khungAnhLon = document.getElementById("khung-anh-lon-hien-thi");
// Lấy tiêu đề ảnh lớn
const tieuDeAnhLon = document.getElementById("tieu-de-anh-lon");

// Hàm mở popup xem ảnh lớn
function moPopupAnh(tieuDe, urlAnh) {
    if (lopPhuPopupAnh && khungAnhLon && tieuDeAnhLon) {
        if (urlAnh) {
            // Nếu có đường dẫn ảnh, tạo thẻ img để hiển thị
            khungAnhLon.innerHTML = '<img src="' + urlAnh + '" class="anh-popup-lon">';
        } else {
            // Nếu không có, hiển thị chữ
            khungAnhLon.innerText = tieuDe + " (Kích thước lớn)";
        }
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

