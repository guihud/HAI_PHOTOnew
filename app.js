// ============================================================================
// HẢI STUDIO — PHOTOGRAPHER & VIDEOGRAPHER | K-EDITORIAL + GOOGLE PHOTOS ENGINE
// ============================================================================

const STORAGE_KEY_GPHOTOS = 'hai_atelier_gphotos_synced_v1';
const STORAGE_KEY_AVATAR = 'hai_atelier_avatar_v1';
const STORAGE_KEY_GITHUB = 'hai_atelier_github_v1';
const DEFAULT_AVATAR_IMAGE_URL = 'hai-avatar.jpg';
const DEFAULT_AVATAR_GPHOTOS_URL = 'https://photos.google.com/photo/AF1QipOtvbseQtK7D2gkdF4kAlDrBh-pzHZRTx_gE9ES';

const BASE_GALLERY_ITEMS = [
  {
    id: 'p1',
    title: 'Mùa Thu Lá Đỏ Naejangsan (내장산의 단풍)',
    category: 'landscape',
    categoryLabel: 'Phong cảnh',
    wide: true,
    camera: 'Leica SL3',
    lens: 'Summilux-SL 28mm f/1.4 ASPH',
    exposure: 'f/5.6 • 1/125s • ISO 100',
    location: 'Naejangsan National Park, Korea',
    story: 'Sắc lá phong đỏ rực và ngân hạnh vàng óng ánh soi bóng xuống mặt hồ tĩnh lặng giữa tiết trời thu se lạnh đặc trưng của Hàn Quốc.',
    palette: ['#12090a', '#3b1518', '#b83b2b', '#e69b45', '#f4efe6'],
    sceneType: 'jejuDawn',
    googlePhotosWebUrl: 'https://photos.google.com/photo/AF1QipNiO12OegQY6REKbMvkkPaZV-lWFe9ULNyPmTq7',
    source: 'gphotos'
  },
  {
    id: 'p2',
    title: 'Con Dốc Itaewon Sau Cơn Mưa (이태원의 밤비)',
    category: 'street',
    categoryLabel: 'Đường phố',
    wide: false,
    camera: 'Leica M11',
    lens: 'Summilux-M 35mm f/1.4 ASPH',
    exposure: 'f/1.4 • 1/100s • ISO 640',
    location: 'Itaewon-dong, Seoul',
    story: 'Ánh đèn bảng hiệu Hàn Quốc với sắc hồng phấn, xanh lam dịu và vàng ấm phản chiếu trên con dốc ướt mưa mang đậm không khí K-Drama.',
    palette: ['#0c0e18', '#232946', '#e2a8b4', '#7da8d6', '#dfcba9'],
    sceneType: 'itaewonRain',
    source: 'atelier'
  },
  {
    id: 'p3',
    title: 'Cosmos Dabang Retro Portrait (코스모스 다방)',
    category: 'portrait',
    categoryLabel: 'Chân dung',
    wide: false,
    camera: 'Sony Alpha 1',
    lens: 'FE 50mm f/1.2 GM',
    exposure: 'f/1.4 • 1/320s • ISO 125',
    location: 'Seongsu-dong, Seoul',
    story: 'Chân dung Hải trong không gian trà thất cổ điển Hàn Quốc (코스모스 다방 — Cosmos Dabang) với tông gỗ ấm áp, đèn Tiffany và chiếc điện thoại bàn vintage.',
    palette: ['#141824', '#5c3317', '#b86b35', '#e6a86a', '#f4efe6'],
    imageUrl: 'hai-avatar.jpg',
    googlePhotosWebUrl: 'https://photos.google.com/photo/AF1QipOtvbseQtK7D2gkdF4kAlDrBh-pzHZRTx_gE9ES',
    sceneType: 'seongsuPortrait',
    source: 'gphotos'
  },
  {
    id: 'p4',
    title: 'Mùa Thu Ngân Hạnh Bukchon (북촌의 가을)',
    category: 'landscape',
    categoryLabel: 'Phong cảnh',
    wide: false,
    camera: 'Leica M11',
    lens: 'APO-Summicron 50mm f/2',
    exposure: 'f/2.8 • 1/250s • ISO 160',
    location: 'Bukchon Hanok, Seoul',
    story: 'Những mái ngói Hanok cổ kính trầm mặc ẩn hiện sau tán lá ngân hạnh vàng dịu và sương thu bảng lảng.',
    palette: ['#0e1116', '#2b2d42', '#bc8a5f', '#e6b87d', '#f4efe6'],
    sceneType: 'bukchonAutumn',
    source: 'atelier'
  },
  {
    id: 'p5',
    title: 'Chuyến Tàu Điện Ngầm Qua Sông Hàn (한강의 황혼)',
    category: 'street',
    categoryLabel: 'Đường phố',
    wide: true,
    camera: 'Sony FX3 + Alpha 1',
    lens: 'Cooke SP3 32mm T2.4',
    exposure: 'f/2.4 • 1/40s • ISO 400',
    location: 'Cheongdam Bridge, Seoul',
    story: 'Khoảnh khắc đoàn tàu lướt qua cầu sông Hàn trong giờ xanh (Blue Hour), để lại vệt sáng vàng kem ấm áp giữa bầu trời tím sẫm.',
    palette: ['#090d1a', '#1b263b', '#415a77', '#e2a8b4', '#f4efe6'],
    sceneType: 'hanRiverTrain',
    source: 'atelier'
  },
  {
    id: 'p6',
    title: 'Nàng Thơ Hannam-dong (한남동 무드 초상)',
    category: 'portrait',
    categoryLabel: 'Chân dung',
    wide: false,
    camera: 'Leica M11',
    lens: 'Noctilux-M 50mm f/1.2',
    exposure: 'f/1.2 • 1/200s • ISO 400',
    location: 'Hannam-dong, Seoul',
    story: 'Bức chân dung chụp trên phim Kodak Portra 400 với hiệu ứng halation dịu nhẹ quanh viền tóc và tông màu kem sữa thanh lịch.',
    palette: ['#0d131a', '#1d2d44', '#8fb9aa', '#e2a8b4', '#f4efe6'],
    sceneType: 'hannamMuse',
    source: 'atelier'
  },
  {
    id: 'p7',
    title: 'Đỉnh Núi Bukhansan Trong Mây (북한산 운해)',
    category: 'landscape',
    categoryLabel: 'Phong cảnh',
    wide: false,
    camera: 'Sony Alpha 1',
    lens: 'FE 24-70mm f/2.8 GM II',
    exposure: 'f/8.0 • 1/80s • ISO 100',
    location: 'Bukhansan National Park',
    story: 'Bố cục tối giản như một bức tranh thủy mặc đương đại Hàn Quốc với những dãy núi đá xám xanh xếp lớp trong sương mù.',
    palette: ['#0a0f14', '#1d2a35', '#526d82', '#9db2bf', '#dde6ed'],
    sceneType: 'bukhansanMist',
    source: 'atelier'
  },
  {
    id: 'p8',
    title: 'Quán Pojangmacha Đêm Đông (포장마차의 밤)',
    category: 'street',
    categoryLabel: 'Đường phố',
    wide: false,
    camera: 'Leica M11',
    lens: 'Summicron 28mm f/2',
    exposure: 'f/2.0 • 1/60s • ISO 1000',
    location: 'Jongno 3-ga, Seoul',
    story: 'Ánh đèn vàng ấm áp và làn hơi nước ấm tỏa ra từ quán lều Pojangmacha giữa đêm đông Seoul tĩnh mịch.',
    palette: ['#0c0a0e', '#261c24', '#b56576', '#e56b6f', '#eaac8b'],
    sceneType: 'pojangmachaNight',
    source: 'atelier'
  },
  {
    id: 'p9',
    title: 'Seoul Noir Editorial (서울 누아르 화보)',
    category: 'portrait',
    categoryLabel: 'Chân dung',
    wide: true,
    camera: 'Sony Alpha 1',
    lens: 'FE 85mm f/1.2 GM',
    exposure: 'f/1.4 • 1/200s • ISO 250',
    location: 'Apgujeong Studio, Seoul',
    story: 'Concept thời trang tối giản lấy cảm hứng từ điện ảnh Chungmuro với ánh sáng viền Rose Gold và xanh lam khói.',
    palette: ['#08090f', '#1a1c2e', '#7da8d6', '#e2a8b4', '#f4efe6'],
    sceneType: 'seoulNoirPortrait',
    source: 'atelier'
  }
];

