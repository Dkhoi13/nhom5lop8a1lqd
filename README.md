# nhom5lop8a1lqd

Trò chơi phiêu lưu vũ trụ luyện **7 hằng đẳng thức đáng nhớ** dành cho học sinh lớp 8.

## Nội dung phiên bản hiện tại

- 7 hành tinh, tương ứng với 7 hằng đẳng thức đáng nhớ.
- Mỗi hành tinh có 5 câu hỏi: trắc nghiệm, đúng/sai và điền đáp án ngắn.
- Người chơi có 10 mạng dùng chung cho cả hành trình.
- Trả lời sai sẽ bị alien ném bom, mất 1 mạng và ở lại câu hỏi đó.
- Có điểm, streak, âm thanh, confetti và màn hình tổng kết.
- Câu hỏi và đáp án được trộn thứ tự mỗi lần bắt đầu chơi.
- Tiến độ kết quả gần nhất được lưu trong localStorage trên trình duyệt.

## Cấu trúc thư mục

```text
nhom5lop8a1lqd/
├── index.html
├── style.css
├── script.js
├── questions.js
├── README.md
└── assets/
    └── alien/
        └── alien-sprite-sheet.png
```

## Chạy thử trên máy

Không nên mở riêng `index.html` trong trình xem file của ChatGPT, vì trình xem đó có thể không nạp các file CSS, JavaScript và ảnh bên cạnh.

Có thể chạy bằng một web server tĩnh, ví dụ:

```bash
python3 -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Đưa lên Netlify

### Cách nhanh: kéo thả thư mục

1. Đăng nhập Netlify.
2. Vào **Add new site → Deploy manually**.
3. Kéo thả toàn bộ thư mục `nhom5lop8a1lqd` vào vùng deploy.
4. Chờ Netlify hoàn tất và mở đường dẫn được cấp.

### Cách dùng GitHub

GitHub không bắt buộc. Nếu muốn lưu mã nguồn và tự động cập nhật:

1. Tạo repository tên `nhom5lop8a1lqd` trên GitHub.
2. Upload toàn bộ các file và thư mục trong dự án.
3. Trên Netlify chọn **Add new site → Import an existing project → GitHub**.
4. Chọn repository, để trống build command và đặt publish directory là thư mục gốc (`.`).
5. Bấm **Deploy site**.

Sau mỗi lần sửa và push lên GitHub, Netlify sẽ tự deploy lại.

## Thêm câu hỏi

Mở `questions.js`. Mỗi câu hỏi thuộc một hành tinh và có dạng:

```js
{
  id: "p1-q6",
  type: "multiple-choice",
  prompt: "Nội dung câu hỏi",
  options: [
    { id: "a", text: "Đáp án A" },
    { id: "b", text: "Đáp án B" }
  ],
  answer: "a",
  explanation: "Giải thích ngắn gọn."
}
```

Các loại hợp lệ là `multiple-choice`, `true-false` và `short-answer`. Nội dung nên giữ đúng phạm vi 7 hằng đẳng thức đáng nhớ.

## CDN đang dùng

- Tailwind CSS
- tsParticles
- canvas-confetti
- Howler.js
- Google Fonts: Be Vietnam Pro và Space Grotesk

