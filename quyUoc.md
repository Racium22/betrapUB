TÀI LIỆU QUY CHUẨN VÀ CẤU TRÚC DỰ ÁN: WEBSITE BÊ TRÁP UÔNG BÍ
I. TỔ CHỨC THƯ MỤC DỰ ÁN (PROJECT STRUCTURE)
Dự án được tổ chức theo mô hình cơ bản, toàn bộ các file HTML nằm ở thư mục gốc, tách biệt hoàn toàn với tài nguyên CSS, JS và hình ảnh.
VD:
Anh/            --> Chứa toàn bộ ảnh của website (banner, dịch vụ, tráp...)
css/                 --> Chứa các file định dạng giao diện (.css)
js/                  --> Chứa các file xử lý logic, hiệu ứng (.js)
index.html           --> Trang chủ
dich-vu.html         --> Trang Dịch vụ
mau-trap.html        --> Trang Mẫu tráp
thu-vien-anh.html    --> Trang Thư viện ảnh
lien-he.html         --> Trang Liên hệ
II. QUY TẮC ĐẶT TÊN & VIẾT CODE (CODING CONVENTIONS)
1. Quy tắc đặt tên File (Việt hóa, rõ công dụng)
HTML: Đặt tên không dấu, cách nhau bằng dấu gạch ngang (-).
Ví dụ: index.html , dich-vu.html , mau-trap.html , thu-vien-anh.html , lien-he.html.  
CSS: Tách biệt hoàn toàn khỏi HTML (External CSS). Sử dụng file chung cho toàn cục và file riêng cho từng trang nếu cần.
Ví dụ: dinh-dang-dung-chung.css, trang-chu.css, trang-lien-he.css.JavaScript: 
Tách biệt hoàn toàn (External JS).Ví dụ: xu-ly-chung.js, hieu-ung-popup.js.
2. Quy tắc đặt tên Class / ID trong HTML & CSS
Sử dụng tiếng Việt không dấu, nối với nhau bằng dấu gạch ngang (-), đặt tên theo đúng công dụng của thành phần.
Ví dụ:Header: .dau-trang   
Logo: .logo-thuong-hieu   
Menu: .thanh-menu-dieu-huong   
Nút đặt lịch: .nut-dat-lich   
Card dịch vụ: .the-dich-vu
3. Quy tắc giữ chỗ cho Hình ảnh (Image Placeholders)
Vì website có rất nhiều hình ảnh, khi viết HTML/CSS sẽ sử dụng thẻ <div> có độ dài/rộng cố định kết hợp màu nền phù hợp đã viết định dạng css sẵn cho các loại ảnh, các ảnh của cách trang. vì mỗi trang ảnh sẽ có kích thước khác nhau, tuỳ chỗ mới giống, sau đó với mỗi trang nhỏ trong trang web sẽ đặt tên khung giữ chỗ cho ảnh phù hợp với trang đó kèm chữ chú thích để làm khung giữ chỗ.
vd:
<div class="anh-trap-trang-chu-1"><img src="" alt="anh trap trang chu 1"> </div>
<div class="anh-dich-vu-trang-chu-1"><img src="" alt="dich vu trang chu 1"></div>
III. TÓM TẮT CÁC MODULE & GIAO DIỆN TRANG WEB
1. Thành phần cố định (Xuất hiện ở mọi trang)
HEADER (Đầu trang): Cố định khi cuộn (Sticky).  
Bên trái: Logo (Icon tráp + Tên "BÊ TRÁP UÔNG BÍ" + Slogan).  
Ở giữa: Menu (Trang chủ, Dịch vụ, Mẫu tráp, Thư viện ảnh, Liên hệ) -> Hover đổi màu vàng gold, có gạch chân.  
Bên phải: Hotline & Nút [ĐẶT LỊCH].  
FOOTER (Chân trang): Chia 4 cột (Logo, Menu nhanh, Dịch vụ, Thông tin liên hệ).  
2. Chi tiết các Trang HTML
Trang 1: Trang chủ (index.html)   
Gồm 8 phần chính từ trên xuống dưới:  
Hero Banner: Ảnh nền full màn hình, Tiêu đề, Phụ đề, Thanh tìm kiếm, Nút đặt lịch, Nút xem dịch vụ.  
Số liệu nổi bật: 4 thẻ card (500+ đám cưới, 4.9/5 đánh giá, 5 năm kinh nghiệm, Phục vụ toàn Quảng Ninh).  
Dịch vụ nổi bật (Trọng tâm): Lưới (Grid) 2 hàng, gồm 6 card dịch vụ (Bê tráp nam, Bê tráp nữ, Tráp cưới luxury, Xe hoa, Trang trí gia tiên, Combo trọn gói).  
Hiệu ứng: Hover phóng to ảnh, đổ bóng card, sáng nút.  
Quy trình đặt dịch vụ: 5 bước (Tư vấn -> Chọn dịch vụ -> Đặt lịch -> Chuẩn bị -> Tổ chức lễ).  
Giới thiệu thương hiệu: 2 cột. Trái: Ảnh thực tế/đội ngũ. Phải: Nội dung giới thiệu + Điểm mạnh + Nút tìm hiểu.  
Đánh giá khách hàng: Thanh trượt (Slider) phản hồi gồm Avatar, Nội dung, Đánh giá 5 sao.  
CTA Cuối trang: Tiêu đề kêu gọi, Hotline, Nút đặt lịch, Nút nhận tư vấn.  
Trang 2: Trang Dịch vụ (dich-vu.html)   
Bố cục: Banner đầu trang + Các phần dịch vụ riêng biệt.  
5 Dịch vụ chi tiết:
Bê tráp nam: Đội hình chuyên nghiệp, Áo dài/Vest, Đúng nghi lễ.  
Bê tráp nữ: Áo dài đồng bộ, Nhẹ nhàng, Hỗ trợ nghi thức.  
Tráp cưới: Lựa chọn 5/7/9/11 tráp, Hoa tươi, Sang trọng.  
Xe hoa: Dòng xe Sedan/SUV/Limousine, Hoa tươi cao cấp, Tài xế chuyên nghiệp.  
Trang trí gia tiên: Cổng hoa, Bàn gia tiên, Backdrop chụp ảnh.  
Cấu trúc mỗi mục: Ảnh minh họa (Khung giữ chỗ) + Mô tả + Giá + Nút đặt lịch.  
Trang 3: Trang Mẫu tráp (mau-trap.html)   
Bố cục: Banner đầu trang + Bộ lọc + Thư viện sản phẩm.  
Tính năng lọc: Lọc theo Số lượng tráp, Màu sắc, Phong cách.  
Hiển thị sản phẩm: Card gồm Ảnh + Tên bộ + Giá tham khảo + Nút xem chi tiết.  
Hành động JS: Khi bấm "Xem chi tiết" mở ra một Popup (Cửa sổ phụ) hiển thị: Slideshow ảnh, Thành phần tráp, Chất liệu, Nút đặt ngay.  
Trang 4: Trang Thư viện ảnh (thu-vien-anh.html)  
Bố cục: Banner đầu trang + Bộ lọc danh mục + Lưới ảnh (Grid).  
Danh mục ảnh lọc: Tráp nam, Tráp nữ, Tráp cưới, Xe hoa, Gia tiên, Ảnh thực tế. 
Hiệu ứng CSS/JS: Hover phóng to ảnh, hiện overlay mô tả, bấm vào ảnh mở Popup xem ảnh kích thước lớn (Full size).  
Trang 5: Trang Liên hệ (lien-he.html)   
Bố cục: Banner + Khung chứa thông tin chia làm các phần:  
Form tư vấn: Các ô nhập Họ tên, SĐT, Ngày cưới, Dịch vụ cần tư vấn, Ghi chú + Nút [GỬI YÊU CẦU TƯ VẤN].  
Thông tin liên hệ: Hotline, Zalo, Facebook, Địa chỉ, Giờ làm việc.  
Bản đồ: Nhúng Google Maps trực tiếp bằng thẻ <iframe> (Giữ khung trống trước).  
IV. CÔNG CỤ & CÔNG NGHỆ ÁP DỤNG
HTML5: Xây dựng khung xương chuẩn ngữ nghĩa (Semantic HTML: <header>, <nav>, <section>, <article>, <footer>).
CSS3: Định dạng giao diện (Sử dụng Flexbox và CSS Grid để chia bố cục phòng máy/lưới dịch vụ). Tuyệt đối không dùng thư viện ngoài (như Bootstrap) để đúng tính chất bài tập cơ bản.
JavaScript (Thuần - Vanilla JS): Xây dựng các tính năng:
Hiệu ứng cuộn trang đổi màu Header.
Đóng/mở Popup xem chi tiết mẫu tráp và xem ảnh lớn.  
Chuyển đổi qua lại giữa các ảnh trong Slider đánh giá.
