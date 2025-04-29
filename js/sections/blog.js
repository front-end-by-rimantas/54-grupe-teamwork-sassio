import { services } from '../data/blog-services.js'

export function blog() {
    const html = `
      <section class="blog container">
        <div class="row">
          <div class="col-12">
            <p class="txt-1">Blog</p>
            <p class="txt-2">Our Latest News & Post</p>
          </div>
       
        <div class="slider-section">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper"></div>
          </div>
          <div class="swiper-pagination"></div>
           </div>
        </div>
      </section>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    `;
  
    document.body.insertAdjacentHTML('beforeend', html);
  
    const swiperScript = document.createElement('script');
    swiperScript.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
    swiperScript.onload = () => {
      const swiperWrapper = document.querySelector('.swiper-wrapper');
  
      services.forEach(service => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
          <div class="card">
            <img src="${service.image}" alt="${service.title}">
            <div class="card-meta">
              <div class="meta-item">
                <i class="fas fa-user"></i>
                <span>App Development</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-comments"></i>
                <span>5 Comments</span>
              </div>
            </div>
            <div class="card-content">
              <h3>${service.title}</h3>
            </div>
          </div>
        `;
        swiperWrapper.appendChild(slide);
      });
  
      new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 }
        }
      });
    };
  
    document.body.appendChild(swiperScript);
  }