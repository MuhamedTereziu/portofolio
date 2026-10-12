/**
 * MUHAMED TEREZIU — IT SYSTEMS SPECIALIST PORTFOLIO
 * Core Interactive Client Script
 * Zero external dependencies, pure high-performance Vanilla JS.
 */

document.addEventListener("DOMContentLoaded", () => {
  // ============================================================
  // 1. TELEMETRY CLOCK
  // ============================================================
  const clockEl = document.getElementById("liveClock");
  function updateTelemetryClock() {
    if (!clockEl) return;
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, "0");
    const utcMins = String(now.getUTCMinutes()).padStart(2, "0");
    const utcSecs = String(now.getUTCSeconds()).padStart(2, "0");
    clockEl.textContent = `${utcHours}:${utcMins}:${utcSecs} UTC`;
  }
  setInterval(updateTelemetryClock, 1000);
  updateTelemetryClock();

  // ============================================================
  // 2. THEME ENGINE (DARK / LIGHT WITH SYSTEM SYNC & PERSISTENCE)
  // ============================================================
  const themeToggle = document.getElementById("themeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("m_portfolio_theme", theme);
  }

  const savedTheme = localStorage.getItem("m_portfolio_theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (!prefersDark.matches) {
    applyTheme("light");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  // ============================================================
  // 3. TOAST NOTIFICATION HELPER
  // ============================================================
  const toast = document.getElementById("toastAlert");
  let toastTimer;
  function triggerToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  }

  // Clipboard copy email
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = document.getElementById("emailVal")?.textContent?.trim() || "m@1234.al";
      navigator.clipboard.writeText(email).then(() => {
        triggerToast("Email copied to clipboard: " + email);
      }).catch(() => {
        triggerToast("Copied: " + email);
      });
    });
  }

  // ============================================================
  // 4. INTERACTIVE SYSTEMS TERMINAL
  // ============================================================
  const terminalOutput = document.getElementById("terminalOutput");
  const terminalInput = document.getElementById("terminalInput");
  const terminalChips = document.querySelectorAll(".chip-cmd");

  const terminalResponses = {
    whoami: "Muhamed Tereziu (Medi) — IT Systems Specialist & Infrastructure Technician based in Tirana, Albania. Currently IT Help Desk @ Titan Albania; formerly IT Technician @ Atom Computers. B.Sc. IT @ Epoka University.",
    services: "Core Capabilities:\n1. Smart Home Automation (Home Assistant, Zigbee, IoT VLANs)\n2. Small Business IT (Networks, TrueNAS Storage, Multi-AP Wi-Fi)\n3. Software Maintenance (Windows/Linux Server, Docker, Endpoint Protection)\n4. Hardware Diagnostics & Precision Repairs\n5. Network Security & Routing (VLANs, Firewalls, WireGuard)\n6. Bespoke PC Assembly & High-Performance Workstations",
    experience: "Track Record:\n• Titan Albania (Mar 2026 – Present): IT Help Desk, Enterprise Systems, CCTV, Microsoft Power Platform Automation, GDPR\n• Atom Computers (Jun 2024 – Jun 2025): IT Technician (Windows/Linux Servers, Docker, TrueNAS ZFS, Endpoint Security)\n• Atom Computers (Oct 2023 – Jun 2024): IT Support Technician (PC Assembly, B2B/B2C Support)\n• Epoka University: B.Sc. Information Technology",
    arsenal: "Key Arsenal: Windows Server, Rocky Linux, Ubuntu, Active Directory, TrueNAS ZFS, Docker, Home Assistant, WireGuard VPN, Managed Switches, PowerShell, Bash, Python, Hardware Diagnostics.",
    contact: "Direct Outpost:\n• Email: m@1234.al\n• Domain: 1234.al\n• LinkedIn: linkedin.com/in/muhamedtereziu\n• GitHub: github.com/MuhamedTereziu\n• Instagram: @mterez1u",
    status: "Telemetry Status: ALL SYSTEMS OPERATIONAL (HTTP/3, TLS 1.3, SLA: 100%, Node: Tirana)",
    help: "Supported commands: whoami, services, experience, arsenal, contact, status, clear"
  };

  function executeTerminalCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      terminalOutput.innerHTML = `
        <p class="term-line"><span class="term-prompt">visitor@1234.al:~$</span> clear</p>
        <p class="term-response dim">Terminal cleared. Ready for input.</p>
      `;
      return;
    }

    const commandEntry = document.createElement("p");
    commandEntry.className = "term-line";
    commandEntry.innerHTML = `<span class="term-prompt">visitor@1234.al:~$</span> ${cmd}`;
    terminalOutput.appendChild(commandEntry);

    const responseEntry = document.createElement("p");
    responseEntry.className = "term-response";

    if (terminalResponses[cmd]) {
      responseEntry.textContent = terminalResponses[cmd];
    } else {
      responseEntry.innerHTML = `Command not recognized: '<span style="color:#ef4444">${cmd}</span>'. Type <strong>help</strong> or use the interactive command chips.`;
    }

    terminalOutput.appendChild(responseEntry);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const command = chip.dataset.cmd;
      if (terminalInput) terminalInput.value = command;
      executeTerminalCommand(command);
    });
  });

  if (terminalInput) {
    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        executeTerminalCommand(terminalInput.value);
        terminalInput.value = "";
      }
    });
  }

  // ============================================================
  // 5. SPECIFICATIONS DETAIL MODAL SYSTEM
  // ============================================================
  const modal = document.getElementById("specModal");
  const modalContentSlot = document.getElementById("modalContentSlot");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  const modalData = {
    "modal-smarthome": {
      title: "Smart Home Solutions & IoT Automation",
      tag: "Residential & IoT Architecture",
      image: "assets/card_smarthome.jpg",
      desc: "Complete planning, installation, and optimization of reliable smart home ecosystems. I integrate Home Assistant, Apple HomeKit, and Google Home into an unified local control plane. Every deployment includes isolated Wi-Fi and VLAN subnets for IoT gadgets, ensuring responsive smart lighting, automated climate, sensors, and CCTV video feeds remain isolated from your personal devices.",
      tech: ["Home Assistant", "Matter & Zigbee", "Smart CCTV", "VLAN Isolation", "Smart Relays", "Apple Home", "Automated Climate"],
      action: { text: "Inquire About Smart Home Setup", url: "#contact" }
    },
    "modal-smallbiz": {
      title: "Small Business IT Infrastructure Solutions",
      tag: "Commercial & Business Solutions",
      image: "assets/card_smallbiz.jpg",
      desc: "Turnkey IT infrastructure designed to eliminate operational downtime for offices, medical clinics, retail environments, and corporate teams. Services encompass professional network router/switch deployment, multi-AP commercial Wi-Fi coverage, centralized TrueNAS network storage, automated cloud & off-site backups, and employee workstation fleet rollouts.",
      tech: ["Office Networks", "Commercial Wi-Fi", "TrueNAS Storage", "Automated Backups", "Workstation Fleets", "VPN Tunnels"],
      action: { text: "Request Business IT Consultation", url: "#contact" }
    },
    "modal-software": {
      title: "Software Installation, Server Admin & Maintenance",
      tag: "OS & Server Systems",
      image: "assets/card_software.jpg",
      desc: "Certified installations and proactive maintenance across Windows Server, Linux (Rocky, Ubuntu, Debian), and desktop operating systems. Routine patch management, driver optimization, endpoint security deployments, application containerization with Docker, and rapid remote troubleshooting.",
      tech: ["Windows Server", "Rocky Linux", "Docker", "Endpoint Security", "Patch Management", "Remote Assistance"],
      action: { text: "Schedule System Maintenance", url: "#contact" }
    },
    "modal-repair": {
      title: "Hardware Diagnostics & Precision Component Repairs",
      tag: "Component-Level Hardware Servicing",
      image: "assets/card_repair.jpg",
      desc: "Methodical diagnostic and hardware repair protocols for desktops, laptops, and server hardware. Resolving thermal throttling, boot loops, power delivery faults, and component damage. Services include deep thermal cleaning, high-performance thermal paste replacement, NVMe/SATA SSD upgrades, RAM expansions, and hard drive data recovery.",
      tech: ["Component Diagnostics", "Thermal Repasting", "SSD / RAM Upgrades", "Data Recovery", "Board Inspection", "PSU Testing"],
      action: { text: "Book Hardware Diagnostics", url: "#contact" }
    },
    "modal-network": {
      title: "Network Architecture, Routing & Cyber Security",
      tag: "Infrastructure & Security",
      image: "assets/card_network.jpg",
      desc: "Architecting reliable, high-bandwidth local area networks for homes and enterprises. Includes managed switch setup, router gateway configuration, VLAN segmentation, firewall access control lists (ACLs), QoS bandwidth shaping, secure remote VPN tunnels (WireGuard/OpenVPN), and patch-panel structured cabling.",
      tech: ["Managed Switches", "Gateway Firewalls", "VLANs", "WireGuard VPN", "Wi-Fi Mesh", "Structured Cabling"],
      action: { text: "Inquire About Networking", url: "#contact" }
    },
    "modal-assembly": {
      title: "Custom PC Assembly & High-Performance Workstations",
      tag: "Precision Hardware Assembly",
      image: "assets/card_pcbuild.jpg",
      desc: "Bespoke workstation builds tailored for software development, video rendering, 3D modeling, and demanding computing tasks. Includes hardware compatibility analysis, thermal airflow simulation, immaculate cable routing, BIOS memory tuning (XMP/EXPO), driver setup, and intensive multi-hour stability stress testing.",
      tech: ["Custom Workstation Assembly", "Airflow Optimization", "Cable Management", "BIOS Tuning", "Stability Stress Tests"],
      action: { text: "Commission a Custom Build", url: "#contact" }
    },
    "modal-titan": {
      title: "Information Technology Help Desk @ Titan Albania",
      tag: "Current Role · Tirana, Albania",
      image: "assets/card_titan.jpg",
      desc: "Delivering end-user IT support and administering enterprise infrastructure, corporate networks, and workstation hardware. Overseeing employee onboarding/offboarding, IT asset management, CCTV/access control security, and driving automated enterprise processes using the Microsoft Power Platform.",
      tech: ["Windows Server", "Enterprise IT Infrastructure", "CCTV & Access Controls", "Microsoft Power Platform", "Asset Management", "GDPR Compliance"],
      action: { text: "View LinkedIn Experience", url: "https://www.linkedin.com/in/muhamedtereziu/" }
    },
    "modal-atom": {
      title: "IT Technician & Support @ Atom Computers",
      tag: "Work Experience · 1 yr 9 mos · Tirana, Albania",
      image: "assets/card_atom.jpg",
      desc: "Held two successive technical roles at Atom Computers:\n\n• IT Technician (Jun 2024 – Jun 2025): Deployed Windows and Linux servers, containerized workloads with Docker, configured TrueNAS ZFS storage systems, and managed endpoint protection.\n\n• IT Support Technician (Oct 2023 – Jun 2024): Remote and on-site support for corporate B2B and retail B2C clients, troubleshooting hardware faults and assembling custom computer systems.",
      tech: ["Windows Server", "Linux Server", "Docker", "TrueNAS", "Endpoint Security", "PC Assembly", "Hardware Diagnostics"],
      action: { text: "View LinkedIn Details", url: "https://www.linkedin.com/in/muhamedtereziu/" }
    },
    "modal-epoka": {
      title: "B.Sc. in Information Technology @ Epoka University",
      tag: "Academic Technical Degree",
      image: "assets/technician_profile.jpg",
      desc: "Undergraduate degree focusing on Computer Networks, Operating Systems, Database Management Systems, Computer Architecture, Distributed Systems, and Software Engineering at Epoka University in Tirana, Albania.",
      tech: ["Computer Networks", "Operating Systems", "Databases", "Distributed Systems", "Algorithms"],
      action: { text: "Connect on LinkedIn", url: "https://www.linkedin.com/in/muhamedtereziu/" }
    }
  };

  function openSpecModal(key) {
    const item = modalData[key];
    if (!item || !modalContentSlot || !modal) return;

    const techPills = item.tech
      .map((t) => `<span class="tech-pill highlight">${t}</span>`)
      .join("");

    const isExternal = item.action.url.startsWith("http");

    modalContentSlot.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="modal-img-preview" />
      <span class="modal-tag">${item.tag}</span>
      <h2 class="modal-title">${item.title}</h2>
      <p class="modal-description">${item.desc.replace(/\n\n/g, "</p><p class='modal-description'>")}</p>
      <div class="modal-tech-header">Technologies & Standards</div>
      <div class="modal-tech-chips">${techPills}</div>
      <div class="modal-cta-row">
        <a href="${item.action.url}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""} class="btn btn-primary modal-action-btn">
          <span>${item.action.text}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    `;

    // Modal action button click handler (smooth scroll if hash)
    const actionBtn = modalContentSlot.querySelector(".modal-action-btn");
    if (actionBtn && !isExternal) {
      actionBtn.addEventListener("click", () => {
        closeSpecModal();
      });
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeSpecModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Bind clicks to all service cards and hero pills
  document.querySelectorAll("[data-modal]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalKey = trigger.dataset.modal;
      if (modalKey) openSpecModal(modalKey);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeSpecModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeSpecModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) {
      closeSpecModal();
    }
  });

  // ============================================================
  // 6. TECHNICAL ARSENAL FILTER
  // ============================================================
  const filterBtns = document.querySelectorAll(".filter-btn");
  const skillCards = document.querySelectorAll(".skill-group-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      skillCards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block";
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
        }
      });
    });
  });

  // ============================================================
  // 7. INQUIRY BUILDER / SCOPE TRANSFER TO CONTACT FORM
  // ============================================================
  const calcCheckboxes = document.querySelectorAll(".calc-cb");
  const calcCountEl = document.getElementById("calcSummaryCount");
  const applyToFormBtn = document.getElementById("applyToFormBtn");
  const formMessage = document.getElementById("formMessage");
  const formService = document.getElementById("formService");

  function updateCalcCount() {
    const selected = document.querySelectorAll(".calc-cb:checked");
    if (calcCountEl) {
      calcCountEl.textContent = `${selected.length} service${selected.length === 1 ? "" : "s"} selected`;
    }
  }

  calcCheckboxes.forEach((cb) => {
    cb.addEventListener("change", updateCalcCount);
  });

  if (applyToFormBtn) {
    applyToFormBtn.addEventListener("click", () => {
      const selected = Array.from(document.querySelectorAll(".calc-cb:checked")).map(
        (cb) => "• " + cb.value
      );

      if (selected.length === 0) {
        triggerToast("Please select at least one service above!");
        return;
      }

      const generatedText =
        "Hello Muhamed,\n\nI would like to inquire regarding the following requirements for my project/business:\n\n" +
        selected.join("\n") +
        "\n\nPlease let me know your availability for a technical discussion or on-site evaluation.\n\nBest regards,";

      if (formMessage) formMessage.value = generatedText;

      // Automatically align service select if possible
      if (formService) {
        if (selected.some((s) => s.includes("Smart Home"))) {
          formService.value = "smart-home";
        } else if (selected.some((s) => s.includes("Business Network"))) {
          formService.value = "small-biz";
        } else if (selected.some((s) => s.includes("NAS Storage"))) {
          formService.value = "storage-nas";
        } else if (selected.some((s) => s.includes("Hardware Diagnostics"))) {
          formService.value = "repair-hardware";
        } else if (selected.some((s) => s.includes("Workstation"))) {
          formService.value = "custom-workstation";
        }
      }

      // Smooth scroll to form
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }

      triggerToast("Scope transferred to contact form below!");
    });
  }

  // ============================================================
  // 8. MOBILE DRAWER NAVIGATION
  // ============================================================
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  function toggleMobileDrawer() {
    if (!mobileDrawer) return;
    const isOpen = mobileDrawer.classList.contains("open");
    if (isOpen) {
      mobileDrawer.classList.remove("open");
      document.body.style.overflow = "";
    } else {
      mobileDrawer.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", toggleMobileDrawer);
  }

  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer?.classList.contains("open")) {
      mobileDrawer.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
});