// Preset Google Photos Cloud Album ("Seoul & Jeju K-Film 2026")
const GOOGLE_PHOTOS_SAMPLE_ALBUM = [
  {
    id: 'gp-1',
    title: '[Google Photos] Hoa Anh Đào Đêm Yeouido (여의도 벚꽃)',
    category: 'landscape',
    categoryLabel: 'Phong cảnh',
    wide: true,
    camera: 'Leica Q3 (Google Photos Backup)',
    lens: 'Summilux 28mm f/1.7 ASPH',
    exposure: 'f/2.0 • 1/80s • ISO 400',
    location: 'Yeouido Park, Seoul',
    story: 'Đồng bộ từ Album Google Photos "Seoul Spring & Autumn": Những tán hoa anh đào hồng phấn nở rộ dưới ánh đèn đường ấm áp dọc bờ sông Hàn.',
    palette: ['#0d0f18', '#2b2438', '#d88c9a', '#f2d0d9', '#f4efe6'],
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1400&q=85',
    sceneType: 'jejuDawn',
    source: 'gphotos'
  },
  {
    id: 'gp-2',
    title: '[Google Photos] Con Hẻm Euljiro Retro (을지로 골목)',
    category: 'street',
    categoryLabel: 'Đường phố',
    wide: false,
    camera: 'Fujifilm GFX100 II (Google Photos)',
    lens: 'GF 45mm f/2.8 R WR',
    exposure: 'f/2.8 • 1/125s • ISO 800',
    location: 'Euljiro 3-ga, Seoul',
    story: 'Đồng bộ từ Google Photos Cloud: Khu phố in ấn cổ điển Euljiro về đêm, nơi các quán cà phê ẩn mình dưới ánh đèn bảng hiệu thập niên 80.',
    palette: ['#090c14', '#1f2937', '#e2a8b4', '#60a5fa', '#fde68a'],
    imageUrl: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1000&q=85',
    sceneType: 'itaewonRain',
    source: 'gphotos'
  },
  {
    id: 'gp-3',
    title: '[Google Photos] Chân Dung Tạp Chí Garosu-gil (가로수길 화보)',
    category: 'portrait',
    categoryLabel: 'Chân dung',
    wide: false,
    camera: 'Sony Alpha 1 (Google Photos RAW)',
    lens: 'FE 50mm f/1.2 GM',
    exposure: 'f/1.4 • 1/400s • ISO 100',
    location: 'Sinsa-dong, Gangnam',
    story: 'Đồng bộ từ Google Photos Album "K-Editorial Portraits": Tông màu kem ấm và ánh sáng tự nhiên trên đại lộ rợp bóng cây Garosu-gil.',
    palette: ['#111114', '#37302c', '#b08968', '#dfcba9', '#f5ebe0'],
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    sceneType: 'seongsuPortrait',
    source: 'gphotos'
  },
  {
    id: 'gp-4',
    title: '[Google Photos] Cung Điện Gyeongbokgung Mùa Thu (경복궁의 단풍)',
    category: 'landscape',
    categoryLabel: 'Phong cảnh',
    wide: false,
    camera: 'Leica M11 (Google Photos Sync)',
    lens: 'Summilux-M 35mm f/1.4',
    exposure: 'f/4.0 • 1/250s • ISO 160',
    location: 'Jongno-gu, Seoul',
    story: 'Đồng bộ từ Google Photos: Sắc lá phong đỏ và ngân hạnh vàng soi bóng xuống hồ Hương Viễn Đình trong khuôn viên Gyeongbokgung.',
    palette: ['#0f1319', '#2b2d42', '#bc6c25', '#dda15e', '#fefae0'],
    imageUrl: 'https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=1000&q=85',
    sceneType: 'bukchonAutumn',
    source: 'gphotos'
  },
  {
    id: 'gp-5',
    title: '[Google Photos] Nhịp Sống Đêm Hongdae (홍대 거리)',
    category: 'street',
    categoryLabel: 'Đường phố',
    wide: true,
    camera: 'Sony FX3 Still Frame (Google Photos)',
    lens: '35mm Anamorphic T2.0',
    exposure: 'f/2.0 • 1/60s • ISO 640',
    location: 'Mapo-gu, Seoul',
    story: 'Đồng bộ từ Google Photos: Những nghệ sĩ busking đường phố tại Hongdae dưới ánh đèn đêm đầy năng lượng tuổi trẻ.',
    palette: ['#090d16', '#1e293b', '#ec4899', '#38bdf8', '#f4efe6'],
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=85',
    sceneType: 'hanRiverTrain',
    source: 'gphotos'
  },
  {
    id: 'gp-6',
    title: '[Google Photos] Minimalist Studio Lookbook (청담동 스튜디오)',
    category: 'portrait',
    categoryLabel: 'Chân dung',
    wide: false,
    camera: 'Hasselblad X2D 100C (Google Photos)',
    lens: 'XCD 55mm f/2.5 V',
    exposure: 'f/2.8 • 1/200s • ISO 64',
    location: 'Cheongdam-dong, Seoul',
    story: 'Đồng bộ từ Google Photos: Bố cục chân dung tối giản với phông nền xám than trầm mặc làm nổi bật thần thái tinh tế.',
    palette: ['#0b0c10', '#1f2833', '#8fb9aa', '#e2a8b4', '#f4efe6'],
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85',
    sceneType: 'hannamMuse',
    source: 'gphotos'
  }
];

const VIDEO_REELS = [
  {
    id: 'v1',
    title: 'Đêm Mưa Itaewon — Những Ánh Đèn Phai',
    category: 'K-DRAMA MOOD SHORT FILM',
    duration: '02:20',
    lut: 'Kodak Portra 400 Seoul Soft',
    desc: 'Ghi lại những khoảnh khắc lặng lẽ trên con dốc Itaewon sau cơn mưa đêm với tông màu xanh trầm pha ánh đèn Sakura và vàng kem ấm áp.',
    specs: [
      { label: 'Camera', value: 'Sony FX3 + Leica M' },
      { label: 'Ống kính', value: 'Cooke SP3 32mm T2.4' },
      { label: 'Film Profile', value: 'Portra 400 + Halation' }
    ],
    theme: 'itaewonRain'
  },
  {
    id: 'v2',
    title: 'Gió Biển Đảo Jeju — Bản Giao Hưởng Xanh Ngọc',
    category: 'JEJU CINEMATIC TRAVEL REEL',
    duration: '03:12',
    lut: 'Fujifilm Eterna Celadon',
    desc: 'Hành trình qua những bờ biển đá núi lửa đen huyền bí, đồng cỏ lau bạc và bình minh dịu êm trên đảo Jeju.',
    specs: [
      { label: 'Camera', value: 'DJI Inspire 3 + Sony FX3' },
      { label: 'Định dạng', value: '4K 60fps Apple ProRes' },
      { label: 'Tông màu', value: 'Jeju Celadon & Cream' }
    ],
    theme: 'jejuDawn'
  },
  {
    id: 'v3',
    title: 'Seongsu-dong 4PM — Ánh Sáng & Tĩnh Lặng',
    category: 'K-FASHION EDITORIAL FILM',
    duration: '01:50',
    lut: 'Seoul Minimalist Oat & Warm',
    desc: 'Thước phim thời trang quay trong không gian bê tông tối giản tại Seongsu-dong, nơi nắng chiều vẽ nên những mảng sáng tối đầy chất thơ.',
    specs: [
      { label: 'Camera', value: 'Sony Alpha 1 + FX3' },
      { label: 'Ống kính', value: 'Leica Summilux 50mm f/1.4' },
      { label: 'Ánh sáng', value: 'Natural Window + Soft Diffuser' }
    ],
    theme: 'seongsuPortrait'
  },
  {
    id: 'v4',
    title: 'Chuyến Tàu Qua Sông Hàn Lúc Chạng Vạng',
    category: 'SEOUL DOCUMENTARY SHORT',
    duration: '03:45',
    lut: 'CineStill 800T Blue Hour',
    desc: 'Nhịp thở nhẹ nhàng của thủ đô Seoul khi hoàng hôn buông xuống mặt nước sông Hàn và những đoàn tàu bắt đầu lên đèn.',
    specs: [
      { label: 'Camera', value: 'Leica SL3 + Sony FX3' },
      { label: 'Ống kính', value: '35mm Anamorphic T2.0' },
      { label: 'Hậu kỳ', value: 'DaVinci Resolve K-Film Look' }
    ],
    theme: 'hanRiverTrain'
  }
];

// ============================================================================
// STATE MANAGEMENT FOR GOOGLE PHOTOS + BASE GALLERY
// ============================================================================
function isGooglePhotosWebPageUrl(url) {
  if (!url || typeof url !== 'string') return false;
  return /^https?:\/\/(photos\.google\.com\/|photos\.app\.goo\.gl\/)/i.test(url.trim());
}

function isDirectImageUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed || isGooglePhotosWebPageUrl(trimmed)) return false;
  return (
    trimmed.startsWith('data:image/') ||
    trimmed.startsWith('blob:') ||
    trimmed.includes('lh3.googleusercontent.com') ||
    trimmed.includes('images.unsplash.com') ||
    /\.(jpe?g|png|webp|gif|avif|svg)(\?.*)?$/i.test(trimmed) ||
    /^https?:\/\/.+/i.test(trimmed)
  );
}

function loadSyncedGooglePhotos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_GPHOTOS);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.map((item) => {
          if (item && isGooglePhotosWebPageUrl(item.imageUrl)) {
            return {
              ...item,
              googlePhotosWebUrl: item.googlePhotosWebUrl || item.imageUrl,
              imageUrl: ''
            };
          }
          return item;
        })
      : [];
  } catch {
    return [];
  }
}

function saveSyncedGooglePhotos(items) {
  try {
    localStorage.setItem(STORAGE_KEY_GPHOTOS, JSON.stringify(items));
  } catch {
    // Ignore storage quota errors
  }
}

let syncedGooglePhotos = loadSyncedGooglePhotos();

function getAllGalleryItems() {
  return [...syncedGooglePhotos, ...BASE_GALLERY_ITEMS];
}

