// GSAP Animazione Navbar
gsap.registerPlugin(ScrollTrigger);

// NAVBAR ANIMAZIONE

// Animazione per far scendere la navbar
gsap.from(".navbar", {
    y: -100, // La navbar parte fuori dallo schermo
    opacity: 0, // La navbar parte invisibile
    duration: 1, // Durata dell'animazione
    ease: "power2.out", // Tipo di easing
});

// Animazione per far scendere le voci della navbar una alla volta (in parallelo)
gsap.from(".navbar-item", {
    y: -50, // Le voci partono leggermente sopra
    opacity: 0, // Le voci partono invisibili
    duration: 0.5, // Durata dell'animazione per ogni voce
    ease: "power2.out", // Tipo di easing
    stagger: 0.2, // Ritardo di 0.2 secondi tra ogni voce
    delay: 0.2, // Ritardo iniziale per sincronizzarsi con la navbar
});

// HERO ANIMAZIONE 


// GSAP Animazione Pallina e Scritta
gsap.registerPlugin(ScrollTrigger);

// Animazione della pallina e della scritta "Vismara Cup"
gsap.timeline({
    scrollTrigger: {
        trigger: ".hero", // La sezione che attiva l'animazione
        start: "top top", // Inizia quando la sezione è in cima
        end: "+=400%", // La durata totale dell'animazione (400% della viewport)
        scrub: true, // Sincronizza con lo scroll
        pin: true, // Blocca la sezione .hero durante l'animazione
    }
})
    // Step 1: La pallina si rimpicciolisce
    .to(".tennis-ball", {
        scale: 0.5, // Rimpicciolisce la pallina
        duration: 3, // Dura 3 scroll
        ease: "power2.out",
    })

     // Step 2: La scritta "Vismara Cup" compare da sotto
     .from(".hero-title", {
      y: 100, // La scritta parte da sotto
      opacity: 0, // La scritta parte invisibile
      duration: 1, // Dura 1 scroll
      ease: "power2.out",
    }, "<") // Inizia contemporaneamente alla pallina che si rimpicciolisce

    // Step 3: La pallina si sposta verso l'alto e quasi esce dallo schermo
    .to(".tennis-ball", {
        y: -300, // Sposta la pallina verso l'alto, quasi fuori dalla viewport
        duration: 2, // Dura 2 scroll
        ease: "power2.out",
    })
    
    // Step 4: La pallina scende e si posiziona dietro la scritta
    .to(".tennis-ball", {
        y: -50, // Sposta la pallina sopra la scritta
        zIndex: 1, // Passa in secondo piano
        duration: 2, // Dura 2 scroll
        ease: "power2.out",
    })

    // Step 5: La pallina e la scritta svaniscono per visualizzare "La Nostra Storia"
    .to([".tennis-ball", ".hero-title"], {
        y: -100, // Entrambi si spostano verso l'alto
        duration: 1, // Dura 1 scroll
        ease: "power2.out",
    });

// ANIMAZIONE LA NOSTRA STORIA

// GSAP Animazione Sezione "La Nostra Storia"
gsap.timeline({
  scrollTrigger: {
      trigger: ".storia", // La sezione che attiva l'animazione
      start: "top 80%", // Inizia quando la sezione è visibile
      end: "top 50%", // Fine dell'animazione
      scrub: false, // L'animazione non è sincronizzata con lo scroll
  }
})


 // ANIMAZIONE LA NOSTRA STORIA
gsap.timeline({
    scrollTrigger: {
        trigger: ".storia", // La sezione che attiva l'animazione
        start: "top 80%", // Inizia quando la sezione è visibile
        end: "top 50%", // Fine dell'animazione
        scrub: false, // L'animazione non è sincronizzata con lo scroll
    }
  })
    // Animazione della sezione .text che compare dal basso
    .from(".text", {
      y: 100, // Parte dal basso
      opacity: 0, // Parte invisibile
      duration: 2, // Dura 1.5 secondi
      ease: "power2.out", // Animazione fluida
    })
     // Animazione dell'immagine .fotocampo che compare dal basso
    .from(".fotocampo", {
    y: 100, // Parte dal basso
    opacity: 0, // Parte invisibile
    duration: 2, // Dura 1.5 secondi
    ease: "power2.out", // Animazione fluida
  }, "<"); // Inizia contemporaneamente alla sezione .text


  // ANIMAZIONE  FRASI
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#frasi", {
    xPercent: -75,
    ease: "none",
    scrollTrigger: {
      trigger: ".frasi-section",
      start: "top top",
      end: "+=3000", 
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  });

// ANIMAZIONE GALLERY

gsap.to(".gallery-title", {
  scrollTrigger: {
    trigger: ".gallery-title",
    start: "top 80%", // parte quando il titolo entra un po’ nello schermo
    toggleActions: "play none none none"
  },
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".parallax-img").forEach((el) => {
    gsap.to(el, {
      y: -100, // quanto si sposta verso l'alto durante lo scroll
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom", // quando entra nella viewport
        end: "bottom top",   // quando esce
        scrub: true,         // effetto continuo mentre scrolli
      }
    });
  });

  // ANIMAZIONE MERCH
  gsap.registerPlugin(ScrollTrigger);

    gsap.to(".merch-content", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".merch-section",
        start: "top 80%",
      }
    });

// ANIMAZIONE SEZIONE FINALE
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".sezione-finale",
    start: "top 80%",
    toggleActions: "play none none none"
  }
})
.from(".finale-title", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
})
.from(".finale-menu", {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
}, "-=0.5");

// ANIMAZIONE CONTACT
gsap.registerPlugin(ScrollTrigger);

gsap.from(".contact-section", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 70%", // quando il 20% della sezione è visibile
    toggleActions: "play none none none",
  },
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});

// ANIMAZIONE FINALE
function animateDecryptPerLetter(targetId, finalText, delay = 0) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  const element = document.getElementById(targetId);
  const letters = finalText.split("");
  const revealDelays = [];

  // Genera tempi casuali di rivelazione per ogni lettera
  letters.forEach((_, i) => {
    revealDelays[i] = delay + i * 250 + Math.floor(Math.random() * 200); // effetto graduale non uniforme
  });

  const startTime = Date.now();

  const interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const displayed = letters.map((char, i) => {
      return elapsed > revealDelays[i] ? char : characters[Math.floor(Math.random() * characters.length)];
    });

    element.textContent = displayed.join("");

    if (elapsed > Math.max(...revealDelays) + 200) {
      clearInterval(interval);
      element.textContent = finalText; // assicurati che il risultato finale sia preciso
    }
  }, 40);
}
ScrollTrigger.create({
  trigger: ".vismara-cup",
  start: "top 80%",
  once: true,
  onEnter: () => {
    animateDecryptPerLetter("vismara-text", "VISMARA");
    animateDecryptPerLetter("cup-text", "CUP", 400); // parte dopo un attimo
  }
});

