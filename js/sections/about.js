export function about() {
    const HTML = `
        <section class="about container">
            <div class="row">
                <div class="col-12">

                </div>
            </div>
        </section>`;

    document.body.insertAdjacentHTML('beforeend', HTML);
    setupNavEvents();
}

function createNav() {
    const linkChoices = ["Main Skills", "Awards", "Education"];
    return `
        <nav class="nav">
            ${linkChoices.map(link => `
                <a href="#" class="nav-link" data-type="${link}">${link}</a>
            `).join('')}
        </nav>
    `;
}

function createList(type) {
    const info = [
        { title: "User Experience Design - UI/UX", desc: "Delight the user and make it work.", link: "Main Skills" },
        { title: "Web & User Interface Design - Development", desc: "Websites, web experiences...", link: "Main Skills" },
        { title: "Interaction Design - Animation", desc: "I like to move it move it.", link: "Main Skills" },
        { title: "UX Design Awards 2021", desc: "Design Center Berlin", link: "Awards" },
        { title: "Web Development Awards 2021", desc: "CSS Design Awards", link: "Awards" },
        { title: "Mobile App Designer Award 2021", desc: "Design Studio USA", link: "Awards" },
        { title: "Bachelor of Arts (B.A.)", desc: "Stanford University USA", link: "Education" },
        { title: "UX design Course", desc: "UK UX design schools", link: "Education" },
        { title: "UI Design Course", desc: "Austin Center for Design", link: "Education" }
    ];

    const filtered = info.filter(item => item.link === type);
    return `
        <ul class="list-group">
            ${filtered.map(item => `
                <li class="list-group-item">
                    <h4 class="about-list-head">${item.title}</h4>
                    <p>${item.desc}</p>
                </li>
            `).join('')}
        </ul>
    `;
}

function setupNavEvents() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const type = e.target.dataset.type;
            const container = document.getElementById('list-container');
            container.innerHTML = createList(type);

            links.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    if (links.length > 0) {
        links[0].click();
    }
     
}