function updateGalleryCountersAndSyncUI() {
  const all = getAllGalleryItems();
  const gphotosItems = all.filter((i) => i.source === 'gphotos');
  const countAll = document.getElementById('count-all');
  const countGp = document.getElementById('count-gphotos');
  const countLand = document.getElementById('count-landscape');
  const countStreet = document.getElementById('count-street');
  const countPort = document.getElementById('count-portrait');

  if (countAll) countAll.textContent = String(all.length);
  if (countGp) countGp.textContent = String(gphotosItems.length);
  if (countLand) countLand.textContent = String(all.filter((i) => i.category === 'landscape').length);
  if (countStreet) countStreet.textContent = String(all.filter((i) => i.category === 'street').length);
  if (countPort) countPort.textContent = String(all.filter((i) => i.category === 'portrait').length);

  const headerBtn = document.getElementById('openGPhotosBtn');
  const headerStatus = document.getElementById('gphotosHeaderStatus');
  const syncBarText = document.getElementById('gsbStatusText');

  if (gphotosItems.length > 0) {
    headerBtn?.classList.add('connected');
    if (headerStatus) headerStatus.textContent = `Google Photos (${gphotosItems.length})`;
    if (syncBarText) {
      syncBarText.innerHTML = `Đã kết nối &amp; đồng bộ <strong>${gphotosItems.length} bức ảnh</strong> từ <strong>Google Photos</strong> vào Thư viện K-Editorial.`;
    }
  } else {
    headerBtn?.classList.remove('connected');
    if (headerStatus) headerStatus.textContent = 'Google Photos';
    if (syncBarText) {
      syncBarText.textContent =
        'Chưa đồng bộ album ngoài. Kết nối tài khoản Google Photos hoặc dán link ảnh/album để tự động hiển thị tác phẩm của bạn.';
    }
  }
}

// ============================================================================
// KOREAN AESTHETIC PROCEDURAL ARTWORK RENDERER
// ============================================================================
function drawArtworkScene(ctx, width, height, sceneType) {
  ctx.save();
  ctx.clearRect(0, 0, width, height);

  if (sceneType === 'jejuDawn' || sceneType === 'koreanAutumn') {
    const sky = ctx.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, '#07060a');
    sky.addColorStop(0.36, '#261014');
    sky.addColorStop(0.64, '#8c2d22');
    sky.addColorStop(0.84, '#d97b38');
    sky.addColorStop(1, '#0d0608');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, width, height);

    const sunGrad = ctx.createRadialGradient(width * 0.62, height * 0.44, 8, width * 0.62, height * 0.44, width * 0.42);
    sunGrad.addColorStop(0, 'rgba(244, 239, 230, 0.85)');
    sunGrad.addColorStop(0.32, 'rgba(230, 161, 69, 0.54)');
    sunGrad.addColorStop(0.68, 'rgba(200, 62, 43, 0.32)');
    sunGrad.addColorStop(1, 'rgba(7, 6, 10, 0)');
    ctx.fillStyle = sunGrad;
    ctx.fillRect(0, 0, width, height);

    // Misty autumn mountains
    const ridges = [
      { y: 0.52, amp: 38, freq: 0.0065, color: 'rgba(48, 17, 20, 0.78)' },
      { y: 0.61, amp: 26, freq: 0.0095, color: 'rgba(28, 10, 13, 0.9)' },
      { y: 0.68, amp: 16, freq: 0.013, color: '#110709' }
    ];
    ridges.forEach((layer, idx) => {
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 12) {
        const y = height * layer.y - Math.sin(x * layer.freq + idx * 1.9) * layer.amp - Math.cos(x * layer.freq * 0.45) * (layer.amp * 0.5);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = layer.color;
      ctx.fill();
    });

    // Tranquil lake base & warm reflections
    const lakeY = height * 0.68;
    const lakeGrad = ctx.createLinearGradient(0, lakeY, 0, height);
    lakeGrad.addColorStop(0, '#1f0b0e');
    lakeGrad.addColorStop(0.45, '#120709');
    lakeGrad.addColorStop(1, '#070507');
    ctx.fillStyle = lakeGrad;
    ctx.fillRect(0, lakeY, width, height - lakeY);

    const reflGlow = ctx.createRadialGradient(width * 0.62, lakeY + (height - lakeY) * 0.35, 6, width * 0.62, lakeY + (height - lakeY) * 0.35, width * 0.38);
    reflGlow.addColorStop(0, 'rgba(230, 161, 69, 0.38)');
    reflGlow.addColorStop(0.5, 'rgba(200, 62, 43, 0.25)');
    reflGlow.addColorStop(1, 'rgba(7, 6, 10, 0)');
    ctx.fillStyle = reflGlow;
    ctx.fillRect(0, lakeY, width, height - lakeY);

    for (let i = 0; i < 16; i++) {
      const ry = lakeY + 8 + i * ((height - lakeY - 12) / 16);
      const rw = width * (0.42 - i * 0.014);
      const rx = width * 0.62 - rw * 0.5 + Math.sin(i * 1.7) * 14;
      ctx.fillStyle = i % 2 === 0 ? 'rgba(200, 62, 43, 0.26)' : 'rgba(230, 161, 69, 0.28)';
      ctx.fillRect(rx, ry, rw, 2);
    }

    // Morning autumn mist over the lake
    const mist = ctx.createLinearGradient(0, height * 0.58, 0, height * 0.76);
    mist.addColorStop(0, 'rgba(244, 239, 230, 0)');
    mist.addColorStop(0.5, 'rgba(244, 239, 230, 0.18)');
    mist.addColorStop(1, 'rgba(7, 6, 10, 0)');
    ctx.fillStyle = mist;
    ctx.fillRect(0, height * 0.58, width, height * 0.18);

    // Crimson maple (#c83e2b) & golden ginkgo (#e6a145) canopy clusters framing top corners
    const foliageClusters = [
      { x: 0.08, y: 0.14, r: 0.18, color: '#c83e2b', alpha: 0.85 },
      { x: 0.22, y: 0.08, r: 0.15, color: '#b83b2b', alpha: 0.78 },
      { x: 0.34, y: 0.12, r: 0.12, color: '#e6a145', alpha: 0.72 },
      { x: 0.88, y: 0.16, r: 0.19, color: '#c83e2b', alpha: 0.82 },
      { x: 0.76, y: 0.1, r: 0.14, color: '#e6a145', alpha: 0.76 },
      { x: 0.94, y: 0.3, r: 0.13, color: '#3b1518', alpha: 0.88 }
    ];
    foliageClusters.forEach((leaf) => {
      const lg = ctx.createRadialGradient(width * leaf.x, height * leaf.y, 4, width * leaf.x, height * leaf.y, width * leaf.r);
      lg.addColorStop(0, leaf.color);
      lg.addColorStop(0.65, leaf.color + '88');
      lg.addColorStop(1, 'rgba(7, 6, 10, 0)');
      ctx.save();
      ctx.globalAlpha = leaf.alpha;
      ctx.fillStyle = lg;
      ctx.beginPath();
      ctx.arc(width * leaf.x, height * leaf.y, width * leaf.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  } else if (sceneType === 'bukhansanMist') {
    const sky = ctx.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, '#06090e');
    sky.addColorStop(0.45, '#162430');
    sky.addColorStop(0.76, '#354b5e');
    sky.addColorStop(1, '#090d13');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, width, height);

    const sunGrad = ctx.createRadialGradient(width * 0.66, height * 0.48, 8, width * 0.66, height * 0.48, width * 0.36);
    sunGrad.addColorStop(0, 'rgba(244, 239, 230, 0.78)');
    sunGrad.addColorStop(0.35, 'rgba(226, 168, 180, 0.38)');
    sunGrad.addColorStop(1, 'rgba(6, 9, 14, 0)');
    ctx.fillStyle = sunGrad;
    ctx.fillRect(0, 0, width, height);

    const ridges = [
      { y: 0.56, amp: 36, freq: 0.007, color: 'rgba(18, 30, 42, 0.76)' },
      { y: 0.67, amp: 28, freq: 0.01, color: 'rgba(12, 20, 30, 0.9)' },
      { y: 0.79, amp: 20, freq: 0.013, color: '#070a10' }
    ];
    ridges.forEach((layer, idx) => {
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 12) {
        const y = height * layer.y - Math.sin(x * layer.freq + idx * 1.9) * layer.amp - Math.cos(x * layer.freq * 0.45) * (layer.amp * 0.5);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = layer.color;
      ctx.fill();
    });

    const mist = ctx.createLinearGradient(0, height * 0.6, 0, height * 0.82);
    mist.addColorStop(0, 'rgba(244, 239, 230, 0)');
    mist.addColorStop(0.5, 'rgba(244, 239, 230, 0.18)');
    mist.addColorStop(1, 'rgba(6, 9, 14, 0)');
    ctx.fillStyle = mist;
    ctx.fillRect(0, height * 0.56, width, height * 0.28);
  } else if (sceneType === 'itaewonRain' || sceneType === 'pojangmachaNight') {
    const isPojang = sceneType === 'pojangmachaNight';
    const bg = ctx.createLinearGradient(0, 0, width, height);
    bg.addColorStop(0, '#090b12');
    bg.addColorStop(0.5, isPojang ? '#221520' : '#161d2f');
    bg.addColorStop(1, '#0c121c');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    const orbs = [
      { x: 0.26, y: 0.34, r: 0.2, c: 'rgba(226, 168, 180, 0.5)' },
      { x: 0.72, y: 0.3, r: 0.22, c: 'rgba(125, 168, 214, 0.48)' },
      { x: 0.5, y: 0.44, r: 0.16, c: 'rgba(223, 203, 169, 0.45)' },
      { x: 0.3, y: 0.82, r: 0.24, c: 'rgba(226, 168, 180, 0.32)' },
      { x: 0.7, y: 0.84, r: 0.24, c: 'rgba(143, 185, 170, 0.32)' }
    ];
    orbs.forEach((o) => {
      const g = ctx.createRadialGradient(width * o.x, height * o.y, 4, width * o.x, height * o.y, width * o.r);
      g.addColorStop(0, o.c);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    });

    ctx.fillStyle = 'rgba(244, 239, 230, 0.08)';
    ctx.fillRect(0, height * 0.64, width, 1.5);

    const fx = width * 0.5;
    const fy = height * 0.64;
    ctx.fillStyle = '#07090e';
    ctx.beginPath();
    ctx.arc(fx, fy - 42, 36, Math.PI, 0, false);
    ctx.fill();
    ctx.fillRect(fx - 7, fy - 42, 14, 52);
  } else if (sceneType === 'seongsuPortrait' || sceneType === 'hannamMuse' || sceneType === 'seoulNoirPortrait') {
    const isNoir = sceneType === 'seoulNoirPortrait';
    const isHannam = sceneType === 'hannamMuse';

    const bg = ctx.createRadialGradient(width * 0.54, height * 0.4, 12, width * 0.5, height * 0.5, width * 0.75);
    if (isNoir) {
      bg.addColorStop(0, '#25283d');
      bg.addColorStop(0.52, '#121521');
      bg.addColorStop(1, '#07080d');
    } else if (isHannam) {
      bg.addColorStop(0, '#263c47');
      bg.addColorStop(0.55, '#121c26');
      bg.addColorStop(1, '#080b10');
    } else {
      bg.addColorStop(0, '#6c584c');
      bg.addColorStop(0.5, '#241e1b');
      bg.addColorStop(1, '#0a0909');
    }
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'rgba(244, 239, 230, 0.07)';
    ctx.beginPath();
    ctx.moveTo(width * 0.18, 0);
    ctx.lineTo(width * 0.46, 0);
    ctx.lineTo(width * 0.68, height);
    ctx.lineTo(width * 0.34, height);
    ctx.closePath();
    ctx.fill();

    const rim = ctx.createRadialGradient(width * 0.5, height * 0.38, 10, width * 0.5, height * 0.38, width * 0.3);
    rim.addColorStop(0, isNoir ? 'rgba(226, 168, 180, 0.68)' : isHannam ? 'rgba(143, 185, 170, 0.7)' : 'rgba(223, 203, 169, 0.75)');
    rim.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rim;
    ctx.fillRect(0, 0, width, height);

    const cx = width * 0.5;
    const cy = height * 0.43;
    ctx.fillStyle = '#0a0c11';
    ctx.beginPath();
    ctx.arc(cx, cy, height * 0.135, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(cx, height * 0.82, height * 0.24, height * 0.27, 0, Math.PI, 0, false);
    ctx.fill();

    ctx.strokeStyle = isNoir ? '#e2a8b4' : '#dfcba9';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(cx, cy, height * 0.135, -Math.PI * 0.45, Math.PI * 0.35);
    ctx.stroke();
  } else if (sceneType === 'bukchonAutumn') {
    const bg = ctx.createLinearGradient(0, 0, 0, height);
    bg.addColorStop(0, '#0d1118');
    bg.addColorStop(0.5, '#2b2d42');
    bg.addColorStop(1, '#bc8a5f');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    const ginkgoGlow = ctx.createRadialGradient(width * 0.35, height * 0.35, 12, width * 0.35, height * 0.35, width * 0.42);
    ginkgoGlow.addColorStop(0, 'rgba(230, 184, 125, 0.72)');
    ginkgoGlow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = ginkgoGlow;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#0b0e14';
    ctx.beginPath();
    ctx.moveTo(width * 0.08, height * 0.65);
    ctx.quadraticCurveTo(width * 0.45, height * 0.52, width * 0.86, height * 0.62);
    ctx.lineTo(width * 0.9, height);
    ctx.lineTo(width * 0.05, height);
    ctx.closePath();
    ctx.fill();
  } else if (sceneType === 'hanRiverTrain') {
    const sky = ctx.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, '#080c17');
    sky.addColorStop(0.42, '#1d2d44');
    sky.addColorStop(0.62, '#c98ca7');
    sky.addColorStop(0.75, '#1b263b');
    sky.addColorStop(1, '#080b12');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#070a10';
    ctx.fillRect(0, height * 0.56, width, 10);

    const trainLight = ctx.createLinearGradient(width * 0.15, 0, width * 0.85, 0);
    trainLight.addColorStop(0, 'rgba(244, 239, 230, 0)');
    trainLight.addColorStop(0.3, 'rgba(244, 239, 230, 0.85)');
    trainLight.addColorStop(0.7, 'rgba(226, 168, 180, 0.8)');
    trainLight.addColorStop(1, 'rgba(226, 168, 180, 0)');
    ctx.fillStyle = trainLight;
    ctx.fillRect(width * 0.12, height * 0.54, width * 0.76, 5);

    for (let i = 0; i < 18; i++) {
      const y = height * 0.62 + i * (height * 0.019);
      ctx.fillStyle = i % 2 === 0 ? 'rgba(226, 168, 180, 0.22)' : 'rgba(223, 203, 169, 0.22)';
      ctx.fillRect(width * (0.22 + Math.sin(i) * 0.08), y, width * (0.55 - i * 0.015), 2);
    }
  }

  const flare = ctx.createLinearGradient(0, height * 0.48, width, height * 0.48);
  flare.addColorStop(0, 'rgba(226, 168, 180, 0)');
  flare.addColorStop(0.5, 'rgba(226, 168, 180, 0.18)');
  flare.addColorStop(1, 'rgba(226, 168, 180, 0)');
  ctx.fillStyle = flare;
  ctx.fillRect(0, height * 0.48, width, 1.5);

  const edgeVignette = ctx.createRadialGradient(
    width * 0.5,
    height * 0.5,
    Math.min(width, height) * 0.28,
    width * 0.5,
    height * 0.5,
    Math.max(width, height) * 0.72
  );
  edgeVignette.addColorStop(0, 'rgba(5, 6, 8, 0)');
  edgeVignette.addColorStop(0.75, 'rgba(5, 6, 8, 0.22)');
  edgeVignette.addColorStop(1, 'rgba(5, 6, 8, 0.62)');
  ctx.fillStyle = edgeVignette;
  ctx.fillRect(0, 0, width, height);

  ctx.restore();
}

