export function portfolio() {
  const HTML = `
      <section class="portfolio container">
          <div class="row">
              <div class="col-12">
                  <p class='txt-1'>Portfolio</p>
                  <p class='txt-2'>My Creative Works</p>
              </div>
              <div class="all-btn">
                  <button class='btn-1'>All works</button>
                  <button class='btn-1'>Web Development</button>
                  <button class='btn-1'>UI/UX Design</button>
                  <button class='btn-1'>Branding Design</button>
              </div>
          </div>
      </section>
      <div id="servicesGrid" class="services-grid"></div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', HTML);

  document.addEventListener('DOMContentLoaded', function() {
      const servicesGrid = document.getElementById('servicesGrid');


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

      services.forEach(service => {
          const card = document.createElement('div');
          card.className = 'service-card';

          card.innerHTML = `
              <div>
                  <div class="service-tag">${service.category}</div>
                  <div class="service-title">${service.title}</div>
                  <div class="service-desc">${service.description}</div>
                  <button class="service-btn">Explore More <span>+</span></button>
              </div>
              <img class="service-image" src="${service.image}" alt="${service.title}" />
          `;

          servicesGrid.appendChild(card);
      });
  });
}