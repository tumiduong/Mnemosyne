exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('decks').del(),
    knex.raw('ALTER SEQUENCE decks_id_seq RESTART WITH 1'),
    knex('decks').then(function() {
      // Inserts seed entries
      return knex('decks').insert([
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
      ]);
    }),
  ]);
};