// ============================================================================
// 1. HERO CINEMA CANVAS ENGINE
// ============================================================================
let activeHeroScene = 0;
let heroFrame = 0;

function initHeroCanvas() {
  const canvas = document.getElementById('heroCinemaCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 38 }, (_, i) => ({
    x: (i * 97) % 100,
    y: (i * 53) % 100,
    r: 1.5 + (i % 5) * 1.6,
    speedX: (i % 2 === 0 ? 1 : -1) * (0.012 + (i % 4) * 0.006),
    speedY: -0.008 - (i % 3) * 0.006
  }));

  function renderHero() {
    heroFrame++;
    const w = canvas.width;
    const h = canvas.height;

    const sceneMap = ['itaewonRain', 'jejuDawn', 'seongsuPortrait'];
    drawArtworkScene(ctx, w, h, sceneMap[activeHeroScene]);

    particles.forEach((p, idx) => {
      p.x = (p.x + p.speedX + 100) % 100;
      p.y = (p.y + p.speedY + 100) % 100;
      const px = (p.x / 100) * w;
      const py = (p.y / 100) * h;

      ctx.beginPath();
      ctx.arc(px, py, p.r * 2.1, 0, Math.PI * 2);
      if (activeHeroScene === 0) {
        ctx.fillStyle = idx % 2 === 0 ? 'rgba(226, 168, 180, 0.22)' : 'rgba(125, 168, 214, 0.22)';
      } else if (activeHeroScene === 1) {
        ctx.fillStyle = idx % 2 === 0 ? 'rgba(200, 62, 43, 0.28)' : 'rgba(230, 161, 69, 0.26)';
      } else {
        ctx.fillStyle = 'rgba(223, 203, 169, 0.22)';
      }
      ctx.fill();
    });

    if (heroFrame % 3 === 0) {
      const tcEl = document.getElementById('heroTimecode');
      if (tcEl) {
        const totalFrames = (14 * 24 + heroFrame) % (60 * 24);
        const secs = String(Math.floor(totalFrames / 24)).padStart(2, '0');
        const frames = String(totalFrames % 24).padStart(2, '0');
        tcEl.textContent = `00:01:${secs}:${frames}`;
      }
    }

    requestAnimationFrame(renderHero);
  }

  requestAnimationFrame(renderHero);

  document.querySelectorAll('.scene-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.scene-pill').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeHeroScene = Number(btn.dataset.scene) || 0;
    });
  });
}

// ============================================================================
// 2. GALLERY ENGINE & LIGHTBOX (Supports Both Canvas Artworks & Google Photos)
// ============================================================================
let currentFilter = 'all';
let currentLightboxIndex = 0;
let filteredItems = [];

