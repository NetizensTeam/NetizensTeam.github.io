const consoleBtn = document.getElementById('consoleBtn');
const consoleTerminal = document.getElementById('consoleTerminal');
const closeConsole = document.getElementById('closeConsole');
const consoleInput = document.getElementById('consoleInput');
const consoleOutput = document.getElementById('consoleOutput');
const typewriterElement = document.getElementById('typewriter');

// Team Data
const teamMembers = [
  {
    name: "0xMahmoud",
    role: "Head of Cyber Community",
    bio: "balalalalala",
    social: [
      { icon: "fab fa-linkedin", link: "linkedin.com/in/0xd-mahmoud/", title: "LinkedIn" },
      { icon: "fab fa-facebook", link: "https://www.facebook.com/eng.psychoai/", title: "Facebook" },
      { icon: "fab fa-whatsapp", link: "https://wa.me/+201027256960", title: "Whatsapp" },
      { icon: "fas fa-flag", link: "https://trychackme.com/p/0Xd", title: "TryHackMe" }
    ],
    image: "https://i.ibb.co/TMKDNSWX/IMG-20250214-180353.jpg"
  },
  {
    name: "Shams El-deen",
    role: "Founder of Netizens",
    bio: "Blalalalalala",
    social: [
      { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/shvms-eldeen", title: "LinkedIn" },
      { icon: "fab fa-facebook", link: "https://m.facebook.com/itzshvms/", title: "Facebook" },
      { icon: "fab fa-instagram", link: "https://www.instagram.com/shvms_eldeen/", title: "Instagram" },
      { icon: "fab fa-x", link: "https://x.com/shvms_eldeen", title: "X (Twitter)" },
      { icon: "fab fa-whatsapp", link: "http://wa.me/+201121132463", title: "Whatsapp" }
    ],
    image: "https://i.ibb.co/v4sTvg0D/Whats-App-Image-2025-07-03-at-4-03-54-PM.jpg",
    bgColor: "#6c0ce7"
  },
  {
    name: "tessst",
    role: "CTF Captain",
    bio: "Reverse engineering and exploit development expert",
    social: [
      { icon: "fab fa-github", link: "#" }
    ],
    image: null,
    bgColor: "#00f0ff"
  }
];

// Social Config
const socialConfig = {
  platforms: {
    github: {
      icon: "fab fa-github",
      color: "#181717",
      title: "GitHub",
      baseUrl: "https://github.com/"
    },
    twitter: {
      icon: "fab fa-x",
      color: "#000000",
      title: "X (Twitter)",
      baseUrl: "https://twitter.com/"
    },
    instagram: {
      icon: "fab fa-instagram",
      color: "#E4405F",
      title: "Instagram",
      baseUrl: "https://instagram.com/"
    },
    linkedin: {
      icon: "fab fa-linkedin",
      color: "#0077B5",
      title: "LinkedIn",
      baseUrl: "https://linkedin.com/in/"
    },
    tryhackme: {
      icon: "fas fa-flag",
      color: "#1DB954",
      title: "TryHackMe",
      baseUrl: "https://tryhackme.com/p/"
    },
    facebook: {
      icon: "fab fa-facebook",
      color: "#1877F2",
      title: "Facebook",
      baseUrl: "https://facebook.com/"
    },
    discord: {
      icon: "fab fa-discord",
      color: "#1877F2",
      title: "discord",
      baseUrl: "https://discord.gg/"
    },
    whatsapp: {
      icon: "fab fa-whatsapp",
      color: "#1877F2",
      title: "whatsapp",
      baseUrl: "https://wa.me/"
    }
  },
  usernames: {
    github: "netizensteam",
    twitter: "netizensteam",
    instagram: "netizensteam",
    linkedin: "company/netizensteam",
    tryhackme: "netizens",
    facebook: "teamnetiznes",
    discord: "qtEMjdWrjW",
    whatsapp: "+201554804513"
  }
};

const projects = [
  {
    title: "Cyber-Circle",
    description: "Community learning hub for hacking challenges",
    tag: "tools",
    stars: 245,
    forks: 78,
    link: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Red-Team-Labs",
    description: "Advanced red teaming simulations",
    tag: "ctf",
    stars: 189,
    forks: 42,
    link: "#",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const skills = [
  { name: "Penetration Testing", percent: 95 },
  { name: "Web Security", percent: 90 },
  { name: "Network Security", percent: 85 },
  { name: "Malware Analysis", percent: 80 },
  { name: "Cloud Security", percent: 75 },
  { name: "Secure Coding", percent: 90 }
];

const consoleCommands = {
  help: "Available commands: help, about, team, projects, clear",
  about: "Netizens Security Team - Student-led cybersecurity community",
  team: "Our team consists of security experts with diverse specializations",
  projects: "We maintain open source security tools and research projects",
  clear: function() { consoleOutput.innerHTML = ''; },
  status: "System status: All services operational",
  contact: "Email us at: contact@netizens.sec"
};

// Console functionality
consoleBtn.addEventListener('click', () => {
  consoleTerminal.classList.toggle('active');
});

closeConsole.addEventListener('click', () => {
  consoleTerminal.classList.remove('active');
});

consoleInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const command = consoleInput.value.toLowerCase();
    consoleOutput.innerHTML += `<p>> ${command}</p>`;
    
    if (consoleCommands[command]) {
      if (typeof consoleCommands[command] === 'function') {
        consoleCommands[command]();
      } else {
        consoleOutput.innerHTML += `<p>${consoleCommands[command]}</p>`;
      }
    } else {
      consoleOutput.innerHTML += `<p>Command not found. Type 'help' for available commands.</p>`;
    }
    
    consoleInput.value = '';
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }
});

