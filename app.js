/**
 * EcoSort - Clean White & Fresh Green Interactive Logic
 * Everyday friendly household waste sorter, mobile menu drawer, and community impact calculator.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Everyday Household Items Catalog ---
  const householdItems = [
    {
      id: 'water-bottle',
      name: 'Plastic Water Bottle',
      emoji: '🥤',
      stream: 'dry',
      binName: 'BLUE BIN — DRY RECYCLABLE',
      badgeClass: 'blue-badge',
      material: 'Clear PET Plastic (#1)',
      instructions: 'Empty any remaining water, give it a quick 3-second rinse, and crush it flat. Put the cap back on so it gets recycled too!',
      benefit: 'Spun into clean polyester fiber, recycled fleece, or brand new drink bottles.'
    },
    {
      id: 'banana-peel',
      name: 'Fruit Peels & Veggies',
      emoji: '🍌',
      stream: 'organic',
      binName: 'GREEN BIN — WET / ORGANIC',
      badgeClass: 'green-badge',
      material: '100% Biodegradable Kitchen Food Waste',
      instructions: 'Drop straight into your kitchen green bin. No plastic bags! If lining your bin, use certified compostable cornstarch bags or paper.',
      benefit: 'Becomes rich organic dark compost fertilizer for community gardens and local farms.'
    },
    {
      id: 'battery',
      name: 'Old AA / Phone Battery',
      emoji: '🔋',
      stream: 'ewaste',
      binName: 'AMBER / RED BIN — E-WASTE / HAZARD',
      badgeClass: 'amber-badge',
      material: 'Lithium / Alkaline Cell (Toxic & Flammable)',
      instructions: 'NEVER put in regular trash! Keep dry. Tape the terminal ends with clear tape and drop off at your building e-waste box or local battery kiosk.',
      benefit: 'Recovers rare lithium, cobalt, and nickel while preventing dangerous landfill fires.'
    },
    {
      id: 'cardboard-box',
      name: 'Delivery Cardboard Box',
      emoji: '📦',
      stream: 'dry',
      binName: 'BLUE BIN — DRY RECYCLABLE',
      badgeClass: 'blue-badge',
      material: 'Clean Corrugated Kraft Paperboard',
      instructions: 'Peel off any plastic packing tape and shipping labels if possible, then flatten the box completely to make space in the bin.',
      benefit: 'Melted into paper pulp to make new shipping cartons, saving trees and water.'
    },
    {
      id: 'greasy-pizza-box',
      name: 'Greasy Pizza Box Base',
      emoji: '🍕',
      stream: 'residual',
      binName: 'GRAY BIN — GENERAL WASTE',
      badgeClass: 'gray-badge',
      material: 'Oil-Permeated Paperboard (Unwashable)',
      instructions: 'Tear off the clean top lid for the Blue paper bin! The oily, cheese-stained bottom part must go in the Gray bin or home compost.',
      benefit: 'Sent for clean high-temperature waste-to-energy recovery without spoiling clean paper pulp.'
    },
    {
      id: 'aluminum-can',
      name: 'Aluminum Soda Can',
      emoji: '🥫',
      stream: 'dry',
      binName: 'BLUE BIN — DRY RECYCLABLE',
      badgeClass: 'blue-badge',
      material: '100% Infinitely Recyclable Aluminum',
      instructions: 'Empty the can and give a light rinse. Can be crushed flat or left as is. Aluminum can be melted and recycled forever!',
      benefit: 'Can be melted down and back on supermarket shelves as a new can in just 60 days.'
    },
    {
      id: 'charger-cable',
      name: 'Broken Phone Charger / Cable',
      emoji: '🔌',
      stream: 'ewaste',
      binName: 'AMBER / RED BIN — E-WASTE / HAZARD',
      badgeClass: 'amber-badge',
      material: 'Copper Wire & PVC Rubber Casing',
      instructions: 'Do not throw in general trash. Coil it up and put in an e-waste bin or drop off at any authorized electronics store.',
      benefit: 'High-purity copper is extracted and reused in electrical wiring and motors.'
    },
    {
      id: 'coffee-cup',
      name: 'Disposable Coffee Cup',
      emoji: '☕',
      stream: 'residual',
      binName: 'GRAY BIN — GENERAL WASTE',
      badgeClass: 'gray-badge',
      material: 'Paper with Fused Plastic Waterproof Lining',
      instructions: 'Remove the hard plastic lid (it can usually go in the Blue bin). The paper cup itself has a glued plastic film and goes in the Gray bin.',
      benefit: 'Safe thermal combustion displacement, keeping landfills clean.'
    }
  ];

  // --- 2. Element Selectors ---
  const sampleItemsGrid = document.getElementById('sampleItemsGrid');
  const wasteSearchInput = document.getElementById('wasteSearchInput');
  const searchFeedback = document.getElementById('searchFeedback');

  const carrierIcon = document.getElementById('carrierIcon');
  const carrierLabel = document.getElementById('carrierLabel');
  const valResin = document.getElementById('valResin');
  const destBadge = document.getElementById('destBadge');
  const destBinName = document.getElementById('destBinName');
  const destInstructions = document.getElementById('destInstructions');
  const valEndUse = document.getElementById('valEndUse');

  // Bin elements
  const binCards = {
    organic: document.getElementById('binOrganic'),
    dry: document.getElementById('binDry'),
    ewaste: document.getElementById('binEwaste'),
    residual: document.getElementById('binResidual')
  };

  let activeItemId = householdItems[0].id;

  // --- 3. Render Item Buttons ---
  function renderItemButtons(items) {
    if (!sampleItemsGrid) return;
    sampleItemsGrid.innerHTML = '';
    items.forEach(item => {
      const btn = document.createElement('button');
      btn.className = `friendly-item-btn ${item.id === activeItemId ? 'active' : ''}`;
      btn.dataset.id = item.id;
      btn.innerHTML = `
        <span class="item-btn-emoji">${item.emoji}</span>
        <span class="item-btn-title">${item.name}</span>
      `;
      btn.addEventListener('click', () => {
        selectItem(item);
      });
      sampleItemsGrid.appendChild(btn);
    });
  }

  renderItemButtons(householdItems.slice(0, 6)); // Default top 6 household items

  // --- 4. Select Item & Show Guidance ---
  function selectItem(item) {
    activeItemId = item.id;

    // Update active button state
    document.querySelectorAll('.friendly-item-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.id === item.id);
    });

    // Update Inspection Box
    if (carrierIcon) carrierIcon.textContent = item.emoji;
    if (carrierLabel) carrierLabel.textContent = item.name;
    if (valResin) valResin.textContent = `Material: ${item.material}`;

    // Update Destination Badge
    if (destBadge) {
      destBadge.className = `destination-badge ${item.badgeClass}`;
    }
    if (destBinName) destBinName.textContent = item.binName;
    if (destInstructions) destInstructions.textContent = item.instructions;
    if (valEndUse) valEndUse.textContent = item.benefit;

    // Highlight target bin box in Column 3
    Object.values(binCards).forEach(b => {
      if (b) b.classList.remove('active');
    });
    const targetBin = binCards[item.stream];
    if (targetBin) {
      targetBin.classList.add('active');
    }
  }

  // --- 5. Quick Household Search ---
  if (wasteSearchInput) {
    wasteSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        renderItemButtons(householdItems.slice(0, 6));
        if (searchFeedback) searchFeedback.style.display = 'none';
        return;
      }

      const matches = householdItems.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.material.toLowerCase().includes(query) ||
        item.binName.toLowerCase().includes(query)
      );

      if (matches.length > 0) {
        renderItemButtons(matches);
        if (searchFeedback) searchFeedback.style.display = 'none';
      } else {
        sampleItemsGrid.innerHTML = '';
        if (searchFeedback) {
          searchFeedback.style.display = 'block';
          searchFeedback.innerHTML = `Not sure about "<em>${query}</em>"? Try searching <strong>bottle, paper, battery, bread,</strong> or <strong>can</strong>!`;
        }
      }
    });
  }

  // --- 6. Friendly Community Impact Calculator ---
  const intakeSlider = document.getElementById('intakeSlider');
  const accuracySlider = document.getElementById('accuracySlider');
  const intakeDisplay = document.getElementById('intakeDisplay');
  const accuracyDisplay = document.getElementById('accuracyDisplay');

  const calcDiverted = document.getElementById('calcDiverted');
  const calcCarText = document.getElementById('calcCarText');
  const calcCompost = document.getElementById('calcCompost');
  const calcRecirculated = document.getElementById('calcRecirculated');
  const exportCalcBtn = document.getElementById('exportCalcBtn');

  function updateFriendlyCalculator() {
    if (!intakeSlider || !accuracySlider) return;
    const homes = parseInt(intakeSlider.value, 10);
    const accuracy = parseInt(accuracySlider.value, 10);

    if (intakeDisplay) intakeDisplay.textContent = `${homes} Homes`;
    if (accuracyDisplay) accuracyDisplay.textContent = `${accuracy}% Clean Sorting`;

    // Average family/home generates ~1 kg of solid waste per day = 365 kg per year
    const annualKg = homes * 365 * 1.0;
    const preventedKg = Math.round(annualKg * (accuracy / 100));

    // Approx 40% organic compost yield from segregated food waste
    const compostKg = Math.round(preventedKg * 0.40);

    // Approx 60% dry recyclable packaging (bottles, paper, cans)
    const recycledKg = Math.round(preventedKg * 0.60);

    // CO2 equivalent prevented: 1 kg of diverted organic/recyclables prevents ~1.2 kg CO2
    const co2Tons = ((preventedKg * 1.2) / 1000).toFixed(1);

    if (calcDiverted) calcDiverted.textContent = `${preventedKg.toLocaleString()} kg`;
    if (calcCompost) calcCompost.textContent = `${compostKg.toLocaleString()} kg`;
    if (calcRecirculated) calcRecirculated.textContent = `${recycledKg.toLocaleString()} kg`;
    if (calcCarText) {
      calcCarText.textContent = `Equivalent to preventing ${co2Tons} metric tons of greenhouse emissions!`;
    }
  }

  if (intakeSlider && accuracySlider) {
    intakeSlider.addEventListener('input', updateFriendlyCalculator);
    accuracySlider.addEventListener('input', updateFriendlyCalculator);
    updateFriendlyCalculator();
  }

  // Copy Summary Action
  if (exportCalcBtn) {
    exportCalcBtn.addEventListener('click', () => {
      const summaryText = `🌿 EcoSort Community Impact Summary:\n` +
        `- Participating Homes: ${intakeSlider.value}\n` +
        `- Sorting Accuracy: ${accuracySlider.value}%\n` +
        `- Landfill Waste Prevented: ${calcDiverted.textContent}/year\n` +
        `- Natural Compost Produced: ${calcCompost.textContent}/year\n` +
        `- Recycled Bottles & Paper: ${calcRecirculated.textContent}/year\n` +
        `Every small action at home counts towards a greener community!`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(summaryText).then(() => {
          showFriendlyToast('Impact summary copied to clipboard!');
        }).catch(() => {
          showFriendlyToast('Impact summary ready to share!');
        });
      } else {
        showFriendlyToast('Impact summary updated!');
      }
    });
  }

  // --- 7. FAQ Accordion ---
  const accordionCards = document.querySelectorAll('.accordion-card');
  accordionCards.forEach(card => {
    const trigger = card.querySelector('.accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');

        // Close other items
        accordionCards.forEach(c => {
          c.classList.remove('open');
          const t = c.querySelector('.accordion-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          card.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // --- 8. Mobile Navigation Drawer ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = navLinks.classList.contains('mobile-open');
      navLinks.classList.toggle('mobile-open');
      mobileMenuBtn.setAttribute('aria-expanded', (!isExpanded).toString());
    });

    // Close drawer when any nav link is tapped on mobile
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 9. Toast Helper ---
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer;

  function showFriendlyToast(msg) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // --- 10. Hero Rotating Preview (Gentle Everyday Item Rotation) ---
  const heroEmoji = document.getElementById('heroEmoji');
  const heroItemTitle = document.getElementById('heroItemTitle');
  const heroItemTip = document.getElementById('heroItemTip');
  const heroBinPill = document.getElementById('heroBinPill');

  const heroRotatingItems = [
    { emoji: '🥤', title: 'Plastic Drink Bottle', tip: 'Empty and crush flat', bin: 'BLUE BIN (Dry Recyclables)', pillClass: 'blue-pill', dotClass: 'blue' },
    { emoji: '🍌', title: 'Fruit & Food Scraps', tip: 'Composts into rich soil', bin: 'GREEN BIN (Wet / Organic)', pillClass: 'green-pill', dotClass: 'green' },
    { emoji: '🔋', title: 'Old AA Battery', tip: 'Never toss in regular trash', bin: 'AMBER BIN (E-Waste & Hazard)', pillClass: 'amber-pill', dotClass: 'amber' },
    { emoji: '📦', title: 'Cardboard Box', tip: 'Remove tape and flatten', bin: 'BLUE BIN (Dry Recyclables)', pillClass: 'blue-pill', dotClass: 'blue' }
  ];

  let heroIdx = 0;
  setInterval(() => {
    if (document.hidden) return;
    heroIdx = (heroIdx + 1) % heroRotatingItems.length;
    const cur = heroRotatingItems[heroIdx];

    if (heroEmoji && heroItemTitle && heroItemTip && heroBinPill) {
      heroEmoji.style.transform = 'scale(0.85)';
      heroEmoji.style.opacity = '0.5';

      setTimeout(() => {
        heroEmoji.textContent = cur.emoji;
        heroItemTitle.textContent = cur.title;
        heroItemTip.textContent = cur.tip;
        heroBinPill.className = `demo-bin-pill ${cur.pillClass}`;
        heroBinPill.innerHTML = `<span class="bin-dot ${cur.dotClass}"></span><strong>${cur.bin}</strong>`;
        heroEmoji.style.transform = 'scale(1)';
        heroEmoji.style.opacity = '1';
      }, 250);
    }
  }, 4200);
});
