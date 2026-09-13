gsap.registerPlugin(ScrollTrigger);

// ============================================================
// SERVICE & EXPERIENCE DETAILS (MODAL DATA)
// ============================================================
const projectDetails = {
  "modal-smarthome": {
    title: "Smart Home Solutions & Automation",
    tag: "Core Service Offering",
    image: "assets/card_smarthome.jpg",
    desc: "Complete planning, installation, and optimization of smart home ecosystems. I integrate Home Assistant, Apple Home, and Google Home to unify lighting, automated climate controls, intelligent sensors, and smart security cameras into a single, intuitive interface. Every setup includes dedicated, isolated Wi-Fi and VLAN configurations to keep IoT gadgets secure and responsive without cluttering your personal home network.",
    tech: ["Home Assistant", "IoT Automation", "Smart Security", "Smart Lighting", "Zigbee & Matter", "Wi-Fi Isolation", "VLANs"],
    links: [
      { text: "Inquire About Smart Home", url: "#contact" }
    ]
  },
  "modal-smallbiz": {
    title: "Small Business IT Solutions",
    tag: "Core Service Offering",
    image: "assets/card_smallbiz.jpg",
    desc: "Turnkey IT infrastructure solutions tailored for small and medium businesses, medical clinics, retail stores, and commercial offices. Services include professional network switch/router configuration, seamless multi-room office Wi-Fi, employee workstation fleet deployment, automated daily data backups, Network Attached Storage (NAS) setups, and secure remote VPN access.",
    tech: ["Office Networks", "Commercial Wi-Fi", "Data Backup & NAS", "Workstation Fleets", "VPN Access", "Network Security"],
    links: [
      { text: "Request Business IT Consultation", url: "#contact" }
    ]
  },
  "modal-software": {
    title: "Software Installation & Maintaining",
    tag: "Core Service Offering",
    image: "assets/card_software.jpg",
    desc: "End-to-end software management for workstations, laptops, and servers. From clean operating system deployments (Windows 10/11, Rocky Linux, Ubuntu Server) to configuring productivity software, accounting tools, and security packages. Ongoing maintenance includes regular patch updates, driver optimizations, virus protection, and rapid remote troubleshooting.",
    tech: ["Windows & Linux OS", "Enterprise Software", "Patch Management", "System Optimization", "Remote Support", "Antivirus & Security"],
    links: [
      { text: "Schedule Software Maintenance", url: "#contact" }
    ]
  },
  "modal-repair": {
    title: "IT Repair Services & Hardware Maintenance",
    tag: "Core Service Offering",
    image: "assets/card_repair.jpg",
    desc: "Comprehensive diagnostic and hardware repair services for desktops, laptops, and server units. Addressing boot failures, blue-screens, overheating, and component faults. Services include deep physical cleaning, thermal paste replacement, high-speed NVMe/SATA SSD upgrades, RAM expansions, power supply replacements, and hard drive data recovery.",
    tech: ["Hardware Diagnostics", "Component Replacement", "Thermal Paste & Cooling", "SSD / RAM Upgrades", "Data Recovery", "Preventative Maintenance"],
    links: [
      { text: "Book IT Repair Service", url: "#contact" }
    ]
  },
  "modal-titan": {
    title: "Information Technology Help Desk @ Titan Albania",
    tag: "Current Role · Full-time · Tirana, Albania",
    image: "assets/card_titan.jpg",
    desc: "Delivering end-user IT support and managing/supporting organizational infrastructure, networks, and hardware. Responsibilities include employee onboarding/offboarding, asset management, physical security (CCTV/access control systems), and GDPR compliance, alongside driving process automation via the Microsoft Power Platform.",
    tech: ["Windows Server", "Enterprise IT Infrastructure", "CCTV & Access Controls", "Microsoft Power Platform", "Asset Management", "GDPR Compliance", "IT Help Desk"],
    links: [
      { text: "View on LinkedIn", url: "https://www.linkedin.com/in/muhamedtereziu/" }
    ]
  },
  "modal-atom": {
    title: "IT Technician & Support @ Atom Computers",
    tag: "Work Experience · 1 yr 9 mos · Tirana, Albania",
    image: "assets/card_atom.jpg",
    desc: "Held two progressive technical roles at Atom Computers:\n\n• Information Technology Technician (Jun 2024 – Jun 2025): Focused toward IT infrastructure, assisting in the implementation of software and infrastructure projects. Handled Windows Server and Linux Server installation and configuration, including using Docker for application containerization, deploying NAS systems, and managing Endpoint Security.\n\n• IT Support Technician (Oct 2023 – Jun 2024): Provided remote and on-site technical support to B2B and B2C clients, troubleshooting issues across PC hardware, printers, and network devices. Responsible for assembling and configuring PCs, for both hardware components and software to meet specific customer requests and requirements.",
    tech: ["Windows Server", "Linux Server", "Docker", "NAS Systems", "Endpoint Security", "B2B & B2C Support", "PC Assembly", "Hardware Diagnostics"],
    links: [
      { text: "View on LinkedIn", url: "https://www.linkedin.com/in/muhamedtereziu/" }
    ]
  },
  "modal-assembly": {
    title: "Custom PC Assembly & Workstation Builds",
    tag: "Specialized Service & Capability",
    image: "assets/card_pcbuild.jpg",
    desc: "Precision PC assembly, bespoke workstation builds, and tailored hardware configurations designed around specific client budgets and computing requirements. Includes component compatibility validation, thermal airflow optimization, cable management, BIOS tuning, driver installations, and stability stress-testing.",
    tech: ["Custom PC Assembly", "Component Sourcing", "Thermal Optimization", "Cable Management", "BIOS Tuning", "Stress Testing"],
    links: [
      { text: "Request Custom PC Build", url: "#contact" }
    ]
  },
  "modal-epoka": {
    title: "Information Technology Studies @ Epoka University",
    tag: "Academic Foundation",
    image: "assets/technician_profile.jpg",
    desc: "Pursuing a Bachelor of Science in Information Technology at Epoka University in Tirana. Core coursework includes Computer Networks, Operating Systems, Systems Architecture, Database Management Systems, and Software Engineering.",
    tech: ["Epoka University", "Computer Networks", "Distributed Systems", "Algorithms", "Operating Systems"],
    links: [
      { text: "Connect on LinkedIn", url: "https://www.linkedin.com/in/muhamedtereziu/" }
    ]
  },
  "modal-network": {
    title: "Network Installation, Routing & Security",
    tag: "Core Service & Skill",
    image: "assets/card_network.jpg",
    desc: "Designing and deploying robust, high-performance local networks for homes, offices, and commercial sites. Expertise includes router and managed switch configuration, VLAN segmentation, firewall rules, QoS traffic prioritization, secure VPN tunnels, and structured Ethernet cabling.",
    tech: ["Managed Switches", "Routers & Firewalls", "VLANs & Subnets", "Wi-Fi Mesh", "VPN Tunnels", "PuTTY & SSH"],
    links: [
      { text: "Inquire About Networking", url: "#contact" }
    ]
  }
};