function renderGallery(filter = currentFilter) {
  currentFilter = filter;
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  updateGalleryCountersAndSyncUI();

  const allItems = getAllGalleryItems();
  if (filter === 'all') {
    filteredItems = allItems;
  } else if (filter === 'gphotos') {
    filteredItems = allItems.filter((item) => item.source === 'gphotos');
  } else {
    filteredItems = allItems.filter((item) => item.category === filter);
  }

  grid.innerHTML = '';

  if (filteredItems.length === 0 && filter === 'gphotos') {
    grid.innerHTML = `
      <div style="grid-column: span 12; text-align:center; padding: 60px 20px; background: var(--bg-charcoal); border: 1px dashed var(--border-gold); border-radius: 14px;">
        <p style="font-size: 1.05rem; color: var(--text-primary); margin-bottom: 12px;">Chưa có bức ảnh nào trong bộ lọc Google Photos.</p>
        <button type="button" class="btn-gsb-connect" id="emptyStateSyncBtn">+ Đồng bộ ngay 6 ảnh mẫu từ Google Photos</button>
      </div>
    `;
    document.getElementById('emptyStateSyncBtn')?.addEventListener('click', syncSampleGooglePhotosAlbum);
    return;
  }

  filteredItems.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = `photo-card ${item.wide ? 'span-wide' : ''}`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Xem tác phẩm ${item.title}`);

    const gphotosBadgeHtml = item.googlePhotosWebUrl
      ? `<a class="gphotos-pin-badge" href="${item.googlePhotosWebUrl}" target="_blank" rel="noopener" title="Mở ảnh gốc trên Google Photos" style="text-decoration:none;">Mở trên Google Photos ↗</a>`
      : item.source === 'gphotos'
        ? `<span class="gphotos-pin-badge">Google Photos</span>`
        : `<span class="photo-cat-badge">${item.categoryLabel}</span>`;

    const hasDirectImg = isDirectImageUrl(item.imageUrl);

    card.innerHTML = `
      <div class="photo-canvas-wrap">
        <canvas class="photo-canvas" width="${item.wide ? 960 : 640}" height="480"></canvas>
        ${hasDirectImg ? `<img class="photo-img" src="${item.imageUrl}" alt="${item.title}" loading="lazy" style="position:absolute;inset:0;" />` : ''}
        <div class="photo-overlay">
          <div class="photo-top-badges">
            ${gphotosBadgeHtml}
            <span class="photo-zoom-hint" aria-hidden="true">⤢</span>
          </div>
          <div class="photo-info">
            <h3 class="photo-title">${item.title}</h3>
            <div class="photo-exif">
              <span>${item.camera}</span>
              <span>•</span>
              <span>${item.exposure}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = card.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    drawArtworkScene(ctx, canvas.width, canvas.height, item.sceneType || 'jejuDawn');

    // If external image fails to load (e.g. offline), hide broken img and show the rich canvas underneath
    const imgEl = card.querySelector('img');
    if (imgEl) {
      imgEl.addEventListener('error', () => {
        imgEl.style.display = 'none';
      });
    }

    const badgeLink = card.querySelector('.gphotos-pin-badge[href]');
    badgeLink?.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    card.addEventListener('click', () => openLightbox(index));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });

    grid.appendChild(card);
  });
}

function openLightbox(index) {
  if (!filteredItems.length) return;
  currentLightboxIndex = (index + filteredItems.length) % filteredItems.length;
  const item = filteredItems[currentLightboxIndex];

  const modal = document.getElementById('lightboxModal');
  const canvas = document.getElementById('lightboxCanvas');
  const imgEl = document.getElementById('lightboxImage');
  if (!modal || !canvas) return;

  const ctx = canvas.getContext('2d');
  drawArtworkScene(ctx, canvas.width, canvas.height, item.sceneType || 'jejuDawn');

  if (isDirectImageUrl(item.imageUrl) && imgEl) {
    imgEl.src = item.imageUrl;
    imgEl.style.display = 'block';
    canvas.style.display = 'none';
    imgEl.onerror = () => {
      imgEl.style.display = 'none';
      canvas.style.display = 'block';
    };
  } else {
    if (imgEl) {
      imgEl.removeAttribute('src');
      imgEl.style.display = 'none';
    }
    canvas.style.display = 'block';
  }

  document.getElementById('lbCategory').textContent =
    item.source === 'gphotos' ? `GOOGLE PHOTOS • ${item.categoryLabel.toUpperCase()}` : item.categoryLabel.toUpperCase();
  document.getElementById('lbTitle').textContent = item.title;
  document.getElementById('lbStory').textContent = item.story;
  document.getElementById('lbCamera').textContent = item.camera;
  document.getElementById('lbLens').textContent = item.lens;
  document.getElementById('lbExposure').textContent = item.exposure;
  document.getElementById('lbLocation').textContent = item.location;

  const swatchesEl = document.getElementById('lbSwatches');
  swatchesEl.innerHTML = (item.palette || ['#0d1824', '#8fb9aa', '#e2a8b4', '#f4efe6'])
    .map((hex) => `<span class="swatch-dot" style="background:${hex}" title="${hex}"></span>`)
    .join('');

  const sidebar = modal.querySelector('.lightbox-sidebar');
  if (sidebar) {
    let gpLinkBtn = document.getElementById('lbGooglePhotosWebBtn');
    if (item.googlePhotosWebUrl) {
      if (!gpLinkBtn) {
        gpLinkBtn = document.createElement('a');
        gpLinkBtn.id = 'lbGooglePhotosWebBtn';
        gpLinkBtn.className = 'btn-gsb-connect';
        gpLinkBtn.target = '_blank';
        gpLinkBtn.rel = 'noopener';
        gpLinkBtn.style.cssText =
          'display:inline-flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;margin-top:6px;text-align:center;';
        sidebar.appendChild(gpLinkBtn);
      }
      gpLinkBtn.href = item.googlePhotosWebUrl;
      gpLinkBtn.textContent = 'Mở trên Google Photos ↗';
      gpLinkBtn.style.display = 'inline-flex';
    } else if (gpLinkBtn) {
      gpLinkBtn.style.display = 'none';
    }
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function initGalleryControls() {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderGallery(btn.dataset.filter);
    });
  });

  const editorialBtn = document.getElementById('gridEditorialBtn');
  const uniformBtn = document.getElementById('gridUniformBtn');
  const grid = document.getElementById('galleryGrid');

  editorialBtn?.addEventListener('click', () => {
    editorialBtn.classList.add('active');
    uniformBtn.classList.remove('active');
    grid.classList.add('editorial-mode');
  });

  uniformBtn?.addEventListener('click', () => {
    uniformBtn.classList.add('active');
    editorialBtn.classList.remove('active');
    grid.classList.remove('editorial-mode');
  });

  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightboxBackdrop')?.addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev')?.addEventListener('click', () => openLightbox(currentLightboxIndex - 1));
  document.getElementById('lightboxNext')?.addEventListener('click', () => openLightbox(currentLightboxIndex + 1));

  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') openLightbox(currentLightboxIndex - 1);
    if (e.key === 'ArrowRight') openLightbox(currentLightboxIndex + 1);
  });
}

// ============================================================================
// GOOGLE PHOTOS CONNECTION & SYNC CONTROLLER
// ============================================================================
function showGPhotosStatus(message) {
  const statusEl = document.getElementById('gphStatusMsg');
  if (!statusEl) return;
  statusEl.className = 'gph-status-msg show';
  statusEl.innerHTML = message;
}

function syncSampleGooglePhotosAlbum() {
  const existingIds = new Set(syncedGooglePhotos.map((i) => i.id));
  const newItems = GOOGLE_PHOTOS_SAMPLE_ALBUM.filter((item) => !existingIds.has(item.id));
  syncedGooglePhotos = [...newItems, ...syncedGooglePhotos];
  saveSyncedGooglePhotos(syncedGooglePhotos);
  renderGallery('all');
  showGPhotosStatus(`✓ Đã đồng bộ thành công <strong>${GOOGLE_PHOTOS_SAMPLE_ALBUM.length} bức ảnh</strong> từ Album Google Photos <em>"Seoul &amp; Jeju K-Film 2026"</em>!`);
}

