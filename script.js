// Scroll-reveal for sections, respecting reduced-motion preference
document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');

  if (prefersReduced) {
    reveals.forEach(el => el.classList.add('in'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }

  // Portrait photo fallback: show initials if photo.jpg hasn't been added yet
  const portraitImg = document.getElementById('portrait-img');
  if (portraitImg) {
    portraitImg.addEventListener('error', () => {
      portraitImg.style.display = 'none';
      const wrap = portraitImg.closest('.portrait-wrap');
      if (wrap && !wrap.querySelector('.initials')) {
        const div = document.createElement('div');
        div.className = 'initials';
        div.textContent = 'MK';
        wrap.appendChild(div);
      }
    });
  }
});
