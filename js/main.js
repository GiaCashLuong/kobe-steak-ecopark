/* ═══════════════════════════════════════════════════════════
   KOBE STEAK – main.js
   ═══════════════════════════════════════════════════════════ */

/* ─── i18n ──────────────────────────────────────────────── */
const TX = {
  vi: {
    nav_about:'Về chúng tôi', nav_menu:'Thực đơn', nav_gallery:'Không gian',
    nav_book:'Đặt bàn', nav_location:'Vị trí',
    hero_eyebrow:'Landmark Ecopark · Hưng Yên',
    hero_line1:'Nghệ Thuật', hero_line2:'Bít Tết Âu',
    hero_sub:'Hơn 60 món Âu đẳng cấp – từ Wagyu Tomahawk đến hải sản tươi sống, trong không gian sang trọng ven hồ',
    hero_book:'Đặt bàn ngay', hero_menu:'Xem thực đơn', hero_scroll:'Khám phá',
    about_eyebrow:'Câu chuyện của chúng tôi', about_title:'Hơn Cả Một Bữa Ăn',
    about_p1:'Kobe Steak ra đời từ niềm đam mê với ẩm thực Âu chính thống — nơi mỗi miếng thịt được chọn lựa kỹ càng từ những trang trại hàng đầu Mỹ, Úc và New Zealand.',
    about_p2:'Tọa lạc tại Landmark Ecopark giữa không gian xanh mát ven hồ, chúng tôi mang đến trải nghiệm ẩm thực sang trọng kết hợp sự ấm áp của bữa ăn gia đình.',
    about_f1:'Thịt nhập khẩu cao cấp', about_f2:'Wine & cocktail đặc sắc',
    about_f3:'Không gian ven hồ Ecopark', about_f4:'Đầu bếp Âu chuyên nghiệp',
    stat_years:'Năm hoạt động', stat_dishes:'Món Âu đặc sắc',
    stat_guests:'Thực khách phục vụ', stat_rating:'Đánh giá trung bình',
    menu_eyebrow:'Thực đơn', menu_title:'Hành Trình Ẩm Thực',
    tab_steak:'🥩 Steak', tab_app:'🥗 Khai vị', tab_main:'🍗 Món chính',
    tab_pasta:'🍝 Pasta', tab_pizza:'🍕 Pizza', tab_platter:'🧀 Platter',
    tab_sides:'🍟 Món phụ', tab_dessert:'🍮 Tráng miệng', tab_drinks:'🍷 Đồ uống',
    exp_eyebrow:'Trải nghiệm', exp_title:'Mọi Dịp Đều Đặc Biệt',
    exp_dinein:'Dine In', exp_dinein_d:'Trải nghiệm ẩm thực đầy đủ trong không gian sang trọng, ấm cúng với view hồ Ecopark.',
    exp_takeaway:'Takeaway', exp_takeaway_d:'Thưởng thức các món yêu thích tại nhà với đóng gói cẩn thận, giữ trọn hương vị.',
    exp_outdoor:'Outdoor Seating', exp_outdoor_d:'Bàn ngoài trời ven hồ – lý tưởng cho buổi tối lãng mạn hay họp mặt gia đình.',
    exp_private:'Private Events', exp_private_d:'Không gian riêng tư cho tiệc sinh nhật, kỷ niệm, họp mặt doanh nghiệp.',
    gal_eyebrow:'Không gian', gal_title:'Ảnh Nhà Hàng',
    test_eyebrow:'Đánh giá', test_title:'Khách Hàng Nói Gì',
    test1_text:'"Exceptional restaurant and staff. Fantastic location. Definitely worth a visit. Fantastic menu and the kind service makes this a dining experience."',
    test2_text:'"We just ate dinner here tonight. It was fantastic!!! Great restaurant with a nice atmosphere and pleasant staff. And the food... Amazing!!!"',
    test3_text:'"This is the greatest steak house in all of Ecopark! I always order their steak and Carbonara — it\'s the best. The hospitality is also out of this world!"',
    test_note:'4.8★ trên Google Maps · 187 đánh giá',
    book_eyebrow:'Đặt bàn', book_title:'Giữ Chỗ Của Bạn',
    book_desc:'Đặt bàn trước để đảm bảo chỗ ngồi tốt nhất, đặc biệt vào cuối tuần và dịp lễ.',
    book_hours:'Thứ 3 – CN: 10:00 – 22:00',
    form_name:'Họ và tên *', form_phone:'Số điện thoại *', form_guests:'Số khách *',
    form_date:'Ngày *', form_time:'Giờ *', form_time_ph:'-- Chọn giờ --',
    form_notes:'Ghi chú (tuỳ chọn)', form_submit:'Xác nhận đặt bàn',
    form_ok:'✓ Đặt bàn thành công! Chúng tôi sẽ liên hệ xác nhận sớm nhất.',
    form_err:'Có lỗi xảy ra. Vui lòng thử lại hoặc gọi trực tiếp 096 879 18 68.',
    form_val:'Vui lòng điền đầy đủ thông tin bắt buộc.',
    form_phone_val:'Số điện thoại không hợp lệ.',
    form_table_label:'Chọn bàn (tuỳ chọn)',
    map_open:'Chọn bàn', map_title:'Chọn bàn của bạn',
    map_confirm:'Xác nhận bàn này', map_cancel:'Đóng',
    map_legend_avail:'Còn trống', map_legend_sel:'Đang chọn', map_legend_booked:'Đã đặt',
    map_no_table:'Chưa chọn', map_pick_datetime:'Hãy chọn ngày & giờ trước khi chọn bàn.',
    map_indoor:'Nhà hàng', map_outdoor:'Sân vườn',
    loc_eyebrow:'Vị trí', loc_title:'Tìm Chúng Tôi',
    loc_addr_title:'Địa chỉ', loc_phone_title:'Điện thoại', loc_hours_title:'Giờ mở cửa',
    loc_hours:'Thứ 3 – Chủ Nhật: 10:00 – 22:00<br>Nghỉ Thứ Hai',
    loc_directions:'📍 Chỉ đường',
    footer_tag:'Ẩm thực Âu đẳng cấp · Landmark Ecopark',
    footer_copy:'© 2025 Kobe Steak – Landmark Ecopark. All rights reserved.',
  },
  en: {
    nav_about:'About Us', nav_menu:'Menu', nav_gallery:'Gallery',
    nav_book:'Reserve', nav_location:'Location',
    hero_eyebrow:'Landmark Ecopark · Hung Yen',
    hero_line1:'The Art of', hero_line2:'European Steak',
    hero_sub:'Over 60 premium European dishes – from Wagyu Tomahawk to fresh seafood, in a luxurious lakeside setting',
    hero_book:'Reserve a Table', hero_menu:'View Menu', hero_scroll:'Explore',
    about_eyebrow:'Our Story', about_title:'More Than a Meal',
    about_p1:'Kobe Steak was born from a passion for authentic European cuisine — where every cut is carefully selected from the finest farms in the USA, Australia and New Zealand.',
    about_p2:'Nestled at Landmark Ecopark amid lush lakeside greenery, we deliver a fine-dining experience wrapped in the warmth of a family gathering.',
    about_f1:'Premium imported meats', about_f2:'Curated wines & cocktails',
    about_f3:'Lakeside Ecopark setting', about_f4:'Professional European chefs',
    stat_years:'Years of operation', stat_dishes:'European specialties',
    stat_guests:'Guests served', stat_rating:'Average rating',
    menu_eyebrow:'Menu', menu_title:'A Culinary Journey',
    tab_steak:'🥩 Steak', tab_app:'🥗 Appetizers', tab_main:'🍗 Mains',
    tab_pasta:'🍝 Pasta', tab_pizza:'🍕 Pizza', tab_platter:'🧀 Platters',
    tab_sides:'🍟 Sides', tab_dessert:'🍮 Desserts', tab_drinks:'🍷 Drinks',
    exp_eyebrow:'Experience', exp_title:'Every Occasion is Special',
    exp_dinein:'Dine In', exp_dinein_d:'A full fine-dining experience in our elegant lakeside atmosphere.',
    exp_takeaway:'Takeaway', exp_takeaway_d:'Enjoy your favourite dishes at home, carefully packaged to preserve every flavour.',
    exp_outdoor:'Outdoor Seating', exp_outdoor_d:'Lakeside terrace — perfect for a romantic evening or a family gathering.',
    exp_private:'Private Events', exp_private_d:'Exclusive spaces for birthdays, anniversaries and corporate gatherings.',
    gal_eyebrow:'Ambiance', gal_title:'Restaurant Gallery',
    test_eyebrow:'Reviews', test_title:'What Guests Say',
    test1_text:'"Exceptional restaurant and staff. Fantastic location. Definitely worth a visit. Fantastic menu and the kind service makes this a dining experience."',
    test2_text:'"We just ate dinner here tonight. It was fantastic!!! Great restaurant with a nice atmosphere and pleasant staff. And the food... Amazing!!!"',
    test3_text:'"This is the greatest steak house in all of Ecopark! I always order their steak and Carbonara — it\'s the best. The hospitality is also out of this world!"',
    test_note:'4.8★ on Google Maps · 187 reviews',
    book_eyebrow:'Reserve', book_title:'Secure Your Seat',
    book_desc:'Book ahead to guarantee the best table, especially on weekends and holidays.',
    book_hours:'Tue – Sun: 10:00 – 22:00',
    form_name:'Full Name *', form_phone:'Phone Number *', form_guests:'Guests *',
    form_date:'Date *', form_time:'Time *', form_time_ph:'-- Select time --',
    form_notes:'Notes (optional)', form_submit:'Confirm Reservation',
    form_ok:'✓ Reservation confirmed! We will contact you shortly.',
    form_err:'An error occurred. Please try again or call 096 879 18 68 directly.',
    form_val:'Please fill in all required fields.',
    form_phone_val:'Invalid phone number.',
    form_table_label:'Table Selection (optional)',
    map_open:'Select Table', map_title:'Choose Your Table',
    map_confirm:'Confirm This Table', map_cancel:'Close',
    map_legend_avail:'Available', map_legend_sel:'Selected', map_legend_booked:'Booked',
    map_no_table:'Not selected', map_pick_datetime:'Please select a date & time before choosing a table.',
    map_indoor:'Indoor', map_outdoor:'Terrace',
    loc_eyebrow:'Location', loc_title:'Find Us',
    loc_addr_title:'Address', loc_phone_title:'Phone', loc_hours_title:'Opening Hours',
    loc_hours:'Tuesday – Sunday: 10:00 – 22:00<br>Closed Mondays',
    loc_directions:'📍 Get Directions',
    footer_tag:'Premium European Cuisine · Landmark Ecopark',
    footer_copy:'© 2025 Kobe Steak – Landmark Ecopark. All rights reserved.',
  }
};