function initGooglePhotosIntegration() {
  const modal = document.getElementById('gphotosModal');
  const openBtns = [
    document.getElementById('openGPhotosBtn'),
    document.getElementById('heroConnectGPhotosBtn'),
    document.getElementById('galleryOpenGPhotosBtn')
  ];

  function openGPhotosModal() {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeGPhotosModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  openBtns.forEach((btn) => btn?.addEventListener('click', openGPhotosModal));
  document.getElementById('gphotosCloseBtn')?.addEventListener('click', closeGPhotosModal);
  document.getElementById('gphotosBackdrop')?.addEventListener('click', closeGPhotosModal);

  // Quick 1-click button on Gallery Sync Bar
  document.getElementById('quickSyncDemoAlbumBtn')?.addEventListener('click', () => {
    syncSampleGooglePhotosAlbum();
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Modal Tabs
  document.querySelectorAll('.gph-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.gph-tab').forEach((t) => t.classList.remove('active'));
      document.querySelectorAll('.gph-panel').forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`gtab-${tab.dataset.gtab}`)?.classList.add('active');
    });
  });

  // Tab 1: Add via Google Photos Image URL
  const addForm = document.getElementById('gphotosAddForm');
  addForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('gpPhotoTitle').value.trim();
    const category = document.getElementById('gpPhotoCategory').value;
    const url = document.getElementById('gpPhotoUrl').value.trim();
    const camera = document.getElementById('gpCamera').value.trim() || 'Leica M11';
    const location = document.getElementById('gpLocation').value.trim() || 'Seoul, Korea';

    if (!title) return;

    const categoryMap = {
      landscape: 'Phong cảnh',
      street: 'Đường phố',
      portrait: 'Chân dung'
    };

    const isWebLink = isGooglePhotosWebPageUrl(url);
    const directImg = isDirectImageUrl(url) ? url : '';

    const newItem = {
      id: `gp-custom-${Date.now()}`,
      title: `[Google Photos] ${title}`,
      category,
      categoryLabel: categoryMap[category] || 'Phong cảnh',
      wide: syncedGooglePhotos.length % 3 === 0,
      camera,
      lens: 'Google Photos Original Quality',
      exposure: 'f/1.8 • 1/160s • ISO 200',
      location,
      story: `Tác phẩm được đồng bộ trực tiếp từ Google Photos vào Hải (${location}).`,
      palette: ['#0c1017', '#263c47', '#8fb9aa', '#e2a8b4', '#f4efe6'],
      imageUrl: directImg,
      ...(isWebLink ? { googlePhotosWebUrl: url } : {}),
      sceneType: category === 'portrait' ? 'seongsuPortrait' : category === 'street' ? 'itaewonRain' : 'jejuDawn',
      source: 'gphotos'
    };

    syncedGooglePhotos.unshift(newItem);
    saveSyncedGooglePhotos(syncedGooglePhotos);
    renderGallery('all');
    addForm.reset();

    if (isWebLink) {
      showGPhotosStatus(
        `✓ Đã thêm <strong>${title}</strong> và gắn liên kết <strong>"Mở trên Google Photos ↗"</strong>! <br/>` +
          `💡 <em>Mẹo: Đường dẫn <code>photos.google.com/photo/...</code> là trang web cá nhân trên Google Photos. Nếu bạn muốn nhúng trực tiếp tệp ảnh gốc vào khung, hãy mở ảnh trên Google Photos → Nhấp chuột phải vào ảnh → chọn <strong>"Sao chép địa chỉ hình ảnh"</strong> (<code>lh3.googleusercontent.com/...</code>) hoặc chọn tệp ảnh từ máy tính ở khung bên trên.</em>`
      );
    } else {
      showGPhotosStatus(`✓ Đã thêm <strong>${title}</strong> vào Thư viện từ Google Photos!`);
    }
  });

  // Tab 1B: Local File Picker (for downloaded Google Photos files)
  const fileInput = document.getElementById('gpFileInput');
  fileInput?.addEventListener('change', (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const category = document.getElementById('gpPhotoCategory')?.value || 'landscape';
    const categoryMap = {
      landscape: 'Phong cảnh',
      street: 'Đường phố',
      portrait: 'Chân dung'
    };

    let loadedCount = 0;
    files.forEach((file, idx) => {
      const reader = new FileReader();
      reader.onload = () => {
        const cleanName = file.name.replace(/\.[^/.]+$/, '');
        const newItem = {
          id: `gp-file-${Date.now()}-${idx}`,
          title: `[Google Photos] ${cleanName}`,
          category,
          categoryLabel: categoryMap[category] || 'Phong cảnh',
          wide: idx === 0,
          camera: document.getElementById('gpCamera')?.value || 'Leica M11',
          lens: 'Google Photos Local Backup',
          exposure: 'RAW • Original Resolution',
          location: document.getElementById('gpLocation')?.value || 'Seoul, Korea',
          story: `Tệp ảnh "${file.name}" được nhập trực tiếp vào bộ sưu tập Google Photos trên Hải.`,
          palette: ['#0c1017', '#263c47', '#8fb9aa', '#e2a8b4', '#f4efe6'],
          imageUrl: String(reader.result),
          sceneType: 'jejuDawn',
          source: 'gphotos'
        };
        syncedGooglePhotos.unshift(newItem);
        loadedCount++;
        if (loadedCount === files.length) {
          saveSyncedGooglePhotos(syncedGooglePhotos);
          renderGallery('all');
          showGPhotosStatus(`✓ Đã nạp thành công <strong>${files.length} ảnh</strong> vào Thư viện!`);
        }
      };
      reader.readAsDataURL(file);
    });
  });

  // Tab 2: Official Google OAuth 2.0 Photos Library API
  document.getElementById('gpOAuthConnectBtn')?.addEventListener('click', () => {
    const clientId = document.getElementById('gpClientId')?.value.trim();
    if (!clientId) {
      showGPhotosStatus('⚠ Vui lòng nhập <strong>Google Cloud OAuth 2.0 Client ID</strong> của bạn, hoặc chuyển sang Tab 3 để đồng bộ ngay Album mẫu chỉ với 1 cú nhấp chuột.');
      return;
    }

    if (!window.google || !window.google.accounts || !window.google.accounts.oauth2) {
      showGPhotosStatus('⚠ Không thể tải thư viện Google Identity Services (kiểm tra kết nối mạng hoặc mở qua localhost).');
      return;
    }

    const tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',
      callback: async (tokenResponse) => {
        if (tokenResponse.error) {
          showGPhotosStatus(`⚠ Lỗi xác thực OAuth: ${tokenResponse.error}`);
          return;
        }
        showGPhotosStatus('Đang tải danh sách ảnh từ Google Photos Library API...');
        try {
          const res = await fetch('https://photoslibrary.googleapis.com/v1/mediaItems?pageSize=12', {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
          });
          const data = await res.json();
          const items = data.mediaItems || [];
          if (!items.length) {
            showGPhotosStatus('Tài khoản Google Photos chưa có ảnh nào trong thư viện chính.');
            return;
          }
          const mapped = items.map((m, i) => {
            const meta = m.mediaMetadata?.photo || {};
            return {
              id: `gp-api-${m.id}`,
              title: `[Google Photos] ${m.filename || `K-Visual #${i + 1}`}`,
              category: i % 3 === 0 ? 'landscape' : i % 3 === 1 ? 'street' : 'portrait',
              categoryLabel: i % 3 === 0 ? 'Phong cảnh' : i % 3 === 1 ? 'Đường phố' : 'Chân dung',
              wide: i % 4 === 0,
              camera: `${meta.cameraMake || 'Leica'} ${meta.cameraModel || 'M11'}`.trim(),
              lens: meta.focalLength ? `${meta.focalLength}mm Prime` : '35mm Summilux',
              exposure: `f/${meta.apertureFNumber || '1.8'} • ISO ${meta.isoEquivalent || '200'}`,
              location: 'Google Photos Cloud',
              story: m.description || 'Đồng bộ trực tiếp qua Google Photos API OAuth 2.0.',
              palette: ['#0c1017', '#263c47', '#8fb9aa', '#e2a8b4', '#f4efe6'],
              imageUrl: `${m.baseUrl}=w1400-h900`,
              sceneType: 'jejuDawn',
              source: 'gphotos'
            };
          });
          syncedGooglePhotos = [...mapped, ...syncedGooglePhotos];
          saveSyncedGooglePhotos(syncedGooglePhotos);
          renderGallery('all');
          showGPhotosStatus(`✓ Đã kết nối OAuth 2.0 và tải về <strong>${mapped.length} bức ảnh</strong> từ Google Photos của bạn!`);
        } catch (err) {
          showGPhotosStatus(`⚠ Không thể gọi API Google Photos: ${err.message}`);
        }
      }
    });

    tokenClient.requestAccessToken();
  });

  // Tab 3: Sample Album Sync & Clear
  document.getElementById('gpSyncSampleAlbumBtn')?.addEventListener('click', syncSampleGooglePhotosAlbum);

  document.getElementById('gpClearSyncedBtn')?.addEventListener('click', () => {
    syncedGooglePhotos = [];
    saveSyncedGooglePhotos([]);
    renderGallery('all');
    showGPhotosStatus('Đã xóa toàn bộ ảnh đồng bộ ngoài và khôi phục 9 tác phẩm gốc của Hải.');
  });
}

// ============================================================================
// 3. VIDEO SHOWCASE PLAYER ENGINE
// ============================================================================
let activeVideoIndex = 0;
let isVideoPlaying = true;
let isColorGraded = true;
let videoTick = 0;

function initVideoShowcase() {
  const playlistEl = document.getElementById('videoPlaylist');
  const playerCanvas = document.getElementById('videoPlayerCanvas');
  if (!playlistEl || !playerCanvas) return;

  const pCtx = playerCanvas.getContext('2d');

  function renderPlaylist() {
    playlistEl.innerHTML = '';
    VIDEO_REELS.forEach((video, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `playlist-item ${idx === activeVideoIndex ? 'active' : ''}`;
      btn.innerHTML = `
        <div class="playlist-thumb">
          <canvas width="224" height="136"></canvas>
          <span class="playlist-duration">${video.duration}</span>
        </div>
        <div class="playlist-meta">
          <span class="playlist-tag">${video.category}</span>
          <span class="playlist-title">${video.title}</span>
          <span class="playlist-sub">${video.lut}</span>
        </div>
      `;

      const thumbCanvas = btn.querySelector('canvas');
      drawArtworkScene(thumbCanvas.getContext('2d'), 224, 136, video.theme);

      btn.addEventListener('click', () => {
        activeVideoIndex = idx;
        isVideoPlaying = true;
        updatePlayPauseUI();
        updateActiveVideoMetadata();
        renderPlaylist();
      });

      playlistEl.appendChild(btn);
    });
  }

  function updateActiveVideoMetadata() {
    const v = VIDEO_REELS[activeVideoIndex];
    document.getElementById('activeVideoLut').textContent = `LUT: ${v.lut}`;
    document.getElementById('activeVideoCategory').textContent = v.category;
    document.getElementById('activeVideoTitle').textContent = v.title;
    document.getElementById('activeVideoDesc').textContent = v.desc;

    const specsEl = document.getElementById('activeVideoSpecs');
    specsEl.innerHTML = v.specs
      .map((s) => `<div class="spec-chip"><span>${s.label}</span><strong>${s.value}</strong></div>`)
      .join('');
  }

  function updatePlayPauseUI() {
    const label = document.getElementById('vcPlayLabel');
    const icon = document.getElementById('centerPlayIcon');
    if (label) label.textContent = isVideoPlaying ? 'Tạm dừng' : 'Phát tiếp';
    if (icon) {
      icon.innerHTML = isVideoPlaying
        ? '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'
        : '<polygon points="6 4 20 12 6 20 6 4"/>';
    }
  }

  function togglePlay() {
    isVideoPlaying = !isVideoPlaying;
    updatePlayPauseUI();
  }

  document.getElementById('videoCenterPlayBtn')?.addEventListener('click', togglePlay);
  document.getElementById('vcPlayPause')?.addEventListener('click', togglePlay);

  const colorBtn = document.getElementById('vcColorGradeBtn');
  colorBtn?.addEventListener('click', () => {
    isColorGraded = !isColorGraded;
    colorBtn.innerHTML = `<span>K-Color Grade: ${isColorGraded ? 'ON' : 'RAW LOG'}</span>`;
    playerCanvas.style.filter = isColorGraded ? 'none' : 'saturate(0.32) contrast(0.84) brightness(1.06)';
  });

  document.getElementById('vcTimeline')?.addEventListener('click', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoTick = Math.floor(ratio * 600);
  });

  function animateVideoPlayer() {
    if (isVideoPlaying) {
      videoTick = (videoTick + 1) % 600;
    }
    const v = VIDEO_REELS[activeVideoIndex];
    const w = playerCanvas.width;
    const h = playerCanvas.height;

    drawArtworkScene(pCtx, w, h, v.theme);

    const sweepX = ((videoTick / 600) * (w + 300)) - 150;
    const sweepGrad = pCtx.createLinearGradient(sweepX - 160, 0, sweepX + 160, h);
    sweepGrad.addColorStop(0, 'rgba(244, 239, 230, 0)');
    sweepGrad.addColorStop(0.5, 'rgba(226, 168, 180, 0.14)');
    sweepGrad.addColorStop(1, 'rgba(244, 239, 230, 0)');
    pCtx.fillStyle = sweepGrad;
    pCtx.fillRect(0, 0, w, h);

    pCtx.fillStyle = '#050609';
    pCtx.fillRect(0, 0, w, 46);
    pCtx.fillRect(0, h - 46, w, 46);

    const progressEl = document.getElementById('vcProgress');
    const timeEl = document.getElementById('vcTimeDisplay');
    const pct = (videoTick / 600) * 100;
    if (progressEl) progressEl.style.width = `${pct.toFixed(1)}%`;
    if (timeEl) {
      const currentSec = Math.floor((videoTick / 600) * 140);
      const mm = String(Math.floor(currentSec / 60)).padStart(2, '0');
      const ss = String(currentSec % 60).padStart(2, '0');
      timeEl.textContent = `${mm}:${ss} / ${v.duration}`;
    }

    requestAnimationFrame(animateVideoPlayer);
  }

  renderPlaylist();
  updateActiveVideoMetadata();
  requestAnimationFrame(animateVideoPlayer);
}

