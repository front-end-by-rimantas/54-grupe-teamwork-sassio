export function getInTouch() {
  const html = `
    
<section class="section-bg">
  <div class="contact-box">
  <div class="contact-left">
  <h4 class="get-in">Get It Touch</h4>
  <h1 class="title">Have a Project on Your Mind</h1>
  <button class="btn">Contact Me +</button>
  </div>
  <div class="contact-right">
  <div class="bg"></div>
  <img class="body-bg" src="./img/body.png" alt="Body">
  <img class="wmn" src="./img/wmn.png" alt="Woman" >
   </div>
  </div>
 </div>
</section>
 `;
  
    document.body.insertAdjacentHTML('beforeend', html);
  }