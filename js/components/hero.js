export function hero() {
    const HTML = `
        <section class="container">
            <div class="row">
                <div class="col-12">
                    HERO CONTENT
                </div>
            </div>
        </section>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
