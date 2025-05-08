export function testimonial() {
    const HTML = `
        <section class="testimonial container col-12">
            <div class="first-row row">
                <div class="left col-6">
                <h2>Testimonial</h2>
                <h1>What's our customer say</h1>
                <p>Labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
                <div class="right col-4">
                <button class="left-btn btn fa fa-long-arrow-left">
                </button>
                <button class="right-btn btn fa fa-long-arrow-right">
                </button>
                </div>
            </div>
            <div class="row col-12"
            <div class="second-row col-10" id="testimonial-container">
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

function createTestimonialCard(data) {
    const stars =
        '<svg style="color: #ffac0c;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>';
    const emptyStars =
        '<svg style="color: #ffac0c;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>';

    return `
    <div class="testimonial-card">
        <div class="rating">
            ${stars.repeat(data.rating)}
            ${emptyStars.repeat(5 - data.rating)}
        </div>
        <p>"${data.text}"</p>
        <div class="testimonial-img-row">
            <div class="testimonial-pos-name">
                <h3>${data.name}</h3>
                <p>${data.position}</p>
            </div>
            <img class="testimonial-img" src="${data.imgSrc}" alt="${
        data.imgAlt
    }">
        </div>
    </div>`;
}

function renderTestimonial(index) {
    const container = document.getElementById('testimonial-container');

    const first = testimonialCustomerData[index];
    const second =
        testimonialCustomerData[(index + 1) % testimonialCustomerData.length];

    container.innerHTML = `
        <div class="testimonial-slider col-11">
            ${createTestimonialCard(first)}
            ${createTestimonialCard(second)}
        </div>
    `;
}
function nextTestimonial() {
    const slider = document.querySelector('.testimonial-slider');
    if (!slider) return;

    slider.classList.add('slide-left');

    slider.addEventListener(
        'animationend',
        () => {
            slider.classList.remove('slide-left');
            currentIndex = (currentIndex + 1) % testimonialCustomerData.length;
            renderTestimonial(currentIndex);
        },
        { once: true }
    );
}

function prevTestimonial() {
    const slider = document.querySelector('.testimonial-slider');
    if (!slider) return;

    slider.classList.add('slide-right');

    slider.addEventListener(
        'animationend',
        () => {
            slider.classList.remove('slide-right');
            currentIndex =
                (currentIndex - 1 + testimonialCustomerData.length) %
                testimonialCustomerData.length;
            renderTestimonial(currentIndex);
        },
        { once: true }
    );
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
