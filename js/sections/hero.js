export function hero() {
    const HTML = `
        <section class="container">
            <div class="row">
                <div class="left-col col-7">
                <p class='intro1'>Welcome to my world</p>
                <p class='intro2'>Hi I'm John Ramon</p>
                <p class='intro3'>Product designer</p>
                <p class='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.</p>
                <button class='btn-hire-me'>Hire me +</button>
                <button class='btn-download-cv'>Download CV <i class="fa fa-lg fa-download"></i></button>
                </div>
                <div class="right-col col-5">
                <div class='hero-socials bg-hero'>
                <a href='#' class='hero-icon fa fa-facebook'></a>
                <a href='#' class='hero-icon fa fa-twitter'></a>
                <a href='#' class='hero-icon fa fa-instagram'></a>
                </div>
                    <img class='hero' src='../../img/hero.png' alt='logo'>
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