// ============================================================
// INITIAL STATES + ROTATION SETUP
// ============================================================
gsap.set("#nav", { opacity: 0, y: -20 });
gsap.set(".small-team .word > span", { y: "105%" });
gsap.set(".big-results .letter", { y: 80, opacity: 0 });
gsap.set("#subline", { opacity: 0, y: 20 });
gsap.set(".t-card", { opacity: 0 });
gsap.set(".stats-inner", { opacity: 0 });
gsap.set(".about-card", { opacity: 0, y: 40 });
gsap.set(".breakdown-card", { opacity: 0, y: 30 });
gsap.set(".timeline-item", { opacity: 0, y: 30 });
gsap.set(".skill-category", { opacity: 0, y: 30 });

// Apply each card's natural rotation as rest-state, starting off-screen
document.querySelectorAll(".card").forEach((card) => {
  const rot = parseFloat(card.dataset.rot) || 0;
  card.dataset.restRot = rot;
  gsap.set(card, { y: -800, rotation: rot + 25, opacity: 0, scale: 0.7 });
});

// ============================================================
// INTRO TIMELINE
// ============================================================
const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

intro
  .to("#nav", { opacity: 1, y: 0, duration: 0.8 }, 0.1)
  .to(
    ".small-team .word > span",
    {
      y: "0%",
      duration: 0.9,
      stagger: 0.08,
      ease: "power3.out"
    },
    0.25
  )
  .to(
    ".big-results .letter",
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.04,
      ease: "back.out(1.6)"
    },
    0.5
  )
  .to(
    ".card",
    {
      y: 0,
      opacity: 1,
      scale: 1,
      rotation: (i, el) => parseFloat(el.dataset.restRot) || 0,
      duration: 1.1,
      stagger: { each: 0.08, from: "center" },
      ease: "back.out(1.4)"
    },
    0.75
  )
  .to("#subline", { opacity: 1, y: 0, duration: 0.8 }, 1.5);

