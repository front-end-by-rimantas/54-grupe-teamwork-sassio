export function hero() {
    const HTML = `
        <section class="hero container col-12 bg-header">
            <div class="row col-12">
                <div class="left-col">
                <p class='intro1'>Welcome to my world</p>
                <p class='intro2'>Hi I'm John Ramon</p>
                <p class='intro3'>Product designer</p>
                <p class='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.</p>
                <button class='btn-hire-me'><span>Hire me +</span></button>
                <button class='btn-download-cv'><span>Download CV </span><i class="fa fa-lg fa-download"></i></button>
                </div>
                <div class="right-col">
                <div class='hero-socials bg-hero'>
                <a href='#' class='hero-icon'><i class="fab fa-facebook" aria-hidden="true"></i></a>
                <a href='#' class='hero-icon'><i class="fab fa-twitter" aria-hidden="true"></i></a>
                <a href='#' class='hero-icon'><i class="fab fa-instagram" aria-hidden="true"></i></a>
                </div>
                    <img class='hero-img' src='./img/hero.png' alt='logo'>
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
