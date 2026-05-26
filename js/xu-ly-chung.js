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

// Xử lý bộ lọc thư viện ảnh
const danhMucLoc = document.querySelectorAll(".danh-sach-danh-muc li");
const cacKhungAnh = document.querySelectorAll(".luoi-thu-vien-anh .khung-anh");

if(danhMucLoc.length > 0 && cacKhungAnh.length > 0) {
    danhMucLoc.forEach(li => {
        li.addEventListener('click', function() {
            // Đổi màu danh mục đang chọn
            danhMucLoc.forEach(item => item.classList.remove('dang-chon'));
            this.classList.add('dang-chon');
            
            // Lấy tên danh mục để làm điều kiện lọc
            let filterText = this.innerText.trim().toLowerCase();
            
            cacKhungAnh.forEach(khung => {
                let classStr = khung.className.toLowerCase();
                
                if(filterText === 'tất cả') {
                    khung.style.display = 'block';
                } else if(filterText === 'tráp nam' && classStr.includes('be-trap-nam')) {
                    khung.style.display = 'block';
                } else if(filterText === 'tráp nữ' && classStr.includes('be-trap-nu')) {
                    khung.style.display = 'block';
                } else if(filterText === 'tráp cưới' && classStr.includes('trap') && !classStr.includes('be-trap')) {
                    khung.style.display = 'block';
                } else if(filterText === 'xe hoa' && classStr.includes('xe-hoa')) {
                    khung.style.display = 'block';
                } else if(filterText === 'gia tiên' && classStr.includes('gia-tien')) {
                    khung.style.display = 'block';
                } else if(filterText === 'ảnh thực tế' && classStr.includes('be-trap')) {
                    khung.style.display = 'block';
                } else {
                    khung.style.display = 'none';
                }
            });
        });
    });
}

// Xử lý bộ lọc mẫu tráp
const locSoLuong = document.getElementById("loc-so-luong");
const cacMauTrap = document.querySelectorAll(".danh-sach-mau-trap .the-mau-trap");

if(locSoLuong && cacMauTrap.length > 0) {
    // Hàm thực hiện việc lọc các mẫu tráp dựa trên số lượng được chọn
    function locMauTrap() {
        // Lấy giá trị số lượng cần lọc
        let soLuongValue = locSoLuong.value;
        
        // Duyệt qua từng mẫu tráp để kiểm tra điều kiện hiển thị
        cacMauTrap.forEach(trap => {
            // Kiểm tra mẫu tráp có khớp với số lượng được chọn hay không
            let matchesSoLuong = soLuongValue === 'tat-ca' || trap.getAttribute('data-so-luong') === soLuongValue;
            
            // Hiển thị nếu khớp, ngược lại ẩn đi
            if(matchesSoLuong) {
                trap.style.display = 'block';
            } else {
                trap.style.display = 'none';
            }
        });
    }
    
    // Lắng nghe sự kiện thay đổi (change) của ô chọn bộ lọc số lượng
    locSoLuong.addEventListener('change', locMauTrap);
}