// ============================================================
// CONTINUOUS FLOAT ON HERO CARDS (DESKTOP ONLY)
// ============================================================
const isMobileDevice = () => window.innerWidth <= 768;

if (!isMobileDevice()) {
  document.querySelectorAll(".card").forEach((card, i) => {
    const rot = parseFloat(card.dataset.restRot) || 0;
    gsap.to(card, {
      y: `+=${8 + (i % 3) * 5}`,
      rotation: rot + (i % 2 === 0 ? 1.5 : -1.5),
      duration: 3 + (i % 4) * 0.5,
      delay: 1.8 + i * 0.1,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  });
}

// ============================================================
// MOUSE PARALLAX ON HERO CARDS (DESKTOP ONLY)
// ============================================================
const hero = document.querySelector(".hero");
let mx = 0,
  my = 0,
  tx = 0,
  ty = 0;

if (hero && !isMobileDevice()) {
  hero.addEventListener("mousemove", (e) => {
    const r = hero.getBoundingClientRect();
    mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    my = ((e.clientY - r.top) / r.height - 0.5) * 2;
  });

  hero.addEventListener("mouseleave", () => {
    mx = 0;
    my = 0;
  });

  function parallax() {
    if (!isMobileDevice()) {
      tx += (mx - tx) * 0.05;
      ty += (my - ty) * 0.05;
      document.querySelectorAll(".card").forEach((card) => {
        const d = parseFloat(card.dataset.depth) || 8;
        card.style.translate = `${tx * d}px ${ty * d * 0.5}px`;
      });
    }
    requestAnimationFrame(parallax);
  }
  parallax();
}

// ============================================================
// CARD HOVER 3D LIFT (HOVER CAPABLE DEVICES ONLY)
// ============================================================
if (window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(card, {
        rotateX: -py * 16,
        rotateY: px * 16,
        scale: 1.12,
        zIndex: 20,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 700,
        overwrite: "auto"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        zIndex: card.style.zIndex || "",
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
        overwrite: "auto"
      });
    });
  });
}

// ============================================================
// SCROLL: CARDS FAN OUT, BIG RESULTS SCALES UP
// ============================================================
ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  end: "bottom top",
  scrub: 0.8,
  onUpdate: (self) => {
    const p = self.progress;
    gsap.set(".big-results", { scale: 1 + 0.15 * p, opacity: 1 - 0.4 * p });
    gsap.set(".small-team", { y: -60 * p, opacity: 1 - p * 1.5 });
    
    if (window.innerWidth > 768) {
      const moves = [
        { x: -260, y: -40, rot: -25 }, // 1
        { x: -200, y: 20, rot: -18 },  // 2
        { x: -120, y: 80, rot: -10 },  // 3
        { x: -40, y: 120, rot: -4 },   // 4
        { x: 40, y: 120, rot: 4 },     // 5
        { x: 120, y: 80, rot: 12 },    // 6
        { x: 200, y: 20, rot: 22 },    // 7
        { x: 260, y: -40, rot: 28 }    // 8
      ];
      document.querySelectorAll(".card").forEach((card, i) => {
        const m = moves[i] || { x: 0, y: 0, rot: 0 };
        const rest = parseFloat(card.dataset.restRot) || 0;
        gsap.set(card, {
          x: m.x * p,
          y: m.y * p,
          rotation: rest + m.rot * p
        });
      });
    }
    gsap.set("#subline", { opacity: 1 - p * 2 });
  }
});

// ============================================================
// ABOUT SECTION REVEAL
// ============================================================
gsap.to(".about-card", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: { trigger: ".about-section", start: "top 80%" }
});

// ============================================================
// WHAT I OFFER / SERVICES GRID REVEAL ON SCROLL
// ============================================================
gsap.from(".team-head .eyebrow, .team-head h2, .team-head p", {
  opacity: 0,
  y: 30,
  duration: 0.9,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: { trigger: ".team-head", start: "top 80%" }
});

gsap.to(".t-card", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.08,
  ease: "power3.out",
  scrollTrigger: { trigger: ".team-grid", start: "top 80%" }
});

