document.addEventListener("DOMContentLoaded", function () {
  // --- RIMOSSA ANIMAZIONE SEZIONE STORIA DETTAGLIATA ---

  // Animazione sezione side: testo da sinistra, immagine da destra
  const sideText = document.querySelector('.storia-side-text');
  const sideImg = document.querySelector('.storia-side-img-wrapper');
  function animateSideSection() {
    if (!sideText || !sideImg) return;
    const rect = sideText.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight - 100) {
      sideText.style.opacity = 1;
      sideText.style.transform = "translateX(0)";
      sideImg.style.opacity = 1;
      sideImg.style.transform = "translateX(0)";
      window.removeEventListener('scroll', animateSideSection);
    }
  }
  window.addEventListener('scroll', animateSideSection);
  animateSideSection();

  // Animazione fade-in testo grigliata
  const grigliataTesto = document.querySelector('.grigliata-testo');
  if (grigliataTesto) {
    function fadeInGrigliataTesto() {
      const rect = grigliataTesto.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 100) {
        grigliataTesto.classList.add('visible');
        window.removeEventListener('scroll', fadeInGrigliataTesto);
      }
    }
    window.addEventListener('scroll', fadeInGrigliataTesto);
    fadeInGrigliataTesto();
  }

  // Scroll verticale -> orizzontale per immagini grigliata
  const grigliataScroll = document.querySelector('.grigliata-horizontal-scroll');
  const grigliataTrack = document.querySelector('.grigliata-img-track');
  if (grigliataScroll && grigliataTrack) {
    let lastScrollY = window.scrollY;
    let ticking = false;

    function syncHorizontalScroll() {
      // Calcola quanto la sezione è visibile
      const sectionRect = grigliataScroll.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const sectionTop = sectionRect.top + window.scrollY;
      const sectionHeight = sectionRect.height;
      const scrollStart = sectionTop - windowHeight + 100;
      const scrollEnd = sectionTop + sectionHeight;
      const scrollRange = scrollEnd - scrollStart;

      if (window.scrollY > scrollStart && window.scrollY < scrollEnd) {
        // Fai scorrere più lentamente (0.7 = 70% della distanza)
        const percent = Math.min(1, Math.max(0, (window.scrollY - scrollStart) / (scrollRange - windowHeight)));
        const slowPercent = percent * 0.7;
        const maxScroll = grigliataTrack.scrollWidth - grigliataScroll.clientWidth;
        grigliataTrack.style.transform = `translateX(${-slowPercent * maxScroll}px)`;
      } else if (window.scrollY <= scrollStart) {
        grigliataTrack.style.transform = `translateX(0)`;
      } else if (window.scrollY >= scrollEnd) {
        grigliataTrack.style.transform = `translateX(-${grigliataTrack.scrollWidth - grigliataScroll.clientWidth}px)`;
      }
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          syncHorizontalScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
    syncHorizontalScroll();
  }

  // Animazione entra a far parte della famiglia: testo dal basso
  const entraFamigliaContent = document.querySelector('.entra-famiglia-content');
  if (entraFamigliaContent) {
    // Stato iniziale
    entraFamigliaContent.style.opacity = 0;
    entraFamigliaContent.style.transform = "translateY(60px)";
    entraFamigliaContent.style.transition = "opacity 0.9s, transform 0.9s";

    function animateEntraFamiglia() {
      const rect = entraFamigliaContent.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 80) {
        entraFamigliaContent.style.opacity = 1;
        entraFamigliaContent.style.transform = "translateY(0)";
        window.removeEventListener('scroll', animateEntraFamiglia);
      }
    }
    window.addEventListener('scroll', animateEntraFamiglia);
    animateEntraFamiglia();
  }
});