// Attack simulation
setInterval(() => {
  const attacks = [
    "> [ALERT] Brute force attempt detected: 192.168.1.105 → SSH port 22",
    "> [THREAT] SQL injection blocked: /admin/login.php",
    "> [SCAN] Port sweep detected from 45.227.253.109 (Russia)"
  ];
  consoleOutput.innerHTML += `<p class="attack-log">${attacks[Math.floor(Math.random()*attacks.length)]}</p>`;
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}, 5000);

// Typewriter effect
function hackerTyper() {
  const codeSnippets = [
    "root@kali:~# nmap -sV -T4 192.168.1.0/24",
    ">>> sqlmap -u 'example.com?id=1' --dbs",
    "$ hydra -l admin -P rockyou.txt ssh://target.com"
  ];
  
  let snippetIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentText = codeSnippets[snippetIndex];
    
    if (isDeleting) {
      typewriterElement.textContent = currentText.substring(0, charIndex-1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentText.substring(0, charIndex+1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      snippetIndex = (snippetIndex + 1) % codeSnippets.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  
  type();
}

// Projects loader
function loadProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-tag', project.tag.toLowerCase());
    
    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <div class="project-info">
        <span class="project-tag">${project.tag}</span>
        <h3>${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-stats">
          <div class="project-stat">
            <i class="fas fa-star"></i>
            <span>${project.stars}</span>
          </div>
          <div class="project-stat">
            <i class="fas fa-code-branch"></i>
            <span>${project.forks}</span>
          </div>
        </div>
        <a href="${project.link}" class="project-link" target="_blank">
          View Project <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
  
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-tab');
      const projectCards = document.querySelectorAll('.project-card');
      
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-tag') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Skills loader
function loadSkills() {
  const skillBars = document.getElementById('skillBars');
  
  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    
    skillItem.innerHTML = `
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-percent">${skill.percent}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 0"></div>
      </div>
    `;
    
    skillBars.appendChild(skillItem);
  });
  
  setTimeout(() => {
    document.querySelectorAll('.skill-progress').forEach(bar => {
      const percent = bar.parentElement.previousElementSibling.querySelector('.skill-percent').textContent;
      bar.style.width = percent;
    });
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletterForm');
  const messageDiv = document.getElementById('message');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          messageDiv.style.color = 'green';
          messageDiv.textContent = 'Thank you for subscribing!';
          form.reset();
        } else {
          messageDiv.style.color = 'red';
          messageDiv.textContent = 'Oops! There was a problem. Please try again.';
        }
      } catch (error) {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Oops! There was a problem. Please try again.';
      }
    });
  }
});


// Skills chart
function initSkillsChart() {
  const ctx = document.getElementById('skillsChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: skills.map(skill => skill.name),
      datasets: [{
        label: 'Team Skills',
        data: skills.map(skill => skill.percent),
        backgroundColor: 'rgba(108, 12, 231, 0.2)',
        borderColor: 'rgba(108, 12, 231, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(108, 12, 231, 1)',
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(108, 12, 231, 1)',
        pointHoverBorderColor: '#fff',
        pointHitRadius: 10,
        pointBorderWidth: 2
      }]
    },
    options: {
      scales: {
        r: {
          angleLines: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          suggestedMin: 0,
          suggestedMax: 100,
          pointLabels: {
            color: 'rgba(255, 255, 255, 0.8)'
          },
          ticks: {
            backdropColor: 'transparent',
            color: 'rgba(255, 255, 255, 0.5)'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'rgba(255, 255, 255, 0.8)'
          }
        }
      }
    }
  });
}


