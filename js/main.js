/* ─── NAV: scroll behavior ─────────────────────────────── */
const nav    = document.getElementById('site-nav');
const heroBg = document.querySelector('.hero__bg');

function onScroll() {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 60);
  parallaxHero();
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ─── NAV: mobile toggle ───────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─── SMOOTH SCROLL ─────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h')) || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ─── HERO PARALLAX ─────────────────────────────────────── */
function parallaxHero() {
  if (!heroBg) return;
  heroBg.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
}

/* ─── SCROLL REVEAL ─────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px 100px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  if (el.closest('.hero')) return;
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight + 100) {
    el.classList.add('visible');
  } else {
    revealObs.observe(el);
  }
});

/* ─── BOOKING FORM ──────────────────────────────────────── */
const form    = document.getElementById('booking-form');
const formMsg = document.getElementById('form-msg');

if (form && formMsg) {
  const dateInput = document.getElementById('f-date');
  if (dateInput) {
    dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data   = new FormData(form);
    const name   = (data.get('name')   || '').trim();
    const phone  = (data.get('phone')  || '').trim();
    const date   = data.get('date');
    const time   = data.get('time');
    const guests = data.get('guests');
    const note   = (data.get('note')   || '').trim();

    if (!name || !phone || !date || !time) {
      showMsg('error', 'Vui lòng điền đầy đủ thông tin bắt buộc (*).');
      return;
    }
    if (!/^[\d\s\+\-\(\)]{8,15}$/.test(phone)) {
      showMsg('error', 'Số điện thoại không hợp lệ.');
      return;
    }
    if (guests && (Number(guests) < 1 || Number(guests) > 50)) {
      showMsg('error', 'Số khách phải từ 1 đến 50.');
      return;
    }

    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Đang gửi...';

    if (window.db) {
      const { error } = await window.db.from('kobe_bookings').insert([{
        name, phone, date, time,
        guests: guests ? Number(guests) : 2,
        note
      }]);
      if (error) console.error('Booking error:', error.message);
    }

    showMsg('success',
      `Cảm ơn ${name}! Yêu cầu đặt bàn đã được ghi nhận — chúng tôi sẽ gọi xác nhận sớm nhất qua số ${phone}.`
    );
    form.reset();
    btn.disabled = false;
    btn.textContent = 'Xác Nhận Đặt Bàn';
    setTimeout(() => {
      formMsg.textContent = '';
      formMsg.className = '';
    }, 8000);
  });
}

function showMsg(type, text) {
  if (!formMsg) return;
  formMsg.className = type;
  formMsg.textContent = text;
  formMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
