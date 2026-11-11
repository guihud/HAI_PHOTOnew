# Hải Atelier — K-Editorial Photographer & Videographer Portfolio

Trang portfolio cá nhân mang phong cách **K-Editorial Luxury** dành cho **Hải (Hải Atelier)** — Nhiếp ảnh gia & Quay phim nghệ thuật đang sinh sống và làm việc tại Hàn Quốc (Seoul).

## ✨ Tính năng nổi bật

- **Hero Editorial & Scene Switcher**: Chuyển đổi bối cảnh ánh sáng đặc trưng tại Hàn Quốc (*Đêm mưa Seoul*, *Mùa thu Hàn Quốc*, *Sương mờ Bukhansan*) kết hợp hiệu ứng hạt (particles) thời gian thực trên Canvas.
- **Selected Works (Tác phẩm tiêu biểu)**: Bộ sưu tập hình ảnh nhiếp ảnh K-Editorial với bộ lọc danh mục, tìm kiếm tức thì, chế độ xem Grid / Editorial / Masonry, Lightbox chi tiết kèm thông số EXIF, bảng màu (Color Palette) và tải ảnh chất lượng cao.
- **Tích hợp Google Photos & Upload Studio**: Hỗ trợ thêm tác phẩm mới trực tiếp từ máy hoặc đồng bộ qua link chia sẻ Google Photos, lưu trữ bền vững ngay trên trình duyệt.
- **Tích hợp GitHub (`#githubModal`)**: Kết nối nhanh tài khoản/repository GitHub ngay trên thanh công cụ, hiển thị thẻ hồ sơ GitHub trực tiếp và cung cấp sẵn lệnh đẩy code.
- **Darkroom Before / After Slider**: Thanh trượt so sánh ảnh RAW gốc và bản Color Grading hoàn chỉnh theo phong cách K-Editorial.
- **Liên hệ & Đặt lịch (Booking)**: Biểu mẫu đặt lịch chụp tại Seoul / Busan / Jeju và tính năng xuất danh thiếp điện tử `.vcf`.

## 📁 Cấu trúc thư mục

```text
hai-portfolio/
├── index.html          # Giao diện và cấu trúc nội dung chính
├── styles.css          # Hệ thống thiết kế K-Editorial Dark Luxury (Typography, Grid, Responsive)
├── app.js              # Logic tương tác (Canvas Artwork, Filter, Lightbox, Google Photos, GitHub Modal)
├── hai-avatar.jpg      # Ảnh chân dung chính thức của nhiếp ảnh gia Hải Atelier
└── README.md           # Tài liệu hướng dẫn dự án & triển khai GitHub Pages
```

---

## 🚀 Hướng dẫn đẩy dự án lên GitHub

### Bước 0: Cài đặt Git (nếu máy chưa có Git)

Nếu khi mở PowerShell / Terminal và gõ `git --version` báo chưa nhận diện được lệnh, bạn có thể cài đặt Git nhanh chóng bằng lệnh Winget của Windows:

```powershell
winget install --id Git.Git -e --source winget
```

*(Tùy chọn)* Cài đặt thêm GitHub CLI (`gh`) để tạo repo tự động từ dòng lệnh:

```powershell
winget install --id GitHub.cli -e --source winget
```

Sau khi cài xong, hãy khởi động lại cửa sổ PowerShell / Terminal.

---

### Cách 1: Đẩy lên GitHub bằng giao diện Web + Git truyền thống (Khuyên dùng)

1. Truy cập [github.com/new](https://github.com/new) và tạo một repository mới tên là **`hai-portfolio`**:
   - Chọn chế độ **Public**.
   - **Không** tích chọn *Add a README file* (vì dự án đã có sẵn `README.md`).
   - Nhấn **Create repository**.
2. Mở **PowerShell** hoặc **Terminal** và chạy lần lượt các lệnh sau (đã cấu hình sẵn cho tài khoản GitHub **`HAI_PHOTO`**):

```powershell
cd "C:\Users\hoang\.gemini\antigravity\scratch\hai-portfolio"
git init -b main
git config user.name "Hai Atelier"
git config user.email "hai.hau.trang@gmail.com"
git add .
git commit -m "Initial commit: Hai Atelier K-Editorial Portfolio"
git remote add origin https://github.com/HAI_PHOTO/hai-portfolio.git
git push -u origin main
```

---

### Cách 2: Sử dụng GitHub CLI (`gh`) — Nhanh gọn trong 1 phút

Nếu bạn đã cài đặt GitHub CLI (`gh`) và đăng nhập (`gh auth login`), chỉ cần chạy:

```powershell
cd "C:\Users\hoang\.gemini\antigravity\scratch\hai-portfolio"
git init -b main
git config user.name "Hai Atelier"
git config user.email "hai.hau.trang@gmail.com"
git add .
git commit -m "Initial commit: Hai Atelier K-Editorial Portfolio"
gh repo create hai-portfolio --public --source=. --remote=origin --push
```

---

## 🌐 Cách bật GitHub Pages để chạy Website miễn phí

Sau khi đã đẩy code lên GitHub thành công:

1. Truy cập vào repository **`hai-portfolio`** của bạn trên GitHub (`https://github.com/HAI_PHOTO/hai-portfolio`).
2. Nhấn vào tab **Settings** (Cài đặt) ở thanh menu phía trên cùng.
3. Ở thanh menu bên trái, kéo xuống mục **Code and automation** và chọn **Pages**.
4. Tại phần **Build and deployment**:
   - **Source**: Chọn **Deploy from a branch**.
   - **Branch**: Chọn nhánh **`main`** và thư mục **`/ (root)`**, sau đó nhấn **Save**.
5. Đợi khoảng 1–2 phút rồi tải lại trang. GitHub sẽ hiển thị đường dẫn website chính thức của bạn tại:
   ```text
   https://hai_photo.github.io/hai-portfolio/
   ```

---

© 2026 **HẢI ATELIER (하이 아틀리에)** — Seoul, South Korea. All rights reserved.
