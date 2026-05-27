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

const MODELS = [
  {
    name: 'Dacia Bigster',
    category: 'SUV',
    price: 'from 23,350 EUR',
    versions_count: 3,
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/bigster-db3l1-ph1/herozone/dacia-bigster-db3l1-ph1-hero-zone-background-desktop-001.jpg.ximg.largex2.webp/7caee35b86.webp',
  },
  {
    name: 'Dacia Duster',
    category: 'SUV',
    price: 'from 19,500 EUR',
    versions_count: 3,
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/duster-p1310/hero-zone/dacia-duster-p1310-hero-zone-background-desktop-003.jpg.ximg.largex2.webp/310f84027e.webp',
  },
  {
    name: 'Dacia Logan',
    category: 'Sedan',
    price: 'from 14,950 EUR',
    versions_count: 2,
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/logan/logan-li1-ph2/herozone-banners/dacia-logan-li1-ph2-herozone-background-001-desktop.jpg.ximg.largex2.webp/f7b183dd4d.webp',
  },
  {
    name: 'Dacia Jogger',
    category: 'MPV',
    price: 'from 19,000 EUR',
    versions_count: 3,
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/jogger/jogger-rfm-ph1/herozone/dacia-jogger-rfm-ph1-herozone-background-desktop-001.jpg.ximg.largex2.webp/d6f5e4c3b2.webp',
  },
  {
    name: 'Dacia Spring',
    category: 'Electric',
    price: 'from 18,900 EUR',
    versions_count: 2,
    image_url: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/spring/spring-k0-ph2/herozone/dacia-spring-k0-ph2-herozone-background-desktop-001.jpg.ximg.largex2.webp/c5e4d3b2a1.webp',
  },
];

/**
 * list_models action handler.
 *
 * Returns the full Dacia model lineup. structuredContent.models is the widget
 * key derived from actionName "list_models" (bare array outputSchema convention).
 */
module.exports = async () => {
  return {
    content: [{ type: 'text', text: `Here are the ${MODELS.length} available Dacia models.` }],
    structuredContent: { models: MODELS },
  };
};
