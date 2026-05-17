// Lấy thẻ header để xử lý hiệu ứng cuộn trang
const header = document.getElementById("dau-trang-chinh");

// Lắng nghe sự kiện cuộn trang trên cửa sổ trình duyệt
window.addEventListener("scroll", function() {
    // Kiểm tra vị trí cuộn trang, nếu lớn hơn 50px thì đổi màu nền header
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#f0f0f0";
    } else {
        header.style.backgroundColor = "#fff";
    }
});

// Lấy danh sách các thẻ đánh giá để làm thanh trượt slider
const danhSachDanhGia = document.querySelectorAll(".the-danh-gia");
// Biến lưu trữ vị trí đánh giá hiện tại đang hiển thị
let viTriHienTai = 0;

// Lấy nút điều khiển chuyển slider sang trước và sau
const nutTruoc = document.getElementById("nut-truoc");
const nutSau = document.getElementById("nut-sau");

// Kiểm tra xem các nút có tồn tại không trước khi gán sự kiện (để tránh lỗi ở trang không có slider)
if (nutTruoc && nutSau) {
    // Hàm hiển thị đánh giá dựa vào chỉ số index
    function hienThiDanhGia(index) {
        // Lặp qua tất cả thẻ đánh giá và ẩn chúng đi
        for (let i = 0; i < danhSachDanhGia.length; i++) {
            danhSachDanhGia[i].style.display = "none";
        }
        // Hiển thị thẻ đánh giá được chỉ định
        danhSachDanhGia[index].style.display = "block";
    }

    // Xử lý sự kiện click nút chuyển về đánh giá trước đó
    nutTruoc.addEventListener("click", function() {
        viTriHienTai--;
        // Nếu vị trí nhỏ hơn 0, quay về đánh giá cuối cùng
        if (viTriHienTai < 0) {
            viTriHienTai = danhSachDanhGia.length - 1;
        }
        hienThiDanhGia(viTriHienTai);
    });

    // Xử lý sự kiện click nút chuyển sang đánh giá tiếp theo
    nutSau.addEventListener("click", function() {
        viTriHienTai++;
        // Nếu vị trí vượt quá số lượng, quay về đánh giá đầu tiên
        if (viTriHienTai >= danhSachDanhGia.length) {
            viTriHienTai = 0;
        }
        hienThiDanhGia(viTriHienTai);
    });
}

// Xử lý hiệu ứng slider cho ảnh nền trang chủ (Banner)
const danhSachAnhBanner = document.querySelectorAll(".anh-nen-slider");
const sliderNen = document.querySelector(".slider-nen");

if (danhSachAnhBanner.length > 0 && sliderNen) {
    let chiSoBannerHienTai = 0;
    
    // Đặt bộ đếm thời gian tự động chuyển đổi mỗi 3 giây (3000ms)
    setInterval(function() {
        chiSoBannerHienTai++;
        // Nếu vượt quá số lượng ảnh thì quay về ảnh đầu tiên
        if (chiSoBannerHienTai >= danhSachAnhBanner.length) {
            chiSoBannerHienTai = 0;
        }
        
        // Kéo slider sang trái bằng thuộc tính transform
        sliderNen.style.transform = `translateX(-${chiSoBannerHienTai * 100}%)`;
    }, 3000);
}