// ============================================================================
// 4. PHOTOGRAPHER PORTRAIT CANVAS & CONTACT FORM
// ============================================================================
function loadSavedAvatarState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_AVATAR);
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      imageUrl:
        parsed && typeof parsed.imageUrl === 'string' && parsed.imageUrl.trim()
          ? parsed.imageUrl.trim()
          : DEFAULT_AVATAR_IMAGE_URL,
      googlePhotosWebUrl:
        parsed && typeof parsed.googlePhotosWebUrl === 'string' && parsed.googlePhotosWebUrl
          ? parsed.googlePhotosWebUrl
          : DEFAULT_AVATAR_GPHOTOS_URL
    };
  } catch {
    return {
      imageUrl: DEFAULT_AVATAR_IMAGE_URL,
      googlePhotosWebUrl: DEFAULT_AVATAR_GPHOTOS_URL
    };
  }
}

function saveAvatarState(state) {
  try {
    localStorage.setItem(STORAGE_KEY_AVATAR, JSON.stringify(state));
  } catch {
    // Ignore storage quota errors
  }
}

function applyAvatarState(state) {
  const gpLink = document.getElementById('portraitGpLink');
  const portraitImg = document.getElementById('photographerPortraitImg');
  const headerImg = document.getElementById('headerAvatarImg');

  if (gpLink) {
    gpLink.href = (state && state.googlePhotosWebUrl) || DEFAULT_AVATAR_GPHOTOS_URL;
  }

  const validDirect = state && isDirectImageUrl(state.imageUrl);
  if (validDirect) {
    if (portraitImg) {
      portraitImg.src = state.imageUrl;
      portraitImg.style.display = 'block';
      portraitImg.onerror = () => {
        portraitImg.style.display = 'none';
      };
    }
    if (headerImg) {
      headerImg.src = state.imageUrl;
      headerImg.style.display = 'block';
      headerImg.onerror = () => {
        headerImg.style.display = 'none';
      };
    }
  } else {
    if (portraitImg) {
      portraitImg.removeAttribute('src');
      portraitImg.style.display = 'none';
    }
    if (headerImg) {
      headerImg.removeAttribute('src');
      headerImg.style.display = 'none';
    }
  }
}

function initPhilosophyPortrait() {
  const canvas = document.getElementById('photographerPortraitCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    drawArtworkScene(ctx, w, h, 'seongsuPortrait');

    // Warm K-Studio rim light glow behind photographer portrait
    const rimGlow = ctx.createRadialGradient(w * 0.52, h * 0.42, 16, w * 0.5, h * 0.45, w * 0.42);
    rimGlow.addColorStop(0, 'rgba(226, 168, 180, 0.38)');
    rimGlow.addColorStop(0.55, 'rgba(223, 203, 169, 0.22)');
    rimGlow.addColorStop(1, 'rgba(10, 12, 17, 0)');
    ctx.fillStyle = rimGlow;
    ctx.fillRect(0, 0, w, h);

    // Camera body silhouette held by photographer
    const cx = w * 0.5;
    const cy = h * 0.54;
    ctx.fillStyle = 'rgba(9, 11, 16, 0.94)';
    ctx.strokeStyle = 'rgba(223, 203, 169, 0.38)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(cx - 78, cy - 46, 156, 94, 12);
    ctx.fill();
    ctx.stroke();

    // Top viewfinder prism & shutter button silhouette
    ctx.beginPath();
    ctx.roundRect(cx - 32, cy - 62, 64, 18, 5);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#c83e2b';
    ctx.beginPath();
    ctx.arc(cx + 50, cy - 48, 4.5, 0, Math.PI * 2);
    ctx.fill();

    // Lens barrel & glass reflection
    ctx.strokeStyle = 'rgba(223, 203, 169, 0.58)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 56, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = 'rgba(11, 14, 20, 0.88)';
    ctx.beginPath();
    ctx.arc(cx, cy, 48, 0, Math.PI * 2);
    ctx.fill();

    const lensGlint = ctx.createRadialGradient(cx - 12, cy - 12, 4, cx, cy, 44);
    lensGlint.addColorStop(0, 'rgba(226, 168, 180, 0.68)');
    lensGlint.addColorStop(0.5, 'rgba(143, 185, 170, 0.32)');
    lensGlint.addColorStop(1, 'rgba(8, 10, 14, 0.94)');
    ctx.fillStyle = lensGlint;
    ctx.beginPath();
    ctx.arc(cx, cy, 44, 0, Math.PI * 2);
    ctx.fill();

    // Subtle Google Photos Avatar ID badge at bottom of canvas
    ctx.save();
    ctx.font = '500 11px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(244, 239, 230, 0.55)';
    ctx.textAlign = 'center';
    ctx.fillText('GOOGLE PHOTOS AVATAR • AF1QipOtvbseQtK7...', cx, h - 18);
    ctx.restore();
  }

  let avatarState = loadSavedAvatarState();
  applyAvatarState(avatarState);

  const changeBtn = document.getElementById('changeAvatarBtn');
  const fileInput = document.getElementById('avatarFileInput');

  changeBtn?.addEventListener('click', () => {
    const input = window.prompt(
      'Dán đường dẫn ảnh trực tiếp từ Google Photos (lh3.googleusercontent.com/...) hoặc bấm OK (để trống) để chọn tệp ảnh đại diện từ máy tính:',
      ''
    );
    if (input === null) return;
    const trimmed = input.trim();
    if (!trimmed) {
      fileInput?.click();
      return;
    }
    if (isGooglePhotosWebPageUrl(trimmed)) {
      avatarState = {
        ...avatarState,
        googlePhotosWebUrl: trimmed
      };
      saveAvatarState(avatarState);
      applyAvatarState(avatarState);
      fileInput?.click();
      return;
    }
    if (isDirectImageUrl(trimmed)) {
      avatarState = {
        imageUrl: trimmed,
        googlePhotosWebUrl: avatarState.googlePhotosWebUrl || DEFAULT_AVATAR_GPHOTOS_URL
      };
      saveAvatarState(avatarState);
      applyAvatarState(avatarState);
    } else {
      avatarState = {
        imageUrl: trimmed,
        googlePhotosWebUrl: avatarState.googlePhotosWebUrl || DEFAULT_AVATAR_GPHOTOS_URL
      };
      saveAvatarState(avatarState);
      applyAvatarState(avatarState);
    }
  });

  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      avatarState = {
        imageUrl: String(reader.result),
        googlePhotosWebUrl: avatarState.googlePhotosWebUrl || DEFAULT_AVATAR_GPHOTOS_URL
      };
      saveAvatarState(avatarState);
      applyAvatarState(avatarState);
    };
    reader.readAsDataURL(file);
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('clientName').value.trim();
    const contact = document.getElementById('clientContact').value.trim();
    const projectType = document.getElementById('projectType').selectedOptions[0].textContent;
    const message = document.getElementById('projectMessage').value.trim();

    if (!name || !contact || !message) {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Vui lòng điền đầy đủ Họ tên, Thông tin liên hệ và Lời nhắn của bạn.';
      return;
    }

    feedback.className = 'form-feedback show';
    feedback.innerHTML = `감사합니다 • Cảm ơn <strong>${name}</strong>! Yêu cầu đặt lịch hạng mục <em>"${projectType}"</em> đã được gửi tới Hải (<strong>hai.hau.trang@gmail.com</strong>). Hải sẽ phản hồi qua <strong>${contact}</strong> trong vòng 24 giờ.`;
    form.reset();
  });
}

