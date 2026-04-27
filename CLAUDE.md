# Kobe Steak – Project Documentation

## Overview
Website nhà hàng bít tết Âu cao cấp tại Landmark Ecopark, Hưng Yên.

## Live URLs
- **Website:** https://kobe-steak.vercel.app
- **GitHub:** https://github.com/GiaCashLuong/kobe-steak-ecopark

## Tech Stack
- **Frontend:** Vanilla HTML/CSS/JS (single page)
- **Database:** Supabase (PostgreSQL + Row Level Security)
- **Map:** Leaflet.js (self-hosted tại `js/leaflet.js` + `css/leaflet.css`)
- **Deploy:** Vercel (auto-deploy từ GitHub `main`)

## File Structure
```
├── index.html          → Toàn bộ trang (11 sections)
├── css/
│   ├── style.css       → All styles (dark theme, components, table map)
│   └── leaflet.css     → Self-hosted Leaflet CSS
└── js/
    ├── config.js       → Supabase client init (window.db)
    ├── main.js         → Toàn bộ page logic (TX i18n, sections, booking, table map)
    ├── supabase.min.js → Self-hosted Supabase SDK
    └── leaflet.js      → Self-hosted Leaflet JS
```

## Thông tin nhà hàng
- **Địa chỉ:** L2.01S15 Landmark Ecopark, Hưng Yên
- **Tọa độ:** lat 20.9550513, lng 105.9314746
- **SĐT:** 096 879 18 68 · 08-6693-6226
- **Email:** kobesteak.hanoi@gmail.com
- **Giờ:** Thứ 3–CN 10:00–22:00, nghỉ Thứ 2
- **Facebook:** https://www.facebook.com/kobesteak.ecopark/
- **Instagram:** https://www.instagram.com/kobesteak.ecopark/

---

## Database – Supabase

### Table `kobe_bookings`
| Column | Type | Note |
|--------|------|------|
| id | bigint (serial) | PK |
| name | text | |
| phone | text | |
| date | date | |
| time | text | |
| guests | integer | default 2 |
| note | text | **`note` không phải `notes`** |
| table_id | text | nullable; comma-separated nếu nhiều bàn (vd: `"T07,T15"`) |
| created_at | timestamptz | |

**RLS:** `kobe_allow_insert` policy — anon INSERT allowed (không cần auth).

---

## Tính năng quan trọng

### Song ngữ VI/EN
- `TX` object trong `main.js` chứa tất cả strings
- Toggle lưu vào `localStorage('lang')`
- `data-tx="key"` trên HTML elements để `applyLang()` tự render

### Booking Form
- Fields: name, phone, guests, date, time, table (optional), note
- **Date:** `min` = hôm nay (realtime, không hardcode). Gõ ngày quá khứ → auto reset
- **Time:** Nếu chọn hôm nay → disable các giờ đã qua

### Sơ đồ bàn tương tác (Table Map)
SVG floor plan với 25 bàn:
- **T01–T10:** Sân vườn ngoài trời (outdoor, U-shape boundary)
- **T11–T25:** Bên trong nhà hàng (indoor, rectangular room)

**Multi-table selection logic:**
| Số khách | Số bàn tối đa |
|----------|---------------|
| 1–4 | 1 bàn |
| 5–8 | 2 bàn |
| 9–12 | 3 bàn |
| n | `ceil(n / 4)` bàn |

**3 trạng thái bàn:**
- Teal = còn trống
- Gold = đang chọn
- Cam/Orange = đã đặt

**Warning panel** hiện ra khi:
1. Số bàn chọn < số bàn cần thiết cho guests
2. Các bàn ở khu vực khác nhau (indoor vs outdoor)
3. Khoảng cách SVG giữa các bàn > 200px

Sau warning: nút "Xác nhận dù vậy" (force confirm) hoặc "Chọn lại" (dismiss warning).

**Capacity note** tự append vào ô ghi chú:
```
[Phân bổ: Bàn 07 (Sân vườn, 3 người) · Bàn 15 (Nhà hàng, 3 người)]
```

**Booking insert:** `table_id = selectedTables.join(',')` (comma-separated).
**Load booked tables:** query theo date+time, flatMap split(',') để handle multi-table.

### Leaflet Map
- Self-hosted (không dùng CDN — vi phạm CSP)
- Tọa độ: lat 20.9550513, lng 105.9314746
- HP Locator layout: branch card trái + map phải
- Click branch card → `map.flyTo()` + popup

---

## Development Rules

### Must follow
- Vanilla JS only — no React/Vue/frameworks, no build step
- Self-host tất cả thư viện vào `js/` và `css/` — không dùng CDN ngoài (vi phạm CSP Vercel)
- Không có `onclick=`, `onsubmit=`, inline event handlers trong HTML
- Event handlers via `addEventListener` only
- Không có `<script>` inline trong HTML

### CSP / Security
- `vercel.json` có security headers: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- ANTHROPIC_API_KEY, STRIPE_SECRET_KEY không được để ở frontend

### Deploy
- Push lên GitHub `main` → Vercel auto-deploy (~30s)
- Sau thay đổi: verify trên https://kobe-steak.vercel.app

### Quan trọng – cột DB
- Cột ghi chú là `note` (không phải `notes`) — đã bị bug một lần trước đây
- `table_id` là TEXT nullable, có thể chứa comma-separated IDs
