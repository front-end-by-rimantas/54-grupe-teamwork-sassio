// Import the card data
import { plans } from '../data/pricingData.js';

// Create the main section
function pricing() {
  const HTML = `
    <section class="pricing-section container">
      <div class="row">
        <div class="col-12">
          <h3>Pricing</h3>
          <h1>Reasonable Pricing Plan</h1>
          <p>Labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
viverra maecenas accumsan lacus vel facilisis.</p>
          <div class="card-line">
            <!-- Cards will go here -->
          </div>
        </div>
      </div>
    </section>
  `;
  document.body.insertAdjacentHTML('beforeend', HTML);

  renderPricingCards(); 
}

// Create one pricing card
function createPricingCard(cardData) {
  const card = document.createElement('div');
  card.classList.add('pricing-card');

  card.innerHTML = `
    <div class="price">$${cardData.price}</div>
    <h3 class="plan-name">${cardData.plan}</h3>
    <ul class="features">
      ${cardData.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
    <button class="purchase-btn ${cardData.featured ? 'featured-btn' : ''}">
      Purchase Now <span>+</span>
    </button>
  `;

  return card;
}


function renderPricingCards() {
  const container = document.querySelector('.card-line');
  plans.forEach(plan => {
    const card = createPricingCard(plan);
    container.appendChild(card);
  });
}

// Export the pricing function
export { pricing };
