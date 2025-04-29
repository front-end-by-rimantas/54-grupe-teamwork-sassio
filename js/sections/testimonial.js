export function testimonial() {
    const HTML = `
        <section class="testimonial container">
            <div class="first-row col-12">
                <div class="left col-5">
                <h2>Testimonial</h2>
                <h1>What's our customer say</h1>
                <p>Labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
                <div class="right col-3">
                <button class="left-btn btn">
                <img src="././img/arrow-left.svg" alt="image">
                </button>
                <button class="right-btn btn">
                <img src="././img/arrow-right.svg" alt="image">
                </button>
                </div>
            </div>
            <div class="row col-12"
            <div class="second-row col-8" id="testimonial-container">
            </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
    initTestimonials();
}
const testimonialCustomerData = [
    {
        rating: 3,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam voluptatem enim, velit magni voluptates? Blanditiis est aperiam earum modi libero maiores totam quia rem, aliquid tempore, molestiae id nobis.',
        name: 'Jonah D .Kwon',
        position: 'CEO / Founder',
        imgSrc: 'https://html.themexriver.com/Saasio/assets/img/port-img-31/testimonial-author-2.png',
        imgAlt: 'photo',
    },
    {
        rating: 4,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam voluptatem enim, velit magni voluptates? Blanditiis est aperiam earum modi libero maiores totam quia rem, aliquid tempore, molestiae id nobis.',
        name: 'Jonah D .Kwon',
        position: 'CEO / Founder',
        imgSrc: 'https://html.themexriver.com/Saasio/assets/img/port-img-31/testimonial-author-1.png',
        imgAlt: 'photo',
    },
];
let currentIndex = 0;

function renderTestimonial(index) {
    const container = document.getElementById('testimonial-container');

    const first = testimonialCustomerData[index];
    const second =
        testimonialCustomerData[(index + 1) % testimonialCustomerData.length];

    container.innerHTML = `
            <div class="testimonial-card">
                <div class="rating">
                    ${'★'.repeat(first.rating)}${'☆'.repeat(5 - first.rating)}
                </div>
                <p>"${first.text}"</p>
                <div class="testimonial-img-row">
                <div class="testimonial-pos-name">
                <h3>${first.name}</h3>
                <p>${first.position}</p>
                </div>
                <img class="testimonial-img" src="${first.imgSrc}" alt="${
        first.imgAlt
    }">
                </div>
            </div>

            <div class="testimonial-card">
                <div class="rating">
                    ${'★'.repeat(second.rating)}${'☆'.repeat(5 - second.rating)}
                </div>
                <p>"${second.text}"</p>
                <div class="testimonial-img-row">
                <div class="testimonial-pos-name">
                <h3>${second.name}</h3>
                <p>${second.position}</p>
                </div>
                <img class="testimonial-img" src="${second.imgSrc}" alt="${
        second.imgAlt
    }">
                </div>
            </div>
    `;
}
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonialCustomerData.length;
    renderTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex =
        (currentIndex - 1 + testimonialCustomerData.length) %
        testimonialCustomerData.length;
    renderTestimonial(currentIndex);
}

function initTestimonials() {
    renderTestimonial(currentIndex);
    document
        .querySelector('.left-btn')
        .addEventListener('click', prevTestimonial);
    document
        .querySelector('.right-btn')
        .addEventListener('click', nextTestimonial);
}
