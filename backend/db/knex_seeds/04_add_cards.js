exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('cards').del(),
    knex.raw('ALTER SEQUENCE cards_id_seq RESTART WITH 1'),
    knex('cards').then(function() {
      // Inserts seed entries
      return knex('cards').insert([
        {
          deck_id: 3,
          term:'Circulatory System',
          definition: 'Responsible for transporting blood throughout the body. It consists of the heart and blood vessels known as veins, arteries and capillaries.',
        },
        {
          deck_id: 3,
          term: 'Respiratory System',
          definition: "Allows air to enter the lungs and for oxygen to diffuse into the blood en route to the body's tissues.",
        },
        {
          deck_id: 3,
          term: 'Digestive System',
          definition: 'Responsible for bringing food into the body and breaking it down to useable components.',
        },
        {
          deck_id: 3,
          term: 'Excretory System',
          definition: 'Where liquid waste is eliminated as urine. Starts with the kidneys, important organs for cleaning the blood and balancing water in the body.',
        },
        {
          deck_id: 3,
          term: 'Skeletal System',
          definition: 'Composed of bones and cartilage and performs the following critical functions for the human body: supports the body, facilitates movement, protects internal organs.',
        },
        {
          deck_id: 3,
          term: 'Reproductive System',
          definition: 'Collection of internal and external organs — in both males and females — that work together for the purpose of procreating.',
        },
        {
          deck_id: 3,
          term: 'Nervous System',
          definition: "Conducts stimuli from sensory receptors to the brain and spinal cord and conducts impulses back to other parts of the body.",
        },
        {
          deck_id: 3,
          term: 'Muscular System',
          definition: 'Supports movement, helps to maintain posture, and circulates blood and other substances throughout the body.',
        },
        {
          deck_id: 3,
          term: 'Immune System',
          definition: 'Protects the body against disease or other potentially damaging foreign bodies.',
        },
        {
          deck_id: 3,
          term: 'Endocrine System',
          definition: 'Chemical messenger system comprising feedback loops of hormones released by internal glands of an organism directly into the circulatory system, regulating distant target organs.',
        },
        {
          deck_id: 3,
          term: 'Integumentary System',
          definition: 'Skin and its appendages acting to protect the body from various kinds of damage, such as loss of water or damages from outside. The system includes hair and nails.',
        },
        {
          deck_id: 1,
          term: 'H',
          definition: 'Hydrogen',
        },
        {
          deck_id: 1,
          term: 'Ca',
          definition: 'Calcium',
        },
        {
          deck_id: 1,
          term: 'Be',
          definition: 'Beryllium',
        },
        {
          deck_id: 1,
          term: 'Na',
          definition: 'Sodium',
        },
        {
          deck_id: 1,
          term: 'As',
          definition: 'Arsenic',
        },
        {
          deck_id: 1,
          term: 'Hg',
          definition: 'Mercury',
        },
        {
          deck_id: 1,
          term: 'Au',
          definition: 'Gold',
        },
        {
          deck_id: 1,
          term: 'O',
          definition: 'Oxygen',
        },
        {
          deck_id: 1,
          term: 'N',
          definition: 'Nitrogen',
        },
        {
          deck_id: 1,
          term: 'Cl',
          definition: 'Chlorine',
        },
        {
          deck_id: 1,
          term: 'Si',
          definition: 'Silicon',
        },
        {
          deck_id: 1,
          term: 'Zn',
          definition: 'Zinc',
        },
        {
          deck_id: 1,
          term: 'Cu',
          definition: 'Copper',
        },
        {
          deck_id: 1,
          term: 'Ag',
          definition: 'Silver',
        },
        {
          deck_id: 1,
          term: 'Mt',
          definition: 'Meitnerium',
        },
        {
          deck_id: 2,
          term: 'Buoyancy',
          definition: 'For an object submerged in a fluid at rest, the fluid exerts a force equal to the weight of the displaced volume of fluid.',
        },
        {
          deck_id: 2,
          term: 'Fanning Friction Factor',
          definition: 'The wall shear stress divided by the dynamic pressure in turbulent pipe flow.  Used for calculating pressure drop in pipes.',
        },
        {
          deck_id: 2,
          term: 'Kinetic Energy/Volume (Dynamic Pressure)',
          definition: 'The extra pressure that you would get if you stopped the motion of a flow.',
        },
        {
          deck_id: 2,
          term: 'Reynolds Stress',
          definition: 'The added momentum flux (stress) due to turbulent velocity fluctuations.',
        },
        {
          deck_id: 2,
          term: 'Control Volume',
          definition: 'Volume in space of special interest for particular analysis. The surface of the control volume is referred as a control surface and is a closed surface. The surface is defined with relative to a coordinate system that may be fixed, moving or rotating.',
        },
        {
          deck_id: 4,
          term: 'Vitamin C',
          definition: 'A potent antioxidant that can neutralize free radicals. Also a brightening agent that helps reduce dark spots.',
          image: 'https://images.unsplash.com/photo-1476523165843-79f78d654922?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800'
        },
        {
          deck_id: 4,
          term: 'Glycolic Acid',
          definition: 'Most commonly derived from sugar cane, this natural exfoliant helps loosen dead skin cells at the top layer to reveal newer, brighter skin. Works in deeper layers to boost collagen production.',
        },
        {
          deck_id: 4,
          term: 'Retinol',
          definition: 'Increases the rate of cell turnover and boosts collagen. Derived from Vitamin A.',
        },
        {
          deck_id: 4,
          term: 'Squalane',
          definition: "Emollient most commonly derived from olives and sugar cane. Similar to our own naturally produced oil, therefore compatible with most skin types.",
          image: 'https://images.unsplash.com/photo-1534099946341-34fe5ef39eef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        {
          deck_id: 4,
          term: 'Salicylic Acid',
          definition: 'Penetrates the skin to dissolve debris that clogs pores, helping to clear blackheads and whiteheads. Derived from willow bark.',
        },
        {
          deck_id: 4,
          term: 'Benzoyl Peroxide',
          definition: 'Commonly used to treat inflammatory acne. Works to treat and prevent acne by killing bacteria underneath the skin.',
        },
        {
          deck_id: 4,
          term: 'Hydroquinone',
          definition: 'OTC skin lightening agent to treat hyperpigmentation.',
        },
        {
          deck_id: 4,
          term: 'Hyaluronic Acid',
          definition: 'Penetrates skin to help hydrate by retaining moisture, and drawing in moisture from your surroundings.',
        },
        {
          deck_id: 4,
          term: 'Copper Peptides',
          definition: "Antioxidant, and promotes skin's collagen and elastin production.",
        },
        {
          deck_id: 4,
          term: 'Niacinamide',
          definition: 'Form of Vitamin B. Helps to improve enlarged pores, uneven skin tone, and dullness.',
        },
        {
          deck_id: 4,
          term: 'Ceramide',
          definition: 'Reinforce skin barrier, plumps skin, and reduce lines and wrinkles. Naturally found in top layers of skin as well.',
        },
        {
          deck_id: 4,
          term: 'Aloe',
          definition: 'Plant derived. Most commonly used to hydrate, heal, and soothe irritated skin.',
          image: 'https://images.unsplash.com/photo-1501597392671-6eee5525a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
        },
        {
          deck_id: 4,
          term: 'Caffeine',
          definition: 'Soothes skin and fights inflammation. Commonly used to boost cirulation to help depuff and reduce dark circles around the eyes.',
          image: 'https://images.unsplash.com/photo-1414808549009-35951c724e9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        {
          deck_id: 4,
          term: 'Titanium Oxide',
          definition: 'Common mineral used for natural sunscreen. Good for sensitive skin.',
        },
      ]);
    }),
  ]);
};