/* ─── Menu Data ──────────────────────────────────────────── */
const MENU = {
  steak: {
    cats: [
      {
        label: { vi:'Bò Mỹ', en:'American Beef' },
        items: [
          { vi:'Steak Lõi Vai Bò Mỹ', en:'American Top Blade Steak', desc_vi:'Lõi vai bò Mỹ ăn kèm rau củ theo mùa và nước sốt.', desc_en:'American Top Blade Steak served with seasonal vegetables and sauce.', price:'200gr – 285k / 300gr – 395k / 400gr – 538k', img:'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Steak Sườn Bò Mỹ Rút Xương', en:'American Short-Rib Boneless Steak', desc_vi:'Sườn bò Mỹ rút xương ăn kèm rau củ theo mùa và nước sốt.', desc_en:'American Short-rib Boneless served with seasonal vegetables and sauce.', price:'120gr – 318k / 200gr – 527k / 300gr – 758k', img:'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Steak Tomahawk', en:'Grilled Tomahawk Steak', desc_vi:'Món steak Tomahawk cao cấp ăn kèm rau củ theo mùa, bánh mì và nước sốt.', desc_en:'A luxurious Tomahawk steak served with seasonal vegetables, bread and sauce.', price:'1,000gr – 2,079k', badge:'SPECIAL', img:'https://images.unsplash.com/photo-1558030006-450675393462?w=600&auto=format&fit=crop' },
        ]
      },
      {
        label: { vi:'Bò Úc', en:'Australian Beef' },
        items: [
          { vi:'Steak Thăn Ngoại Bò Úc', en:'Australian Striploin Steak', desc_vi:'Thăn ngoại bò Úc ăn kèm rau củ theo mùa và nước sốt.', desc_en:'Australian beef striploin served with seasonal vegetables and sauce.', price:'200gr – 285k / 300gr – 395k / 400gr – 538k', img:'https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Steak Nạc Lưng Bò Úc', en:'Australian Rib-Eye Steak', desc_vi:'Nạc lưng bò Úc ăn kèm rau củ theo mùa và nước sốt.', desc_en:'Australian Rib-eye Steak served with seasonal vegetables and sauce.', price:'200gr – 318k / 300gr – 637k / 400gr – 835k', img:'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Steak Thăn Nội Bò Úc', en:'Australian Tenderloin Steak', desc_vi:'Thăn nội bò Úc ăn kèm rau củ theo mùa và nước sốt.', desc_en:'Australian Tenderloin Steak served with seasonal vegetables and sauce.', price:'200gr – 439k / 300gr – 637k', img:'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&auto=format&fit=crop' },
        ]
      },
      {
        label: { vi:'Cừu Pháp', en:'French Lamb' },
        items: [
          { vi:'Steak Sườn Cừu Pháp', en:'French Lamb Rack Steak', desc_vi:'Sườn cừu Pháp dùng kèm rau củ theo mùa và nước sốt.', desc_en:'Tender French lamb rack served with seasonal vegetables and sauce.', price:'200gr – 499k / 300gr – 699k', img:'https://images.pexels.com/photos/6287578/pexels-photo-6287578.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      }
    ]
  },
  appetizer: {
    cats: [
      {
        label: { vi:'Súp', en:'Soups' },
        items: [
          { vi:'Súp Kem Bí Đỏ', en:'Pumpkin Cream Soup', desc_vi:'Súp kem bí đỏ đậm vị bí đỏ tự nhiên.', desc_en:'A rich and creamy pumpkin soup.', price:'55k', img:'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Súp Kem Nấm', en:'Mushroom Cream Soup', desc_vi:'Súp kem nấm béo ngậy, kết hợp vị nấm thơm lừng.', desc_en:'A hearty and flavorful mushroom cream soup.', price:'66k', img:'https://images.pexels.com/photos/1547311/pexels-photo-1547311.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Súp Kem Gà Nấm', en:'Chicken Cream Soup', desc_vi:'Súp kem gà nấm với vị ngọt thanh.', desc_en:'A comforting chicken soup with sweet taste.', price:'77k', img:'https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      },
      {
        label: { vi:'Quesadilla', en:'Quesadilla' },
        items: [
          { vi:'Bánh Quesadilla Bò', en:'Beef Quesadilla', desc_vi:'Vỏ bánh tortilla nướng giòn, nhân bò xay đậm đà và phô mai béo ngậy.', desc_en:'Crispy tortilla, flavorful ground beef, and creamy melted cheese.', price:'131k', img:'https://images.pexels.com/photos/4955269/pexels-photo-4955269.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Bánh Quesadilla Gà', en:'Chicken Quesadilla', desc_vi:'Vỏ bánh tortilla nướng giòn, nhân gà xé và phô mai tan chảy.', desc_en:'Crispy tortilla, shredded chicken, and melted cheese.', price:'131k', img:'https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      },
      {
        label: { vi:'Salad', en:'Salad' },
        items: [
          { vi:'Salad Rau Xanh', en:'Mixed Green Salad', desc_vi:'Salad rau xanh tươi mát, ăn kèm sốt chanh leo.', desc_en:'A refreshing mix of crisp greens with passion fruit sauce.', price:'100k', img:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Salad Caesar Truyền Thống', en:'Caesar Salad', desc_vi:'Salad Caesar với thịt xông khói, lườn gà nướng và rau xanh.', desc_en:'Classic Caesar salad with bacon, grilled chicken breast and greens.', price:'120k', img:'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Salad Lườn Ngỗng Xông Khói', en:'Smoked Goose Breast Salad', desc_vi:'Rau xanh, lườn ngỗng và sốt chanh leo cân bằng vị giác.', desc_en:'Green vegetables, goose breast and passion fruit sauce.', price:'140k', img:'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Salad Trái Cây Nhiệt Đới', en:'Tropical Fruit Salad', desc_vi:'Các loại trái cây tươi kèm sốt, mang lại vị ngọt mát và thanh nhẹ.', desc_en:'Fresh tropical fruits with a refreshing sauce dressing.', price:'159k', img:'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      }
    ]
  },
  main: {
    cats: [
      {
        label: { vi:'Gà & Gia Cầm', en:'Chicken & Poultry' },
        items: [
          { vi:'Cánh Gà Rán', en:'Fried Chicken Wings', desc_vi:'Cánh gà rán với cấu trúc giòn bên ngoài, mọng nước bên trong.', desc_en:'Golden fried chicken wings with a crispy exterior and juicy interior.', price:'110k', img:'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Cánh Gà Nướng BBQ', en:'Grilled BBQ Chicken Wings', desc_vi:'Gà nướng BBQ mềm mọng, ăn kèm rau củ theo mùa.', desc_en:'Juicy BBQ grilled chicken served with seasonal vegetables.', price:'120k', img:'https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Lườn Vịt Áp Chảo', en:'Pan-Seared Duck Breast', desc_vi:'Lườn vịt áp chảo ăn kèm rau củ theo mùa, khoai tây và nước sốt.', desc_en:'Pan-seared duck breast served with seasonal vegetables, potatoes and sauce.', price:'200k', img:'https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      },
      {
        label: { vi:'BBQ & Sườn', en:'BBQ & Ribs' },
        items: [
          { vi:'Sườn Heo Nướng BBQ', en:'BBQ Pork Ribs', desc_vi:'Sườn lợn nướng sốt BBQ, ăn kèm rau củ theo mùa.', desc_en:'Grilled pork ribs with BBQ sauce, served with seasonal vegetables.', price:'285k', img:'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Sườn Bò Mỹ Nướng BBQ', en:'BBQ American Beef Ribs', desc_vi:'Sườn bò Mỹ nướng sốt BBQ, ăn kèm rau củ theo mùa.', desc_en:'Grilled American beef ribs, served with seasonal vegetables.', price:'399k', img:'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      },
      {
        label: { vi:'Hải Sản', en:'Seafood' },
        items: [
          { vi:'Vẹm Xanh New Zealand Bỏ Lò', en:'Baked NZ Green Mussels', desc_vi:'Vẹm xanh NZ nướng lò cùng phô mai Anchor và Parmesan.', desc_en:'Oven-baked NZ green mussels with Anchor cheese and Parmesan.', price:'199k', img:'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Mực Vòng Chiên Giòn', en:'Crispy Fried Calamari', desc_vi:'Mực vòng chiên giòn, bên ngoài giòn rụm, bên trong mềm mại.', desc_en:'Golden-fried calamari rings, crispy outside and tender inside.', price:'209k', img:'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Cá Hồi Áp Chảo', en:'Pan-Seared Salmon', desc_vi:'Cá hồi áp chảo ăn kèm rau củ theo mùa, khoai tây và nước sốt.', desc_en:'Pan-seared salmon fillet served with seasonal vegetables and potatoes.', price:'349k', img:'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Tôm Sú Nướng Phô Mai', en:'Grilled Tiger Shrimp with Cheese', desc_vi:'Tôm sú tươi nướng vừa chín tới với lớp phô mai tan chảy.', desc_en:'Perfectly grilled tiger shrimp with melted cheese.', price:'399k', img:'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Cồi Sò Điệp Nhật Áp Chảo', en:'Pan-Seared Japanese Scallops', desc_vi:'Cồi sò điệp Nhật áp chảo vàng đều, ăn kèm rau củ và nước sốt.', desc_en:'Pan-seared Japanese scallops with seasonal vegetables and a delicate sauce.', price:'399k', img:'https://images.pexels.com/photos/8697538/pexels-photo-8697538.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      }
    ]
  },
  pasta: {
    cats: [
      {
        label: { vi:'Spaghetti', en:'Spaghetti' },
        items: [
          { vi:'Mỳ Ý Bolognese', en:'Bolognese Spaghetti', desc_vi:'Mỳ Ý sốt bò băm cổ điển, ăn kèm sốt cà chua và phô mai Parmesan.', desc_en:'Classic spaghetti with Bolognese sauce and Parmesan cheese.', price:'120k', img:'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Mỳ Ý Pesto', en:'Pesto Spaghetti', desc_vi:'Mỳ Ý trộn sốt pesto húng quế tươi và phô mai Parmesan.', desc_en:'Spaghetti tossed in fresh basil pesto and Parmesan cheese.', price:'130k', img:'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Mỳ Ý Carbonara', en:'Carbonara', desc_vi:'Mỳ Ý Carbonara béo ngậy và phô mai Parmesan.', desc_en:'A creamy carbonara with a blend of Parmesan cheese.', price:'140k', img:'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Mỳ Ý Hải Sản', en:'Seafood Spaghetti', desc_vi:'Mỳ Ý hải sản kết hợp tôm, mực và vẹm xanh.', desc_en:'Seafood spaghetti featuring shrimp, squid, and green mussels.', price:'160k', img:'https://images.pexels.com/photos/3890137/pexels-photo-3890137.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      },
      {
        label: { vi:'Penne', en:'Penne' },
        items: [
          { vi:'Nui Bỏ Lò Phô Mai', en:'Baked Penne & Cheese', desc_vi:'Mì ống đút lò cùng mông bò, phô mai Anchor và Parmesan.', desc_en:'Oven-baked penne with beef, Anchor cheese and Parmesan.', price:'180k', img:'https://images.pexels.com/photos/5949885/pexels-photo-5949885.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Penne Lamb Chop', en:'Penne with Lamb Chop', desc_vi:'Mì ống penne dùng kèm sườn cừu, phô mai Parmesan và nước sốt đậm vị.', desc_en:'Penne pasta served with lamb chop, Parmesan and a flavorful sauce.', price:'249k', img:'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      }
    ]
  },
  pizza: {
    cats: [
      {
        label: { vi:'Pizza Tươi', en:'Artisan Pizza' },
        items: [
          { vi:'Pizza Cà Chua', en:'Pizza Margherita', desc_vi:'Pizza cổ điển với sốt cà chua, phô mai mozzarella tươi và lá húng quế.', desc_en:'Classic pizza with tomato sauce, fresh mozzarella and basil leaves.', price:'179k', img:'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Pizza Bò Băm', en:'Minced Beef Pizza', desc_vi:'Pizza với bò bằm đậm đà, xúc xích, ngô ngọt và phô mai béo ngậy.', desc_en:'Minced beef, sausage, sweet corn and rich cheese pizza.', price:'199k', img:'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Pizza Hawaii', en:'Hawaiian Pizza', desc_vi:'Sự kết hợp hài hòa giữa giăm bông, dứa tươi và phô mai mozzarella.', desc_en:'Ham, fresh pineapple, and mozzarella cheese on tomato sauce.', price:'209k', img:'https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Pizza 4 Phô Mai', en:'Quattro Formaggi Pizza', desc_vi:'Pizza đặc biệt với bốn loại phô mai: mozzarella, blue cheese, parmesan và cheddar.', desc_en:'Special pizza with mozzarella, blue cheese, parmesan and cheddar.', price:'219k', img:'https://images.pexels.com/photos/3944311/pexels-photo-3944311.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Pizza Pepperoni', en:'Pepperoni Pizza', desc_vi:'Pizza với xúc xích cay, phô mai Anchor, Queso và Parmesan.', desc_en:'Classic pizza topped with spicy sausage, Anchor, Queso and Parmesan cheese.', price:'230k', img:'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Pizza Cá Hồi', en:'Salmon Pizza', desc_vi:'Pizza với cá hồi, phô mai Anchor, Queso và Parmesan béo thơm.', desc_en:'Salmon, Anchor cheese, Queso cheese and Parmesan pizza.', price:'240k', img:'https://images.pexels.com/photos/5961880/pexels-photo-5961880.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Pizza Hải Sản', en:'Seafood Pizza', desc_vi:'Pizza với mực giòn, tôm tươi, cá hồi béo ngậy và phô mai mozzarella.', desc_en:'Tender squid, fresh shrimp, salmon and mozzarella cheese pizza.', price:'279k', img:'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      }
    ]
  },
  platter: {
    cats: [
      {
        label: { vi:'Best with Wines', en:'Best with Wines' },
        items: [
          { vi:'Xúc Xích Toulouse Nướng', en:'Grilled Toulouse Sausages', desc_vi:'Xúc xích Toulouse xông khói nướng kèm các loại gia vị.', desc_en:'Toulouse sausage grilled with spices.', price:'109k', img:'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Đĩa Đồ Chiên Tổng Hợp', en:'Fried Mix Party Platter', desc_vi:'Mực chiên, khoai tây chiên, phô mai que và xúc xích.', desc_en:'Fried calamari rings, French fries, cheese sticks and sausages.', price:'239k', img:'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Đùi Lợn Muối Tây Ban Nha', en:'Spanish Cured Ham', desc_vi:'Đùi lợn muối Tây Ban Nha với hương vị mặn nhẹ đặc trưng, thơm béo tự nhiên.', desc_en:'Traditional Spanish cured ham with a delicate salty flavor and rich aroma.', price:'299k', img:'https://images.pexels.com/photos/8697517/pexels-photo-8697517.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Đĩa Thịt Nguội Tổng Hợp', en:'Cold Cut Platter', desc_vi:'Giăm bông xông khói, salami, các loại thịt nguội ăn kèm bánh mì bơ tỏi.', desc_en:'Imported cold cuts including smoked ham, salami served with garlic butter bread.', price:'359k', img:'https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      },
      {
        label: { vi:'Burger', en:'Burger' },
        items: [
          { vi:'Burger Gà', en:'Chicken Burger', desc_vi:'Burger gà rán ăn kèm rau củ, phô mai cheddar và nước sốt.', desc_en:'Fried chicken burger with vegetables, cheddar cheese and sauce.', price:'150k', img:'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Burger Bò Truyền Thống', en:'Classic Beef Burger', desc_vi:'Burger thịt bò ăn kèm rau củ, phô mai cheddar, bacon và nước sốt.', desc_en:'Beef burger with vegetables, cheddar cheese, bacon and sauce.', price:'170k', img:'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      }
    ]
  },
  sides: {
    cats: [
      {
        label: { vi:'Khoai Tây & Bánh Mì', en:'Potato & Bread' },
        items: [
          { vi:'Khoai Tây Nghiền', en:'Mashed Potatoes', desc_vi:'Khoai tây nghiền mềm mịn, béo ngậy từ bơ và kem tươi.', desc_en:'Smooth and creamy mashed potatoes, made with butter and cream.', price:'55k', img:'https://images.pexels.com/photos/4149135/pexels-photo-4149135.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Khoai Tây Chiên', en:'Classic French Fries', desc_vi:'Khoai tây chiên giòn rụm, đậm đà vị muối.', desc_en:'Crispy French fries tossed in salt.', price:'55k', img:'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Khoai Tây Bổ Cau', en:'Potato Wedges', desc_vi:'Khoai tây bổ cau vàng giòn, nêm nếm hoàn hảo với gia vị và thảo mộc.', desc_en:'Crispy golden potato wedges, perfectly seasoned with spices and herbs.', price:'55k', img:'https://images.pexels.com/photos/479213/pexels-photo-479213.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Bánh Mì Bơ Tỏi', en:'Garlic Butter Bread', desc_vi:'Bánh mì bơ tỏi giòn tan, thơm lừng vị bơ và tỏi.', desc_en:'Crispy garlic bread, perfectly toasted and packed with flavor.', price:'55k', img:'https://images.pexels.com/photos/3926134/pexels-photo-3926134.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Bánh Mì Tỏi Phô Mai', en:'Garlic Cheese Bread', desc_vi:'Bánh mì tẩm ướp với tỏi, phô mai và các loại gia vị.', desc_en:'Bread flavored with garlic, cheese and spices.', price:'79k', img:'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      }
    ]
  },
  dessert: {
    cats: [
      {
        label: { vi:'Italian-style Desserts', en:'Italian-style Desserts' },
        items: [
          { vi:'Panna Cotta', en:'Panna Cotta', desc_vi:'Mứn tráng miệng mềm mịn với hương vị sữa béo nhẹ, ngọt dịu và dễ ăn.', desc_en:'A smooth and creamy dessert with a light, delicate sweetness.', price:'35k', img:'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Tiramisu', en:'Tiramisu', desc_vi:'Bánh tiramisu với lớp kem mascarpone béo mịn, vị cà phê đậm nhẹ và cân bằng.', desc_en:'A classic Italian dessert with creamy mascarpone and a subtle coffee flavor.', price:'50k', img:'https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      }
    ]
  },
  drinks: {
    cats: [
      {
        label: { vi:'Nước & Nước Trái Cây', en:'Water & Juices' },
        items: [
          { vi:'Nước Khoáng Lavie', en:'Lavie Mineral Water', desc_vi:'Một chai nước khoáng La Vie tinh khiết.', desc_en:'A bottle of pure, refreshing La Vie mineral water.', price:'18k', img:'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Nước Chanh Tươi', en:'Fresh Lemon Juice', desc_vi:'Nước chanh tươi mát lạnh.', desc_en:'Freshly squeezed lemonade.', price:'30k', img:'https://images.pexels.com/photos/1232152/pexels-photo-1232152.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Nước Cam Tươi', en:'Fresh Orange Juice', desc_vi:'Nước cam tươi mát lạnh.', desc_en:'Freshly squeezed orange juice.', price:'55k', img:'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      },
      {
        label: { vi:'Bia & Nước Ngọt', en:'Beer & Soft Drinks' },
        items: [
          { vi:'Bia Sài Gòn', en:'Sai Gon Beer', desc_vi:'Nồng độ 4.9%, sản xuất tại Việt Nam từ 100% lúa mạch.', desc_en:'4.9% alcohol, made in Vietnam from 100% barley.', price:'30k', img:'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Coca / Pepsi / 7-Up / Soda', en:'Coca / Pepsi / 7-Up / Soda', desc_vi:'Một lon nước giải khát có ga, mát lạnh.', desc_en:'A can of cold, carbonated soft drink.', price:'25k', img:'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Coca Light', en:'Coca-Cola Light', desc_vi:'Coca Light ít calo, phù hợp cho người ăn kiêng.', desc_en:'Low-calorie Coca-Cola Light, suitable for a diet.', price:'30k', img:'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Bia Heineken', en:'Heineken Beer', desc_vi:'Nồng độ 5%, xuất xứ Hà Lan. Lúa mạch và hoa bia.', desc_en:'5% alcohol, origin Netherlands. Barley and hops.', price:'40k', img:'https://images.pexels.com/photos/1267361/pexels-photo-1267361.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      },
      {
        label: { vi:'Rượu Vang', en:'Wines' },
        items: [
          { vi:'B Royal Cabernet Sauvignon (ly)', en:'B Royal Cabernet Sauvignon (glass)', desc_vi:'Vang Đỏ, 15%, Nam Phi, Cabernet Sauvignon, 150ml.', desc_en:'Red Wine, 15%, South Africa, Cabernet Sauvignon, 150ml.', price:'69k', img:'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Terre Forti – Merlot D\'Italia', en:'Terre Forti – Merlot D\'Italia', desc_vi:'Vang Đỏ, 13%, Ý, Merlot, 750ml.', desc_en:'Red Wine, 13%, Italy, Merlot, 750ml.', price:'399k', img:'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Chantecaille – Bordeaux Red', en:'Chantecaille – Bordeaux Red', desc_vi:'Vang Đỏ, 13.5%, Pháp, Cabernet Sauvignon & Merlot, 750ml.', desc_en:'Red Wine, 13.5%, France, Cabernet Sauvignon & Merlot, 750ml.', price:'619k', img:'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Maison Castel – Merlot IGP d\'Oc', en:'Maison Castel – Merlot IGP d\'Oc', desc_vi:'Vang Đỏ, 13%, Pháp, Merlot, 750ml.', desc_en:'Red Wine, 13%, France, Merlot, 750ml.', price:'850k', img:'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { vi:'Purato Siccari Appassimento Organic', en:'Purato Siccari Appassimento Organic', desc_vi:'Vang Đỏ, 14.5%, Ý, Syrah & Nero d\'Avola, 750ml.', desc_en:'Red Wine, 14.5%, Italy, Syrah & Nero d\'Avola, 750ml.', price:'1,050k', img:'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ]
      }
    ]
  }
};

/* ─── Language ───────────────────────────────────────────── */
let lang = localStorage.getItem('lang') || 'vi';

function applyLang() {
  document.querySelectorAll('[data-tx]').forEach(el => {
    const key = el.dataset.tx;
    const val = TX[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.getElementById('lang-toggle').textContent = lang === 'vi' ? 'EN' : 'VI';
  document.documentElement.lang = lang;
  renderMenuPanels();
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  lang = lang === 'vi' ? 'en' : 'vi';
  localStorage.setItem('lang', lang);
  applyLang();
});

/* ─── Menu Render ────────────────────────────────────────── */
function formatPrice(p) {
  return p.split(' / ').join('<br>');
}

function renderMenuPanels() {
  const panels = document.getElementById('menu-panels');
  panels.innerHTML = '';
  const activeTab = document.querySelector('.menu-tab.active')?.dataset.tab || 'steak';

  Object.entries(MENU).forEach(([tabKey, tabData]) => {
    const panel = document.createElement('div');
    panel.className = 'menu-panel' + (tabKey === activeTab ? ' active' : '');
    panel.id = 'panel-' + tabKey;

    tabData.cats.forEach(cat => {
      const catHead = document.createElement('h3');
      catHead.className = 'menu-cat';
      catHead.textContent = cat.label[lang];
      panel.appendChild(catHead);

      const grid = document.createElement('div');
      grid.className = 'menu-grid';

      cat.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
          <img class="menu-card__img" src="${item.img}" alt="${item[lang === 'vi' ? 'vi' : 'en']}" loading="lazy">
          <div class="menu-card__body">
            <div class="menu-card__name">${item[lang === 'vi' ? 'vi' : 'en']}</div>
            ${lang === 'vi' ? `<div class="menu-card__name-en">${item.en}</div>` : ''}
            <div class="menu-card__desc">${item['desc_' + lang]}</div>
            <div class="menu-card__footer">
              <span class="menu-card__price">${formatPrice(item.price)}</span>
              ${item.badge ? `<span class="menu-card__badge menu-card__badge--special">${item.badge}</span>` : ''}
            </div>
          </div>`;
        grid.appendChild(card);
      });
      panel.appendChild(grid);
    });
    panels.appendChild(panel);
  });

  // Stagger cards in active panel
  setTimeout(() => staggerMenuCards(activeTab), 50);
}

function staggerMenuCards(tabKey) {
  const panel = document.getElementById('panel-' + tabKey);
  if (!panel) return;
  panel.querySelectorAll('.menu-card').forEach((el, i) => {
    setTimeout(() => el.classList.add('bento-in'), i * 60);
  });
}

/* ─── Menu Tabs ──────────────────────────────────────────── */
document.getElementById('menu-tabs').addEventListener('click', e => {
  const btn = e.target.closest('.menu-tab');
  if (!btn) return;
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderMenuPanels();
});

/* ─── NAV: scroll + mobile ───────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

document.getElementById('nav-burger').addEventListener('click', function() {
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', String(!expanded));
  document.getElementById('nav-links').classList.toggle('open', !expanded);
});

document.querySelectorAll('.nav__link').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
    document.getElementById('nav-burger').setAttribute('aria-expanded', 'false');
  });
});

/* ─── Smooth anchor scroll ───────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ─── Hero Parallax ──────────────────────────────────────── */
const heroBg = document.querySelector('.hero__bg');
function onScroll() {
  if (!heroBg) return;
  const y = window.scrollY;
  if (y < window.innerHeight) {
    heroBg.style.transform = `translateY(${y * 0.3}px)`;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ─── Scroll Reveal (generic .reveal elements) ───────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ─── Stats Counter ──────────────────────────────────────── */
const statsRow = document.querySelector('.stats-row');
if (statsRow) {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.stat__num[data-to]').forEach(el => {
        const to     = parseFloat(el.dataset.to);
        const suffix = el.dataset.suffix || '';
        const dec    = to % 1 !== 0 ? 1 : 0;
        const t0 = performance.now(), dur = 1600;
        (function step(now) {
          const p = Math.min((now - t0) / dur, 1);
          const v = 1 - Math.pow(1 - p, 3);
          el.textContent = (v * to).toFixed(dec) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = to.toFixed(dec) + suffix;
        })(t0);
      });
      statsRowObs.unobserve(entry.target);
    });
  }, { threshold: 0.6 }).observe(statsRow);
  var statsRowObs = new IntersectionObserver(() => {}, {});
  // Simpler single-use pattern:
  const statsObs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    statsRow.querySelectorAll('.stat__num[data-to]').forEach(el => {
      const to  = parseFloat(el.dataset.to);
      const sfx = el.dataset.suffix || '';
      const dec = to % 1 !== 0 ? 1 : 0;
      const t0 = performance.now(), dur = 1600;
      (function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        const v = 1 - Math.pow(1 - p, 3);
        el.textContent = (v * to).toFixed(dec) + sfx;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = to.toFixed(dec) + sfx;
      })(t0);
    });
    statsObs.unobserve(statsRow);
  }, { threshold: 0.6 });
  statsObs.observe(statsRow);
}

/* ─── Gallery Stagger ────────────────────────────────────── */
const galleryGrid = document.getElementById('masonry-grid');
if (galleryGrid) {
  new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    galleryGrid.querySelectorAll('.masonry-item').forEach((el, i) =>
      setTimeout(() => el.classList.add('bento-in'), i * 90)
    );
  }, { threshold: 0.1 }).observe(galleryGrid);
}

/* ─── Testimonials Stagger ───────────────────────────────── */
const testGrid = document.getElementById('test-grid');
if (testGrid) {
  new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    testGrid.querySelectorAll('.test-card').forEach((el, i) =>
      setTimeout(() => el.classList.add('bento-in'), i * 150)
    );
  }, { threshold: 0.1 }).observe(testGrid);
}

/* ─── 3D Tilt on .tilt-card ──────────────────────────────── */
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r  = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * -8;
    const ry = ((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) *  8;
    card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ─── Branch Map (Leaflet + OpenStreetMap) ───────────────── */
const branches = [
  {
    name: 'Kobe Steak – Ecopark',
    addr: 'L2.01S15 Landmark Ecopark, Hưng Yên',
    phone: '096 879 18 68',
    lat: 20.9550513,
    lng: 105.9314746,
    maps: 'https://maps.google.com/?q=Kobe+Steak+Landmark+Ecopark+Hung+Yen'
  }
  // Thêm chi nhánh mới vào đây:
  // { name: '...', addr: '...', phone: '...', lat: ..., lng: ..., maps: '...' }
];

const mapEl = document.getElementById('branch-map');
if (mapEl && typeof L !== 'undefined') {
  const map = L.map('branch-map', {
    scrollWheelZoom: true,
    zoomControl: true
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>'
  }).addTo(map);

  const pulseIcon = L.divIcon({
    className: '',
    html: '<span class="branch-pin"></span>',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  const markers = branches.map((b, i) => {
    const marker = L.marker([b.lat, b.lng], { icon: pulseIcon })
      .addTo(map)
      .bindPopup(`
        <strong class="popup-name">${b.name}</strong>
        <span class="popup-addr">${b.addr}</span>
        <span class="popup-phone">${b.phone}</span>
        <a class="popup-link" href="${b.maps}" target="_blank" rel="noopener">
          Xem trên Google Maps →
        </a>
      `, { maxWidth: 240, className: 'branch-popup' });
    return marker;
  });

  // Branch card click → fly to + open popup
  const cards = document.querySelectorAll('.branch-card');
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      map.flyTo([branches[i].lat, branches[i].lng], 15, { duration: 1 });
      markers[i].openPopup();
    });
  });

  if (branches.length === 1) {
    map.setView([branches[0].lat, branches[0].lng], 15);
  } else {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.25));
  }
}

/* ─── Vietnam Map Pins ───────────────────────────────────── */
const mapPopup  = document.getElementById('map-popup');
const popupName = document.getElementById('popup-name');
const popupAddr = document.getElementById('popup-addr');
const popupLink = document.getElementById('popup-link');

document.querySelectorAll('.location-pin').forEach(pin => {
  pin.addEventListener('click', e => {
    e.stopPropagation();
    if (!mapPopup) return;
    const dot     = pin.querySelector('.pin-dot');
    const dotRect = dot.getBoundingClientRect();
    const wrap    = pin.closest('.vn-map-wrap');
    const wrapRect = wrap.getBoundingClientRect();

    popupName.textContent = pin.dataset.name;
    popupAddr.textContent = pin.dataset.addr;
    popupLink.href = pin.dataset.maps;

    let left = dotRect.left - wrapRect.left + dotRect.width + 12;
    let top  = dotRect.top  - wrapRect.top  - 40;
    if (left + 230 > wrapRect.width)  left = dotRect.left - wrapRect.left - 235;
    if (top < 8) top = 8;

    mapPopup.style.left = left + 'px';
    mapPopup.style.top  = top  + 'px';
    mapPopup.classList.add('visible');
  });
});
document.addEventListener('click', () => mapPopup && mapPopup.classList.remove('visible'));

/* ─── Table Map ──────────────────────────────────────────── */
const TABLES = [
  // Outdoor – Sân vườn
  { id:'T01', x:240, y:108, zone:'outdoor' },
  { id:'T02', x:460, y:108, zone:'outdoor' },
  { id:'T03', x:183, y:168, zone:'outdoor' },
  { id:'T04', x:375, y:168, zone:'outdoor' },
  { id:'T05', x:558, y:168, zone:'outdoor' },
  { id:'T06', x:138, y:232, zone:'outdoor' },
  { id:'T07', x:375, y:232, zone:'outdoor' },
  { id:'T08', x:615, y:232, zone:'outdoor' },
  { id:'T09', x:88,  y:360, zone:'outdoor' },
  { id:'T10', x:668, y:360, zone:'outdoor' },
  // Indoor – Bên trong nhà hàng
  { id:'T11', x:200, y:338, zone:'indoor' },
  { id:'T12', x:200, y:393, zone:'indoor' },
  { id:'T13', x:200, y:448, zone:'indoor' },
  { id:'T14', x:200, y:490, zone:'indoor' },
  { id:'T15', x:318, y:358, zone:'indoor' },
  { id:'T16', x:318, y:418, zone:'indoor' },
  { id:'T17', x:318, y:475, zone:'indoor' },
  { id:'T18', x:443, y:338, zone:'indoor' },
  { id:'T19', x:443, y:393, zone:'indoor' },
  { id:'T20', x:443, y:448, zone:'indoor' },
  { id:'T21', x:443, y:490, zone:'indoor' },
  { id:'T22', x:558, y:338, zone:'indoor' },
  { id:'T23', x:558, y:393, zone:'indoor' },
  { id:'T24', x:558, y:448, zone:'indoor' },
  { id:'T25', x:558, y:490, zone:'indoor' },
];

let selectedTable = null;
let bookedTables  = new Set();

const tmapOverlay     = document.getElementById('table-map-overlay');
const floorSvg        = document.getElementById('floor-plan-svg');
const btnOpenMap      = document.getElementById('btn-open-map');
const btnCloseMap     = document.getElementById('btn-close-map');
const btnCancelMap    = document.getElementById('btn-cancel-map');
const btnConfirmTable = document.getElementById('btn-confirm-table');
const tableDisplay    = document.getElementById('table-selected-display');

function renderFloorMap() {
  const TW = 58, TH = 36;
  const ns = 'http://www.w3.org/2000/svg';

  floorSvg.innerHTML = '';

  const addEl = (tag, attrs, parent) => {
    const el = document.createElementNS(ns, tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    (parent || floorSvg).appendChild(el);
    return el;
  };

  // Background
  addEl('rect', { x:0, y:0, width:760, height:545, rx:12, fill:'#0a0e17' });

  // Terrace boundary (U-shape)
  addEl('path', { d:'M 22,84 C 22,530 738,530 738,84', fill:'rgba(201,151,58,.04)', stroke:'#c9973a', 'stroke-width':1.5, 'stroke-dasharray':'5,4' });
  addEl('line', { x1:22, y1:84, x2:738, y2:84, stroke:'#c9973a', 'stroke-width':1, 'stroke-dasharray':'4,5', opacity:.35 });

  // Zone label – outdoor
  const lblOut = addEl('text', { x:380, y:54, 'text-anchor':'middle', fill:'#c9973a', 'font-size':11, 'letter-spacing':2.5, opacity:.6 });
  lblOut.textContent = 'SÂN VƯỜN · NGOÀI TRỜI';

  // Indoor room
  addEl('rect', { x:155, y:300, width:450, height:210, rx:6, fill:'rgba(91,127,168,.07)', stroke:'#5b7fa8', 'stroke-width':1.5 });

  // Zone label – indoor
  const lblIn = addEl('text', { x:380, y:319, 'text-anchor':'middle', fill:'#5b7fa8', 'font-size':10, 'letter-spacing':1.8, opacity:.75 });
  lblIn.textContent = 'NHÀ HÀNG · BÊN TRONG';

  // Tables
  TABLES.forEach(t => {
    const isBooked   = bookedTables.has(t.id);
    const isSelected = selectedTable === t.id;
    const cls = isBooked ? 'tbl tbl--booked' : isSelected ? 'tbl tbl--selected' : 'tbl';

    const g = document.createElementNS(ns, 'g');
    g.setAttribute('class', cls);
    g.setAttribute('data-id', t.id);
    g.style.cursor = isBooked ? 'not-allowed' : 'pointer';

    addEl('rect', { x: t.x - TW/2, y: t.y - TH/2, width: TW, height: TH, rx:5, class:'tbl-rect' }, g);
    const lbl = document.createElementNS(ns, 'text');
    lbl.setAttribute('x', t.x);
    lbl.setAttribute('y', t.y + 4);
    lbl.setAttribute('text-anchor', 'middle');
    lbl.setAttribute('class', 'tbl-label');
    lbl.textContent = t.id.replace('T','');
    g.appendChild(lbl);

    if (!isBooked) g.addEventListener('click', () => handleTableClick(t.id));
    floorSvg.appendChild(g);
  });
}

function handleTableClick(id) {
  selectedTable = selectedTable === id ? null : id;
  btnConfirmTable.disabled = !selectedTable;
  renderFloorMap();
}

async function loadBookedTables(date, time) {
  const { data } = await window.db
    .from('kobe_bookings')
    .select('table_id')
    .eq('date', date)
    .eq('time', time)
    .not('table_id', 'is', null);
  bookedTables = new Set((data || []).map(r => r.table_id));
}

async function openFloorMap() {
  const date = document.getElementById('f-date').value;
  const time = document.getElementById('f-time').value;
  if (!date || !time) { showMsg(TX[lang].map_pick_datetime, 'error'); return; }
  document.getElementById('map-datetime-display').textContent = `${date.split('-').reverse().join('/')} · ${time}`;
  tmapOverlay.classList.add('visible');
  tmapOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  await loadBookedTables(date, time);
  renderFloorMap();
}

function closeFloorMap() {
  tmapOverlay.classList.remove('visible');
  tmapOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function confirmTableSelection() {
  if (!selectedTable) return;
  const t = TABLES.find(t => t.id === selectedTable);
  const zone = t.zone === 'indoor' ? TX[lang].map_indoor : TX[lang].map_outdoor;
  tableDisplay.innerHTML = `<span class="table-badge">Bàn ${t.id.replace('T','')} · ${zone} <button type="button" class="table-clear-btn" id="btn-clear-table">✕</button></span>`;
  document.getElementById('btn-clear-table').addEventListener('click', () => {
    selectedTable = null;
    tableDisplay.innerHTML = `<span class="table-none" data-tx="map_no_table">${TX[lang].map_no_table}</span>`;
  });
  closeFloorMap();
}

if (btnOpenMap)      btnOpenMap.addEventListener('click', openFloorMap);
if (btnCloseMap)     btnCloseMap.addEventListener('click', closeFloorMap);
if (btnCancelMap)    btnCancelMap.addEventListener('click', closeFloorMap);
if (btnConfirmTable) btnConfirmTable.addEventListener('click', confirmTableSelection);
if (tmapOverlay)     tmapOverlay.addEventListener('click', e => { if (e.target === tmapOverlay) closeFloorMap(); });

/* ─── Booking Form ───────────────────────────────────────── */
const form    = document.getElementById('booking-form');
const formMsg = document.getElementById('form-msg');
const dateInput = document.getElementById('f-date');

const timeSelect = document.getElementById('f-time');

function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function updateTimeOptions() {
  if (!timeSelect || !dateInput) return;
  const isToday = dateInput.value === getTodayStr();
  const currentHour = new Date().getHours();
  Array.from(timeSelect.options).forEach(opt => {
    if (!opt.value) return;
    const h = parseInt(opt.value.split(':')[0], 10);
    opt.disabled = isToday && h <= currentHour;
    if (opt.selected && opt.disabled) timeSelect.value = '';
  });
}

if (dateInput) {
  dateInput.min = getTodayStr();
  dateInput.addEventListener('change', () => {
    if (dateInput.value < getTodayStr()) dateInput.value = getTodayStr();
    updateTimeOptions();
  });
  updateTimeOptions();
}

function showMsg(text, type) {
  formMsg.textContent = text;
  formMsg.className = 'form-msg ' + type;
  if (type === 'success') setTimeout(() => { formMsg.textContent = ''; formMsg.className = 'form-msg'; }, 8000);
}

if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name   = document.getElementById('f-name').value.trim();
    const phone  = document.getElementById('f-phone').value.trim();
    const guests = parseInt(document.getElementById('f-guests').value, 10);
    const date   = document.getElementById('f-date').value;
    const time   = document.getElementById('f-time').value;
    const notes  = document.getElementById('f-notes').value.trim();

    if (!name || !phone || !date || !time) { showMsg(TX[lang].form_val, 'error'); return; }
    if (!/^[\d\s\+\-\(\)]{8,15}$/.test(phone)) { showMsg(TX[lang].form_phone_val, 'error'); return; }
    if (guests < 1 || guests > 50) { showMsg(TX[lang].form_val, 'error'); return; }

    const btn = document.getElementById('form-submit');
    btn.disabled = true;
    btn.querySelector('span').textContent = '...';

    try {
      const { error } = await window.db
        .from('kobe_bookings')
        .insert([{ name, phone, guests, date, time, note: notes, table_id: selectedTable || null }]);
      if (error) throw error;
      showMsg(TX[lang].form_ok, 'success');
      form.reset();
      dateInput.min = dateInput.min;
      selectedTable = null;
      if (tableDisplay) tableDisplay.innerHTML = `<span class="table-none">${TX[lang].map_no_table}</span>`;
    } catch {
      showMsg(TX[lang].form_err, 'error');
    } finally {
      btn.disabled = false;
      btn.querySelector('span').textContent = TX[lang].form_submit;
    }
  });
}

/* ─── Init ───────────────────────────────────────────────── */
applyLang();
