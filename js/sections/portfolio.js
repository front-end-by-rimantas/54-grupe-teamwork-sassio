export function portfolio() {
  const HTML = `
    <section class="portfolio container">
      <div class="row">
        <div class="col-12">
          <p class='txt-1'>Portfolio</p>
          <p class='txt-2'>My Creative Works</p>
        </div>
        <div class="all-btn">
          <button class='btn-1 active'>All works</button>
          <button class='btn-1'>Web Development</button>
          <button class='btn-1'>UI/UX Design</button>
          <button class='btn-1'>Branding Design</button>
        </div>
      </div>
    </section>
    <div id="servicesGrid" class="services-grid"></div>
  `;

  document.body.insertAdjacentHTML('beforeend', HTML);

  const services = [
    {
      category: "Product Design",
      title: "The Services Provide for Web Design",
      description: "Disse ultrices gravida. Risus comod viverra maecenas accumsan lacus vel facilisis.",
      image: "https://html.themexriver.com/Saasio/assets/img/port-img-31/port-1.png",
    },
    {
      category: "App Development",
      title: "The Services Provide for App Development",
      description: "Disse ultrices gravida. Risus comod viverra maecenas accumsan lacus vel facilisis.",
      image: "https://html.themexriver.com/Saasio/assets/img/port-img-31/port-2.png",
    },
    {
      category: "Web Development",
      title: "The Services Provide for Web Development",
      description: "Disse ultrices gravida. Risus comod viverra maecenas accumsan lacus vel facilisis.",
      image: "https://html.themexriver.com/Saasio/assets/img/port-img-31/port-3.png",
    },
    {
      category: "Marketing",
      title: "The Services Provide for Marketing",
      description: "Disse ultrices gravida. Risus comod viverra maecenas accumsan lacus vel facilisis.",
      image: "https://html.themexriver.com/Saasio/assets/img/port-img-31/port-4.png",
    }
  ];

  const filterMap = {
    "All works": ["all"],
    "Web Development": ["Web Development", "App Development"],
    "UI/UX Design": ["Product Design"],
    "Branding Design": ["Marketing"]
  };

  function renderServices(filters) {
    const servicesGrid = document.getElementById('servicesGrid');
  
    const filtered = services.filter(service =>
      filters.includes("all") || filters.includes(service.category)
    );
  
    const oldCards = Array.from(servicesGrid.children);
    oldCards.forEach(card => {
      card.classList.add('fade-out');
    });
  
    setTimeout(() => {
      servicesGrid.innerHTML = '';
  
      filtered.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
  
        card.innerHTML = `
          <div class="service-main">
              <div class="service-tag">${service.category}</div>
              <div class="service-title">${service.title}</div>
              <div class="service-desc">${service.description}</div>
              <button class="service-btn"><span>Explore More +</span></button>
          </div>
          <img class="service-image" src="${service.image}" alt="${service.title}" />
        `;
  
        servicesGrid.appendChild(card);
  
       
        requestAnimationFrame(() => {
          card.classList.add('visible');
        });
      });
    }, 400); 
  }

  renderServices(["all"]);

  document.querySelectorAll('.btn-1').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.btn-1').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterText = button.textContent.trim();
      const selectedFilters = filterMap[filterText] || ["all"];
      renderServices(selectedFilters);
    });
  });
}