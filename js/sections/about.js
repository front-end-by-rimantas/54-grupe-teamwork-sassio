export function about() {
    const HTML = `
        <section class="about container">
            <div class="row">
                <div class="col-12">
                    <div class="left-side">
                    <img src="https://html.themexriver.com/Saasio/assets/img/port-img-31/about-left.png" alt="logo" class="logo ">
                    </div>
                    <div class="right-side">
                        <h3>About Ramon</h3>
                        <h1>5 Year’s Experience on Product <span class="vio">Design</span>.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div id="nav-container">${createNav()}</div>
                        <div id="list-container">${createList("Main Skills")}</div>
                        <button id="cont-btn"><span>Download CV<i class="fa fa-download" aria-hidden="true"></i></span></button> 
                    </div>
                </div>
            </div>
        </section>`;
    