gsap.from(".t-card", {
  y: 80,
  scale: 0.92,
  rotation: (i) => (i % 2 === 0 ? -3 : 3),
  duration: 1,
  stagger: 0.08,
  ease: "back.out(1.3)",
  scrollTrigger: { trigger: ".team-grid", start: "top 80%" }
});

// ============================================================
// SERVICES BREAKDOWN CARDS REVEAL
// ============================================================
gsap.to(".breakdown-card", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.12,
  ease: "power3.out",
  scrollTrigger: { trigger: ".services-breakdown", start: "top 80%" }
});

// ============================================================
// EXPERIENCE TIMELINE REVEAL
// ============================================================
gsap.to(".timeline-item", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
  scrollTrigger: { trigger: ".experience-inner", start: "top 80%" }
});

// ============================================================
// SKILLS MATRIX REVEAL
// ============================================================
gsap.to(".skill-category", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: { trigger: ".skills-matrix", start: "top 82%" }
});

// ============================================================
// STATS REVEAL + COUNTERS
// ============================================================
gsap.to(".stats-inner", {
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: { trigger: ".stats", start: "top 80%" }
});

gsap.from(".stats-inner", {
  y: 60,
  scale: 0.97,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: { trigger: ".stats", start: "top 80%" }
});

ScrollTrigger.create({
  trigger: ".stats",
  start: "top 75%",
  onEnter: () => {
    document.querySelectorAll(".stat-block .num").forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const span = el.querySelector("span");
      gsap.to(
        { v: 0 },
        {
          v: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            span.textContent = Math.floor(this.targets()[0].v).toLocaleString();
          }
        }
      );
    });
  },
  once: true
});

// ============================================================
// BIG RESULTS LETTER HOVER INTERACTION
// ============================================================
const resultsWrap = document.querySelector(".big-results-wrap");
if (resultsWrap) {
  resultsWrap.addEventListener("mouseenter", () => {
    gsap.to(".big-results .letter", {
      y: -8,
      duration: 0.5,
      stagger: 0.03,
      ease: "back.out(1.6)"
    });
  });
  resultsWrap.addEventListener("mouseleave", () => {
    gsap.to(".big-results .letter", {
      y: 0,
      duration: 0.6,
      stagger: 0.03,
      ease: "elastic.out(1, 0.6)"
    });
  });
}

// ============================================================
// INTERACTIVE MODAL HANDLING
// ============================================================
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalSlot = document.getElementById("modalContentSlot");

function openModal(key) {
  const data = projectDetails[key];
  if (!data) return;

  const techBadges = data.tech
    .map((t) => `<span class="tech-pill highlight">${t}</span>`)
    .join("");

  const linkButtons = data.links
    .map(
      (l) => `
      <a href="${l.url}" ${l.url.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} class="btn-primary">
        ${l.text}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7 7 17 7 17 17"/>
        </svg>
      </a>`
    )
    .join("");

  const formattedDesc = data.desc
    .split("\n\n")
    .map((p) => `<p class="modal-desc">${p}</p>`)
    .join("");

  modalSlot.innerHTML = `
    <img src="${data.image}" alt="${data.title}" class="modal-preview-img" />
    <span class="modal-meta-tag">${data.tag}</span>
    <h2 class="modal-title">${data.title}</h2>
    ${formattedDesc}
    <div class="modal-tech-list">
      ${techBadges}
    </div>
    <div class="modal-btn-row">
      ${linkButtons}
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Bind modal open on grid cards & hero cards
document.querySelectorAll(".t-card").forEach((card) => {
  card.addEventListener("click", () => {
    const modalKey = card.dataset.modal;
    if (modalKey) openModal(modalKey);
  });
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const cardId = card.dataset.cardId;
    if (cardId && projectDetails[cardId]) {
      openModal(cardId);
    }
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// ============================================================
// MOBILE NAVIGATION DRAWER
// ============================================================
const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".m-link");

function toggleMobileMenu() {
  if (!mobileMenu) return;
  const isOpen = mobileMenu.classList.contains("active");
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  if (!mobileMenu || !mobileToggle) return;
  mobileMenu.classList.add("active");
  mobileToggle.classList.add("active");
  mobileToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  if (!mobileMenu || !mobileToggle) return;
  mobileMenu.classList.remove("active");
  mobileToggle.classList.remove("active");
  mobileToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

if (mobileToggle) {
  mobileToggle.addEventListener("click", toggleMobileMenu);
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("active")) {
    closeMobileMenu();
  }
});