function initHeaderAndCinemaMode() {
  document.body.classList.add('dark-mode');
  const cinemaBtn = document.getElementById('cinemaModeBtn');
  const cinemaLabel = document.getElementById('cinemaModeLabel');
  cinemaBtn?.addEventListener('click', () => {
    document.body.classList.toggle('cinema-deep-mode');
    const active = document.body.classList.contains('cinema-deep-mode');
    cinemaBtn.classList.toggle('active', active);
    if (cinemaLabel) cinemaLabel.textContent = active ? 'Dark Mode: OLED' : 'Dark Mode: Charcoal';
  });

  const mobileBtn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mainNav');
  mobileBtn?.addEventListener('click', () => {
    nav?.classList.toggle('mobile-open');
  });

  const sections = ['home', 'gallery', 'videos', 'contact'];
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 240;
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
        document.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  });
}

// ============================================================================
// 5. GITHUB INTEGRATION & REPOSITORY DEPLOYMENT HELPER
// ============================================================================
function parseGithubInput(rawInput) {
  const cleaned = (rawInput || '').trim().replace(/\/+$/, '').replace(/\.git$/i, '');
  if (!cleaned) return null;

  const urlMatch = cleaned.match(/^(?:https?:\/\/)?(?:www\.)?github\.com\/([^/\s]+)(?:\/([^/\s]+))?/i);
  if (urlMatch) {
    const username = urlMatch[1];
    const repo = urlMatch[2] || 'hai-portfolio';
    return {
      username,
      repo,
      profileUrl: `https://github.com/${username}`,
      repoUrl: `https://github.com/${username}/${repo}`
    };
  }

  const parts = cleaned.replace(/^@/, '').split('/').filter(Boolean);
  const username = parts[0];
  const repo = parts[1] || 'hai-portfolio';
  return {
    username,
    repo,
    profileUrl: `https://github.com/${username}`,
    repoUrl: `https://github.com/${username}/${repo}`
  };
}

const DEFAULT_GITHUB_STATE = {
  username: 'HAI_PHOTO',
  repo: 'hai-portfolio',
  repoUrl: 'https://github.com/HAI_PHOTO/hai-portfolio',
  profileUrl: 'https://github.com/HAI_PHOTO',
  avatarUrl: 'hai-avatar.jpg',
  avatar_url: 'hai-avatar.jpg',
  bio: 'Hải — Photographer & Videographer • K-Editorial Visual Studio'
};

function loadGithubState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_GITHUB);
    return raw ? JSON.parse(raw) : { ...DEFAULT_GITHUB_STATE };
  } catch {
    return { ...DEFAULT_GITHUB_STATE };
  }
}

function saveGithubState(state) {
  try {
    if (!state) {
      localStorage.removeItem(STORAGE_KEY_GITHUB);
    } else {
      localStorage.setItem(STORAGE_KEY_GITHUB, JSON.stringify(state));
    }
  } catch {
    // Ignore storage quota errors
  }
}

function initGithubIntegration() {
  const modal = document.getElementById('githubModal');
  const openBtn = document.getElementById('openGithubBtn');
  const closeBtn = document.getElementById('githubCloseBtn');
  const backdrop = document.getElementById('githubBackdrop');
  const form = document.getElementById('githubConnectForm');
  const inputEl = document.getElementById('githubInput');
  const disconnectBtn = document.getElementById('githubDisconnectBtn');
  const copyBtn = document.getElementById('copyGithubCmdBtn');
  const cmdCodeEl = document.getElementById('githubCmdCode');
  const statusEl = document.getElementById('githubStatusMsg');

  const headerLabel = document.getElementById('githubHeaderLabel');
  const contactLink = document.getElementById('contactGithubLink');
  const profileCard = document.getElementById('githubProfileCard');
  const avatarImg = document.getElementById('ghAvatarImg');
  const displayNameEl = document.getElementById('ghDisplayName');
  const usernameBadgeEl = document.getElementById('ghUsernameBadge');
  const bioEl = document.getElementById('ghBio');
  const repoCountEl = document.getElementById('ghRepoCount');
  const followersCountEl = document.getElementById('ghFollowersCount');
  const profileUrlBtn = document.getElementById('ghProfileUrlBtn');
  const repoUrlBtn = document.getElementById('ghRepoUrlBtn');

  function showGithubStatus(msg) {
    if (!statusEl) return;
    statusEl.className = 'gph-status-msg show';
    statusEl.innerHTML = msg;
  }

  function updateGitCommands(username = 'HAI_PHOTO', repo = 'hai-portfolio') {
    if (!cmdCodeEl) return;
    cmdCodeEl.textContent =
      `git remote add origin https://github.com/${username}/${repo}.git\n` +
      `git branch -M main\n` +
      `git push -u origin main`;
  }

  async function renderGithubState(state, fetchFresh = false) {
    if (!state || !state.username) {
      openBtn?.classList.remove('connected');
      if (headerLabel) headerLabel.textContent = 'GitHub';
      if (contactLink) {
        contactLink.href = 'https://github.com/HAI_PHOTO';
        contactLink.textContent = 'GitHub @HAI_PHOTO';
      }
      if (profileCard) profileCard.style.display = 'none';
      if (disconnectBtn) disconnectBtn.style.display = 'none';
      updateGitCommands('HAI_PHOTO', 'hai-portfolio');
      return;
    }

    const { username, repo = 'hai-portfolio', profileUrl, repoUrl } = state;
    openBtn?.classList.add('connected');
    if (headerLabel) headerLabel.textContent = `@${username}`;
    if (contactLink) {
      contactLink.href = profileUrl || `https://github.com/${username}`;
      contactLink.textContent = `GitHub @${username}`;
    }
    if (inputEl && !inputEl.value) {
      inputEl.value = username;
    }
    if (disconnectBtn) disconnectBtn.style.display = 'inline-flex';
    updateGitCommands(username, repo);

    if (profileCard) profileCard.style.display = 'flex';
    if (displayNameEl) displayNameEl.textContent = state.name || username;
    if (usernameBadgeEl) usernameBadgeEl.textContent = `@${username}`;
    if (bioEl) {
      bioEl.textContent =
        state.bio || 'Hải — Photographer & Videographer • K-Editorial Visual Studio';
    }
    if (repoCountEl) {
      repoCountEl.innerHTML = `<strong>${state.public_repos ?? 1}</strong> Public Repos`;
    }
    if (followersCountEl) {
      followersCountEl.innerHTML = `<strong>${state.followers ?? 0}</strong> Followers`;
    }
    if (avatarImg) {
      avatarImg.src = state.avatarUrl || state.avatar_url || DEFAULT_AVATAR_IMAGE_URL;
      avatarImg.onerror = () => {
        avatarImg.src = DEFAULT_AVATAR_IMAGE_URL;
      };
    }
    if (profileUrlBtn) profileUrlBtn.href = profileUrl || `https://github.com/${username}`;
    if (repoUrlBtn) {
      repoUrlBtn.href = repoUrl || `https://github.com/${username}/${repo}`;
      repoUrlBtn.textContent = `Repo: ${repo} ↗`;
    }

    if (fetchFresh) {
      try {
        const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
        if (res.ok) {
          const data = await res.json();
          const enriched = {
            ...state,
            name: data.name || username,
            bio: data.bio || state.bio,
            avatarUrl: data.avatar_url || state.avatarUrl || DEFAULT_AVATAR_IMAGE_URL,
            avatar_url: data.avatar_url || state.avatar_url || DEFAULT_AVATAR_IMAGE_URL,
            public_repos: data.public_repos ?? 1,
            followers: data.followers ?? 0
          };
          saveGithubState(enriched);
          await renderGithubState(enriched, false);
        }
      } catch {
        // Offline or rate-limited fallback uses local state gracefully
      }
    }
  }

  function openGithubModal() {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeGithubModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  openBtn?.addEventListener('click', openGithubModal);
  closeBtn?.addEventListener('click', closeGithubModal);
  backdrop?.addEventListener('click', closeGithubModal);

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const parsed = parseGithubInput(inputEl?.value || '');
    if (!parsed) return;

    const newState = {
      ...DEFAULT_GITHUB_STATE,
      ...parsed,
      connectedAt: new Date().toISOString()
    };
    saveGithubState(newState);
    await renderGithubState(newState, true);
    showGithubStatus(
      `✓ Đã kết nối GitHub <strong>@${parsed.username}</strong> (Repository: <code>${parsed.repo}</code>)!`
    );
  });

  disconnectBtn?.addEventListener('click', () => {
    saveGithubState(null);
    if (inputEl) inputEl.value = '';
    renderGithubState(null, false);
    showGithubStatus('Đã ngắt kết nối tài khoản GitHub.');
  });

  copyBtn?.addEventListener('click', async () => {
    const text = cmdCodeEl?.textContent || '';
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = 'Đã sao chép ✓';
      setTimeout(() => {
        copyBtn.textContent = 'Sao chép lệnh';
      }, 2000);
    } catch {
      showGithubStatus('✓ Hãy bôi đen và nhấn Ctrl+C để sao chép khối lệnh Git bên trên.');
    }
  });

  const saved = loadGithubState();
  renderGithubState(saved, true);
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  renderGallery('all');
  initGalleryControls();
  initGooglePhotosIntegration();
  initGithubIntegration();
  initVideoShowcase();
  initPhilosophyPortrait();
  initContactForm();
  initHeaderAndCinemaMode();
});
