export function footer() {
    const HTML = `
<section class="footer">
  <div class="footer-main">
    <img class="logo" src="./img/logo.png" alt="logo">
    <p class="footer-text">
      Labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan lacus vel facilisis.
    </p>
    <div class="social-icons">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
    </div>
  </div>

  <div class="footer-bottom">
    <hr class="footer-divider" />
    <p class="footer-copy">
      Copyright © 2023 <span class="footer-brand">SaaSio-Themes</span>. All Rights Reserved.
    </p>
  </div>
</section>
  `;
    document.body.insertAdjacentHTML('beforeend', HTML);
}
