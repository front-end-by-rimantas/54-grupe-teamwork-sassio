export function header() {
    let activeDemos = false;
    let base = origin + '/';
    let projectName = '';
    if (location.hostname !== 'localhost') {
        projectName = '/' + location.pathname.split('/')[1];
        base = location.origin + projectName + '/';
    }
    document.head.insertAdjacentHTML('afterbegin', `<base href="${base}">`);
    const menu = [
        { href: '/demos/', text: 'Demos' },
        { href: '/about/', text: 'About' },
        { href: '/pages/', text: 'Pages' },
        { href: '/contact/', text: 'Contacts' },
        { href: '/portfolio/', text: 'Portfolio' },
        { href: '/blog/', text: 'Blog' },
    ];
    let menuHTML = '';
    for (const link of menu) {
        let activePage = '';
        if (projectName + link.href === location.pathname) {
            activePage = 'active';
        }
        if (link.text === 'Demos') {
            menuHTML += `
        <div class="link-wrapper">
        <span class="new">New</span>
        <a class="link ${activePage}" href=".${link.href}">${link.text}</a>
        </div>`;
        } else
            menuHTML += `<a class="link ${activePage}" href=".${link.href}">${link.text}</a>`;
    }
    const HTML = `
        <header class="main-header bg-header">
            <img class="logo" src="../../img/logo.png" alt="logo"></img>
            <nav class="main-nav">
            ${menuHTML}
            </nav>
            <button class="btn-chat">Let's Chat  <i class="fa fa-commenting"></i></button>
        </header>`;
    document.body.insertAdjacentHTML('afterbegin', HTML);
}