// Particle Animation
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = Math.floor(window.innerWidth / 10);
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(108, 12, 231, 0.5)';
      ctx.fill();
      
      particles.forEach(p2 => {
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(108, 12, 231, ${1 - distance/100})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Hexagon Interactivity
function initHexagonInteractivity() {
  const hexagons = document.querySelectorAll('.hexagon');
  
  hexagons.forEach(hex => {
    hex.addEventListener('mouseenter', () => {
      hex.style.opacity = '0.9';
      hex.style.transform = `${hex.style.transform} scale(1.1)`;
    });
    
    hex.addEventListener('mouseleave', () => {
      hex.style.opacity = '';
      hex.style.transform = `rotate(var(--rot)) scale(var(--scale))`;
    });
  });
}

// Team loader
function initTeam() {
  const teamGrid = document.getElementById('teamGrid');

  teamMembers.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.className = 'member-card';

    const profileImage = member.image
      ? `<img src="${member.image}" alt="${member.name}" class="member-image">`
      : `<div class="member-image" style="background-color: ${member.bgColor || 'var(--primary)'}; color: white; display: flex; align-items: center; justify-content: center;">
           <i class="fas fa-user" style="font-size: 3rem;"></i>
         </div>`;

    const socialIcons = member.social.map(s => {
      if (s.link) {
        return `<a href="${s.link}" target="_blank" title="${s.title || ''}" style="${s.color ? `color: ${s.color}` : ''}">
                  <i class="${s.icon}"></i>
                </a>`;
      } else {
        return `<span title="${s.title || ''}" style="${s.color ? `color: ${s.color}` : ''}">
                  <i class="${s.icon}"></i>
                </span>`;
      }
    }).join('');

    memberCard.innerHTML = `
      ${profileImage}
      <h3>${member.name}</h3>
      <p class="member-role">${member.role}</p>
      <p class="member-bio">${member.bio}</p>
      <div class="member-social">
        ${socialIcons}
      </div>
    `;

    teamGrid.appendChild(memberCard);
  });
}

function setupFormValidation() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeokdoda", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("✅ Thank you for your message! We'll get back to you soon.");
        form.reset();
      } else {
        alert("❌ There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("⚠️ Error occurred while submitting the form.");
    }
  });
}


// Scroll Animations
function setupScrollAnimations() {
  const fadeElements = document.querySelectorAll('.structure-card, .circle-card, .member-card, .project-card, .skill-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeIn 0.5s ease forwards`;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// Social Icons Generator
function generateSocialIcons(containerClass, platforms = []) {
  const container = document.querySelector(containerClass);
  if (!container) return;

  let html = '';
  platforms.forEach(platform => {
    const config = socialConfig.platforms[platform];
    const username = socialConfig.usernames[platform];
    
    if (config && username) {
      html += `
        <a href="${config.baseUrl}${username}" 
           target="_blank" 
           rel="noopener noreferrer"
           title="${config.title}"
           style="--social-color: ${config.color}">
          <i class="${config.icon}"></i>
        </a>
      `;
    }
  });

  container.innerHTML = html;
}

// Glass effect support check
function checkGlassSupport() {
  const nav = document.querySelector('.glass-nav');
  
  const testEl = document.createElement('div');
  testEl.style.backdropFilter = 'blur(1px)';
  document.body.appendChild(testEl);
  const style = window.getComputedStyle(testEl);
  const hasSupport = style.backdropFilter.includes('blur') || 
                    style.webkitBackdropFilter.includes('blur');
  document.body.removeChild(testEl);
  
  if (!hasSupport) {
    nav.style.background = 'rgba(15, 15, 35, 0.95)';
    nav.style.backdropFilter = 'none';
    nav.style.webkitBackdropFilter = 'none';
  }
}
  document.addEventListener("DOMContentLoaded", function () {
    const ctfEndDate = new Date("2025-03-10T12:00:00"); 

    function updateCTFTimer() {
      const now = new Date();
      const diff = ctfEndDate - now;

      if (diff <= 0) {
        clearInterval(timerInterval);
        document.getElementById("countdownBox").style.display = "none";
        document.getElementById("timer").innerHTML = "🚩 CTF is LIVE! Good luck!";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    const timerInterval = setInterval(updateCTFTimer, 1000);
    updateCTFTimer();
  });
// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
  initParticles();
  initTeam();
  setupFormValidation();
  checkGlassSupport();
  initHexagonInteractivity();
  hackerTyper();
  loadProjects();
  loadSkills();
  initSkillsChart();

  setupScrollAnimations();

  
  // Generate social icons
  generateSocialIcons('.footer .social-links', ['instagram', 'facebook', 'twitter', 'linkedin', 'discord']);
  generateSocialIcons('.other-social-container', ['instagram', 'facebook', 'twitter', 'linkedin', 'discord']);

  // Mobile menu toggle
  document.getElementById('mobileMenuToggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('active');
      document.getElementById('mobileMenuToggle').querySelector('i').classList.remove('fa-times');
      document.getElementById('mobileMenuToggle').querySelector('i').classList.add('fa-bars');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});

document.getElementById('expandAbout').addEventListener('click', function() {
  const content = document.getElementById('hiddenContent');
  const isHidden = content.style.display === 'none';
  
  content.style.display = isHidden ? 'block' : 'none';
  this.innerHTML = isHidden 
    ? 'Collapse <i class="fas fa-chevron-up"></i>' 
    : 'Read More <i class="fas fa-chevron-down"></i>';
  
  if (isHidden) {
    setTimeout(() => {
      content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    },300);
  }
});
