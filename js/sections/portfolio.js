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
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
