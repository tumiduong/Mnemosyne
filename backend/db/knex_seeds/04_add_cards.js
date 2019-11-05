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
        {
          deck_id: 5,
          term: '1984',
          definition: 'Author: George Orwell, Published: June 8, 1949.',
          image: 'https://i.ibb.co/2dkqp8L/1984.jpg'
        },
        {
          deck_id: 5,
          term: 'Pride and Prejudice',
          definition: 'Author: Jane Austen, Published: January 28, 1813.',
          image: 'https://i.ibb.co/HYMMTGm/pride-and-prejudice.jpg'
        },
        {
          deck_id: 5,
          term: 'To Kill A Mockingbird',
          definition: 'Author: Harper Lee, Published: July 11, 1960.',
          image: 'https://i.ibb.co/CbRFgTK/to-kill-a-mockingbird.jpg'
        },
        {
          deck_id: 5,
          term: 'The Great Gatsby',
          definition: 'Author: F.Scott Fitzgerald,Published: April 10, 1925.',
          image: 'https://i.ibb.co/DRpZPJm/gatsby.jpg'          
        },
        {
          deck_id: 5,
          term: 'The Catcher in the Rye',
          definition: 'Author: by J.D. Salinger, Published: July 16, 1951.',
          image: 'https://i.ibb.co/1TsY2sg/catcher-in-the-rye.jpg'          
        },
        {
          deck_id: 5,
          term: 'Wuthering Heights',
          definition: 'Author: Emily Brontë, Published: December, 1847.',
          image: 'https://i.ibb.co/6WNTXvt/wuthering-heights.jpg'          
        },
        {
          deck_id: 5,
          term: 'Great Expectations',
          definition: 'Author Charles Dickens, Published: August 1861.',
          image: 'https://i.ibb.co/TmrZF3N/great-expectations.jpg'          
        },
        {
          deck_id: 5,
          term: 'The Grapes of Wrath',
          definition: 'Author: John Steinbeck, Published: April 14, 1939.',
          image: 'https://i.ibb.co/qD7X4SW/grapes-of-wrath.jpg'          
        },
        {
          deck_id: 5,
          term: 'One Hundred Years of Solitude',
          definition: 'Author: Gabriel García Márquez, Published: 1967.',
          image: 'https://i.ibb.co/9nLXjsr/one-hundred-years-of-solitude.jpg'          
        },
        {
          deck_id: 5,
          term: 'The Count of Monte Cristo',
          definition: 'Author: Alexandre Dumas, Published: 1967.',
          image: 'https://i.ibb.co/27YGf6n/monte-cristo.jpg'          
        },
        {
          deck_id: 5,
          term: 'Ulysses',
          definition: 'Author: James Joyce, Published: February 2, 1922.',
          image: 'https://i.ibb.co/XzxjsJz/ulysses.jpg'          
        },
        {
          deck_id: 5,
          term: 'On the Road',
          definition: 'Author: Jack Kerouac, Published: September 5, 1957.',
          image: 'https://i.ibb.co/FWTcpmy/on-the-road.jpg'          
        },
        {
          deck_id: 5,
          term: 'Moby Dick',
          definition: 'Author: Herman Melville, Published: October 18, 1851',
          image: 'https://i.ibb.co/26frYhV/moby-dick.jpg'          
        },
        {
          deck_id: 5,
          term: 'Madame Bovary',
          definition: 'Author: Gustave Flaubert, Published: 1856.',
          image: 'https://i.ibb.co/DkvkX1Z/madame-bovary.jpg'          
        },
        {
          deck_id: 5,
          term: 'War and Peace',
          definition: 'Author: Leo Tolstoy, Published: 1869.',
          image: 'https://i.ibb.co/23ncpx7/war-and-peace.jpg'          
        },
        {
          deck_id: 5,
          term: 'Brave New World',
          definition: 'Author: Aldous Huxley, Published: 1932.',
          image: 'https://i.ibb.co/rF96tmq/brave-new-world.jpg'          
        },
        {
          deck_id: 5,
          term: 'Crime and Punishment',
          definition: 'Author: Fyodor Dostoyevsky, Published: 1866.',
          image: 'https://i.ibb.co/mGnYMBS/crime-and-punishment.jpg'          
        },
        {
          deck_id: 5,
          term: 'Hamlet',
          definition: 'Author: William Shakespeare, Published: 1609.',
          image: 'https://i.ibb.co/gtx36W8/hamlet.jpg'          
        },
        {
          deck_id: 5,
          term: 'Les Misérables',
          definition: 'Author: Victor Hugo, Published: 1862.',
          image: 'https://i.ibb.co/mtt1cJs/les-miserables.jpg'          
        },
        {
          deck_id: 5,
          term: 'Don Quixote',
          definition: 'Miguel de Cervantes, Published:  January 16, 1605.',
          image: 'https://i.ibb.co/hKL66TG/don-quixote.jpg'          
        },
        {
          deck_id: 6,
          term: 'Iron Man',
          definition: '2008 - Director: Jon Favreau. - Stars: Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges',
          image: 'https://i.ibb.co/mF54RBV/iron-man.jpg'          
        },
        {
          deck_id: 6,
          term: 'The Incredible Hunk',
          definition: '2008 - Director: Louis Leterrier. - Stars: Edward Norton, Liv Tyler, Tim Roth, William Hurt.',
          image: 'https://i.ibb.co/d0D1GqG/hulk.jpg'          
        },
        {
          deck_id: 6,
          term: 'Thor',
          definition: '2011 - Director: Kenneth Branagh. - Stars: Chris Hemsworth, Anthony Hopkins, Natalie Portman, Tom Hiddleston',
          image: 'https://i.ibb.co/jWXq9Cy/thor.jpg'          
        },
        {
          deck_id: 6,
          term: 'The Avengers',
          definition: '2012 - Director: Joss Whedon. - Stars: Robert Downey Jr., Chris Evans, Scarlett Johansson, Jeremy Renner.',
          image: 'https://i.ibb.co/rkDRsSh/avengers.jpg'          
        },
        {
          deck_id: 6,
          term: 'Guardians of Galaxy',
          definition: '2014 - Director: James Gunn. - Stars: Chris Patt, Vin Diesel, Bradley Cooper, Zoe Saldana.',
          image: 'https://i.ibb.co/6nWx5gx/guardians-of-galaxy.jpg'          
        },
        {
          deck_id: 6,
          term: 'Black Panther',
          definition: '2018 - Director: Ryan Coogler. - Stars: Chadwick Boseman, Michael B. Jordan, Lupita Nyong’o, Danai Guirira.',
          image: 'https://i.ibb.co/0m8qWQX/black-panther.jpg'          
        },
        {
          deck_id: 6,
          term: 'Spider Man: Far from Home',
          definition: '2019 - Director: Jon Watts. Stars: Tom Holland, Samuel L.Jackson, Jake Gyllenhaal.',
          image: 'https://i.ibb.co/XjCg5hG/spider-man.jpg'          
        },
        {
          deck_id: 6,
          term: 'Captain America: Civil War',
          definition: '2016 - Directors: Anthony Russo, Joe Russo. Stars: Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan',
          image: 'https://i.ibb.co/GkxJPqY/captain-america.jpg'          
        },
        {
          deck_id: 6,
          term: 'Doctor Strange',
          definition: '2016- Director: Scott Derrickson. Stars: Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong.',
          image: 'https://i.ibb.co/kJMR7Ry/doctor-strange.jpg'          
        },
        {
          deck_id: 6,
          term: 'Ant-Man and the Wasp',
          definition: '2018 - Director: Peyton Reed. Stars: Paul Rudd, Evangeline Lilly, Michael Pena, Walton Goggins.',
          image: 'https://i.ibb.co/8xGSKf9/ant-man.jpg'          
        },
        {
        deck_id: 7,
        term: 'Whiskey Sour',
        definition: '2 oz whiskey, 1 oz lemon juice, 1 tsp sugar, 1 egg white (optional)',
        image: 'https://i.ibb.co/QbPW3ZB/whiskey-sour.jpg'          
      },
      {
        deck_id: 7,
        term: 'Mimosa',
        definition: '2.5 oz champagne, 2.5 oz orange juice',
        image: 'https://i.ibb.co/98g65Yp/mimosa.jpg'          
      },
      {
        deck_id: 7,
        term: 'Negroni',
        definition: '1 oz gin, 1 oz Campari, 1 oz sweet, vermouth',
        image: 'https://i.ibb.co/zJVx64j/negroni.jpg'          
      },
      {
        deck_id: 7,
        term: 'Moscow Mule',
        definition: '2 oz vodka, 4 to 6 oz ginger beer, 0.5 oz lime juice',
        image: 'https://i.ibb.co/VYSfZt9/moscow-mule.jpg'          
      },
      {
        deck_id: 7,
        term: 'Mojito',
        definition: '3 mint leaves, 2 oz white rum, 0.75 oz lime juice, 0.5 oz simple syrup',
        image: 'https://i.ibb.co/D8tBw0H/mojito.jpg'          
      },
      {
        deck_id: 7,
        term: 'Old Fashioned',
        definition: '2 oz bourbon or rye whiskey, 2 dashes Angostura bitters, 1 sugar cube or 1 tsp sugar, orange twist garnish',
        image: 'https://i.ibb.co/QbkCC6C/old-fashioned-inside.jpg'          
      },
      {
        deck_id: 7,
        term: 'Pimm’s',
        definition: "50 ml (about 1.75 oz) Pimm's No.1, 150 ml (about 5 oz) lemonade,  mint, orange, strawberries, cucumber to garnish",
        image: 'https://i.ibb.co/D45KHvC/pimms.jpg'          
      },
      {
        deck_id: 7,
        term: 'Paloma',
        definition: '2 oz tequila, .5 oz lime juice, grapefruit soda to top',
        image: 'https://i.ibb.co/g6Vr3Jt/paloma.jpg'          
      },
      {
        deck_id: 7,
        term: 'Sidecar',
        definition: '2 oz VS or VSOP Cognac, 1 oz Cointreau, .75 oz lemon juice',
        image: 'https://i.ibb.co/Nr0ZMkS/Sidecar.jpg'          
      },
      {
        deck_id: 7,
        term: 'Martini',
        definition: '3 oz gin or vodka, .5 oz dry vermouth, lemon peel or olive',
        image: 'https://i.ibb.co/n0DYMJc/martini.jpg'          
      },
      {
        deck_id: 7,
        term: 'Daiquiri',
        definition: '2 oz light rum, 1 oz simple syrup, 1 oz lime juice',
        image: 'https://i.ibb.co/QdF35zP/daiquiri.jpg'          
      },
      {
        deck_id: 7,
        term: 'The Dark’n Stormy',
        definition: '1.5 oz Gosling’s Black Seal Rum, ginger beer to top',
        image: 'https://i.ibb.co/BscKGwx/dark-n-stormy.jpg'          
      },
      {
        deck_id: 7,
        term: 'Mint Julep',
        definition: '2 oz bourbon, 8-10 mint leaves, 0.25 oz simple syrup',
        image: 'https://i.ibb.co/jyYqSw6/mint-julep.jpg'          
      },
      {
        deck_id: 7,
        term: 'Margarita',
        definition: '2 oz silver tequila, 1 oz Cointreau, 1 oz lime juice, salt for the rim',
        image: 'https://i.ibb.co/3zTH1tD/margarita.jpg'         
      },
      {
        deck_id: 7,
        term: 'Cosmopolitan',
        definition: '1.5 oz citrus vodka, 1 oz Cointreau, 0.5 oz lime juice, 0.25 oz cranberry juice',
        image: 'https://i.ibb.co/26wSdkg/cosmo.jpg'         
      },
      {
        deck_id: 8,
        term: 'Ajitto, 1981',
        definition: '',
        image: 'https://i.ibb.co/SXd1crd/ajitto.jpg'         
      },
      {
        deck_id: 8,
        term: 'Thomas, 1987',
        definition: '',
        image: 'https://i.ibb.co/8NVt4dg/thomas.jpg'         
      },
      {
        deck_id: 8,
        term: 'Patti Smith, 1976',
        definition: '',
        image: 'https://i.ibb.co/tzcRQ7s/patti-smith.jpg'         
      },
      {
        deck_id: 8,
        term: 'Lisa Lyon, 1982',
        definition: '',
        image: 'https://i.ibb.co/s9z0xHc/lisa-lyon.jpg'         
      },
      {
        deck_id: 8,
        term: 'Andy Warhol, 1986',
        definition: '',
        image: 'https://i.ibb.co/b70rLT3/andy-warhol.jpg'         
      },
      {
        deck_id: 8,
        term: 'Calla Lily, 1984',
        definition: '',
        image: 'https://i.ibb.co/w0W5D9M/calla-lilly.jpg'         
      },
      {
        deck_id: 8,
        term: 'Double Jack in the Pulpit, 1988',
        definition: '',
        image: 'https://i.ibb.co/v3zHVLX/pulpit.jpg'         
      },
      {
        deck_id: 8,
        term: 'Poppy, 1988',
        definition: '',
        image: 'https://i.ibb.co/9GW5RZj/poppy.jpg'         
      },
      {
        deck_id: 8,
        term: 'Italian Devil, 1988',
        definition: '',
        image: 'https://i.ibb.co/5cYpzXB/devil.jpg'         
      },
      {
        deck_id: 8,
        term: 'Holly Solomon, 1976',
        definition: '',
        image: 'https://i.ibb.co/0npr5QM/solomon.jpg'         
      },
      {
        deck_id: 9,
        term: 'Cristiano Ronaldo',
        definition: 'Juventus F.C.',
        image: 'https://i.ibb.co/g4chyHL/ronaldo.gif'         
      },
      {
        deck_id: 9,
        term: 'Lionel Messi',
        definition: 'FC Barcelona',
        image: 'https://i.ibb.co/F7n6LB1/messi.gif'         
      },
      {
        deck_id: 9,
        term: 'Luis Suarez',
        definition: 'FC Barcelona',
        image: 'https://i.ibb.co/WVhf9yf/suarez.gif'         
      },
      {
        deck_id: 9,
        term: 'Neymar Santos',
        definition: 'Paris Saint-Germain',
        image: 'https://i.ibb.co/pKp3JNm/neymar.gif'         
      },
      {
        deck_id: 9,
        term: 'Gareth Bale',
        definition: 'Real Madrid',
        image: 'https://i.ibb.co/6yrR6Gc/gareth.gif'         
      },
      {
        deck_id: 9,
        term: 'Robert Lewandowski',
        definition: 'Bayern Munchen',
        image: 'https://i.ibb.co/9qrSXR1/lewandowski.gif'         
      },
      {
        deck_id: 9,
        term: 'Lukas Podolski',
        definition: 'Galatasaray',
        image: 'https://i.ibb.co/fktCNh5/podolski.gif'         
      },
      {
        deck_id: 9,
        term: 'Didier Drogba',
        definition: 'Retired, former FC: Montreal Impact',
        image: 'https://i.ibb.co/1ncZvQc/drogba.gif'         
      },
      {
        deck_id: 9,
        term: 'Ignacio Piatti',
        definition: 'Montreal Impact',
        image: 'https://i.ibb.co/sVhRBCR/piatti.gif'         
      },
      {
        deck_id: 9,
        term: 'Radamel Falcao',
        definition: 'Galatasaray',
        image: 'https://i.ibb.co/2Ztk9DL/falcao.gif'         
      },
      {
        deck_id: 10,
        term: 'Ash',
        definition: '',
        image: 'https://i.ibb.co/CsY1sqd/ash.gif'         
      },
      {
        deck_id: 10,
        term: 'Pikachu',
        definition: '',
        image: 'https://i.ibb.co/9V37Ybs/pickachu.gif'         
      },
      {
        deck_id: 10,
        term: 'Misty',
        definition: '',
        image: 'https://i.ibb.co/jJvx4KS/misty.gif'         
      },
      {
        deck_id: 10,
        term: 'Psyduck',
        definition: '',
        image: 'https://i.ibb.co/wRM7YNr/psyduck.gif'         
      },
      {
        deck_id: 10,
        term: 'Jigglypuff',
        definition: '',
        image: 'https://i.ibb.co/4JwPN65/jigglypuff.gif'         
      },
      {
        deck_id: 10,
        term: 'Snorlax',
        definition: '',
        image: 'https://i.ibb.co/Bj7YgVx/snorlax.gif'         
      },
      {
        deck_id: 10,
        term: 'Charmander',
        definition: '',
        image: 'https://i.ibb.co/vw1mFFQ/charmander.gif'         
      },
      {
        deck_id: 10,
        term: 'Bulbasaur',
        definition: '',
        image: 'https://i.ibb.co/2Yx4RD3/balbasaur.gif'         
      },
      {
        deck_id: 10,
        term: 'The Rocket Team',
        definition: '',
        image: 'https://i.ibb.co/w61BXvk/rocket-team.gif'         
      },
      {
        deck_id: 11,
        term: 'Chihuahua',
        definition: '',
        image: 'https://i.ibb.co/bPjL2hw/chihuahua.jpg'         
      },
      {
        deck_id: 11,
        term: 'Pug',
        definition: '',
        image: 'https://i.ibb.co/bF7mFHc/pug.jpg'         
      },
      {
        deck_id: 11,
        term: 'Husky',
        definition: '',
        image: 'https://i.ibb.co/rypWQzd/husky.jpg'         
      },
      {
        deck_id: 11,
        term: 'Beagle',
        definition: '',
        image: 'https://i.ibb.co/GTTpyWL/beagle.jpg'         
      },
      {
        deck_id: 11,
        term: 'Bull-terrier',
        definition: '',
        image: 'https://i.ibb.co/KXBz0KX/bull-terrier.jpg'         
      },
      {
        deck_id: 11,
        term: 'Golden Retriever',
        definition: '',
        image: 'https://i.ibb.co/hC848Cq/golden-retriever.jpg'         
      },
      {
        deck_id: 11,
        term: 'Labrador Retriever',
        definition: '',
        image: 'https://i.ibb.co/HrqqRXF/labrador-retriever.jpg'         
      },
      ]);
    }),
  ]);
};