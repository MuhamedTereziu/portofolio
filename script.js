/**
 * Muhamed Tereziu Portfolio
 * Clean, lightweight, zero-dependency client script.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("m_portfolio_theme", theme);
  }

  const savedTheme = localStorage.getItem("m_portfolio_theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (!prefersDark.matches) {
    setTheme("light");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  // Mobile Navigation
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const mLinks = document.querySelectorAll(".m-link");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });

    mLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
      });
    });
  }

  // Toast Notification
  const toast = document.getElementById("toast");
  let toastTimer;
  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

  // Copy Email Button
  const copyBtn = document.getElementById("copyBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("m@1234.al").then(() => {
        showToast("Email copied: m@1234.al");
      }).catch(() => {
        showToast("Copied: m@1234.al");
      });
    });
  }

  // Service Details Modal
  const modal = document.getElementById("detailModal");
  const modalClose = document.getElementById("modalClose");
  const modalBody = document.getElementById("modalBody");

  const serviceData = {
    "modal-smarthome": {
      title: "Smart Home Automation",
      image: "assets/card_smarthome.jpg",
      desc: "Complete planning and installation of smart home systems. I connect and configure Home Assistant, Apple Home, and Google Home to unify lighting, thermostats, cameras, and sensors into a single local dashboard. Each setup includes isolated Wi-Fi subnets for IoT devices to ensure reliability and network security."
    },
    "modal-smallbiz": {
      title: "Small Business IT",
      image: "assets/card_smallbiz.jpg",
      desc: "End-to-end office technology setup for businesses, clinics, and workspaces. Services include multi-AP Wi-Fi installation, router and switch configuration, TrueNAS storage systems, automated daily data backups, and employee workstation deployment."
    },
    "modal-software": {
      title: "Software & OS Maintenance",
      image: "assets/card_software.jpg",
      desc: "Clean installations and maintenance for Windows and Linux systems (Rocky Linux, Ubuntu, Debian). Includes driver updates, antivirus and endpoint security setup, patch management, and fast remote troubleshooting."
    },
    "modal-repair": {
      title: "Hardware Diagnostics & Repairs",
      image: "assets/card_repair.jpg",
      desc: "Troubleshooting desktops and laptops for hardware faults, boot issues, and overheating. Includes physical cleaning, thermal paste replacement, high-speed SSD and RAM upgrades, power supply replacement, and data recovery."
    },
    "modal-network": {
      title: "Network Setup & Security",
      image: "assets/card_network.jpg",
      desc: "Setup and configuration of managed switches, commercial routers, and access points. Services include VLAN segmentation to isolate guest and IoT traffic, firewall rules, and VPN setup (WireGuard / OpenVPN) for secure remote access."
    },
    "modal-assembly": {
      title: "Custom PC Builds",
      image: "assets/card_pcbuild.jpg",
      desc: "Assembling custom desktop PCs tailored to specific budgets and requirements (workstations, development, creative tasks, or gaming). Includes component compatibility checks, airflow tuning, clean cable routing, BIOS setup, and multi-hour stress testing."
    }
  };

  function openModal(key) {
    const item = serviceData[key];
    if (!item || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="modal-img" />
      <h3 class="modal-title">${item.title}</h3>
      <p class="modal-desc">${item.desc}</p>
      <a href="#contact" class="btn btn-primary" onclick="document.getElementById('detailModal').classList.remove('open')">
        Get in touch about this
      </a>
    `;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-modal]").forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.modal;
      if (key) openModal(key);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) {
      closeModal();
    }
  });
});
