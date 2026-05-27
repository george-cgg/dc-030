/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const MODELS = {
  Bigster: {
    name: 'Dacia Bigster',
    category: 'SUV',
    price: 'from 23,350 EUR',
    description: 'The largest Dacia SUV with Hybrid-G 150 4x4 capability, 702L trunk, and up to 1,400kg towing capacity.',
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/bigster-db3l1-ph1/herozone/dacia-bigster-db3l1-ph1-hero-zone-background-desktop-001.jpg.ximg.largex2.webp/7caee35b86.webp',
    engine_options: [
      { name: 'TCe 140', power: '140 hp' },
      { name: 'Hybrid-G 150 4x4', power: '150 hp' },
    ],
    versions: [
      { name: 'Essential', price: 'from 23,350 EUR' },
      { name: 'Expression', price: 'from 26,100 EUR' },
      { name: 'Extreme', price: 'from 30,200 EUR' },
    ],
  },
  Duster: {
    name: 'Dacia Duster',
    category: 'SUV',
    price: 'from 19,500 EUR',
    description: 'Compact SUV with Hybrid-G 150 4x4, 217mm ground clearance, and proven off-road capability.',
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/duster-p1310/hero-zone/dacia-duster-p1310-hero-zone-background-desktop-003.jpg.ximg.largex2.webp/310f84027e.webp',
    engine_options: [
      { name: 'TCe 130', power: '130 hp' },
      { name: 'Hybrid-G 150 4x4', power: '150 hp' },
    ],
    versions: [
      { name: 'Essential', price: 'from 19,500 EUR' },
      { name: 'Expression', price: 'from 22,300 EUR' },
      { name: 'Extreme', price: 'from 27,000 EUR' },
    ],
  },
  Logan: {
    name: 'Dacia Logan',
    category: 'Sedan',
    price: 'from 14,950 EUR',
    description: 'Practical sedan with Eco-G 120 GPL engine offering up to 1,500km combined range.',
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/logan/logan-li1-ph2/herozone-banners/dacia-logan-li1-ph2-herozone-background-001-desktop.jpg.ximg.largex2.webp/f7b183dd4d.webp',
    engine_options: [
      { name: 'SCe 65', power: '65 hp' },
      { name: 'Eco-G 100 GPL', power: '100 hp' },
      { name: 'Eco-G 120 GPL', power: '120 hp' },
    ],
    versions: [
      { name: 'Essential', price: 'from 14,950 EUR' },
      { name: 'Expression', price: 'from 17,200 EUR' },
    ],
  },
  Sandero: {
    name: 'Dacia Sandero',
    category: 'Hatchback',
    price: 'from 12,900 EUR',
    description: "Europe's best-selling car — practical, affordable, and available with GPL bi-fuel engine.",
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/sandero/sandero-b52-ph2/herozone/dacia-sandero-b52-ph2-herozone-background-desktop-001.jpg.ximg.largex2.webp/a3c2e1d0f5.webp',
    engine_options: [
      { name: 'SCe 65', power: '65 hp' },
      { name: 'TCe 90', power: '90 hp' },
      { name: 'Eco-G 100 GPL', power: '100 hp' },
    ],
    versions: [
      { name: 'Essential', price: 'from 12,900 EUR' },
      { name: 'Expression', price: 'from 15,400 EUR' },
    ],
  },
  'Sandero Stepway': {
    name: 'Dacia Sandero Stepway',
    category: 'Crossover',
    price: 'from 15,900 EUR',
    description: 'The crossover version of Sandero with raised ride height, roof bars, and rugged styling.',
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/sandero/sandero-stepway-b52-ph2/herozone/dacia-sandero-stepway-b52-ph2-herozone-background-desktop-001.jpg.ximg.largex2.webp/b4d3f2e1a6.webp',
    engine_options: [
      { name: 'TCe 90', power: '90 hp' },
      { name: 'Eco-G 100 GPL', power: '100 hp' },
    ],
    versions: [
      { name: 'Expression', price: 'from 15,900 EUR' },
      { name: 'Extreme', price: 'from 18,500 EUR' },
    ],
  },
  Spring: {
    name: 'Dacia Spring',
    category: 'Electric',
    price: 'from 18,900 EUR',
    description: '100% electric city car with 225km WLTP range, 315km urban range, and fast-charge support.',
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/spring/spring-k0-ph2/herozone/dacia-spring-k0-ph2-herozone-background-desktop-001.jpg.ximg.largex2.webp/c5e4d3b2a1.webp',
    engine_options: [
      { name: 'Electric 65', power: '65 hp' },
      { name: 'Electric 83', power: '83 hp' },
    ],
    versions: [
      { name: 'Essential', price: 'from 18,900 EUR' },
      { name: 'Expression', price: 'from 20,500 EUR' },
    ],
  },
  Jogger: {
    name: 'Dacia Jogger',
    category: 'MPV',
    price: 'from 19,000 EUR',
    description: 'Versatile family vehicle available with 5 or 7 seats, Hybrid 155 engine, and 708L boot.',
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/jogger/jogger-rfm-ph1/herozone/dacia-jogger-rfm-ph1-herozone-background-desktop-001.jpg.ximg.largex2.webp/d6f5e4c3b2.webp',
    engine_options: [
      { name: 'TCe 110', power: '110 hp' },
      { name: 'Eco-G 100 GPL', power: '100 hp' },
      { name: 'Hybrid 155', power: '155 hp' },
    ],
    versions: [
      { name: 'Essential', price: 'from 19,000 EUR' },
      { name: 'Expression', price: 'from 21,800 EUR' },
      { name: 'Extreme', price: 'from 25,500 EUR' },
    ],
  },
};

/**
 * get_model_details action handler.
 *
 * Returns detailed specs for a single Dacia model.
 * structuredContent.models — widget key derived from actionName "get_model_details" (bare array outputSchema rule)
 *
 * @param {string} model_name - Dacia model name (Bigster, Duster, Logan, Sandero, Sandero Stepway, Spring, Jogger)
 */
module.exports = async ({ model_name }) => {
  const model = MODELS[model_name];

  if (!model) {
    return {
      content: [{ type: 'text', text: `Model "${model_name}" not found. Available models: ${Object.keys(MODELS).join(', ')}.` }],
    };
  }

  return {
    content: [{ type: 'text', text: `Here are the details for ${model.name}.` }],
    structuredContent: { models: model },
  };
};
