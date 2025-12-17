import { Sound } from '../types';

export const sounds: Sound[] = [
  // Doğa Sesleri
  {
    id: 'rain',
    title: 'Yağmur',
    category: 'Doğa',
    url: require('../../assets/sounds/rain.mp3'),
    duration: 120,
    description: 'Rahatlatıcı yağmur sesi.',
  },
  {
    id: 'birds',
    title: 'Kuşlar',
    category: 'Doğa',
    url: require('../../assets/sounds/birds.mp3'),
    duration: 120,
    description: 'Ormanda kuş cıvıltıları.',
  },
  {
    id: 'wind',
    title: 'Rüzgar',
    category: 'Doğa',
    url: require('../../assets/sounds/wind.mp3'),
    duration: 120,
    description: 'Hafif esen rüzgar.',
  },
  {
    id: 'ocean',
    title: 'Okyanus',
    category: 'Doğa',
    url: require('../../assets/sounds/ocean.mp3'),
    duration: 120,
    description: 'Dalga sesleri.',
  },
  {
    id: 'thunder',
    title: 'Gök Gürültüsü',
    category: 'Doğa',
    url: require('../../assets/sounds/thunder.mp3'),
    duration: 120,
    description: 'Uzaklardan gelen gök gürültüsü.',
  },
  {
    id: 'night',
    title: 'Gece',
    category: 'Doğa',
    url: require('../../assets/sounds/night.mp3'),
    duration: 120,
    description: 'Gece böcekleri ve sessizlik.',
  },

  // Rahatlama Sesleri
  {
    id: 'fireplace',
    title: 'Şömine',
    category: 'Rahatlama',
    url: require('../../assets/sounds/fireplace.mp3'),
    duration: 120,
    description: 'Çıtırdayan ateş sesi.',
  },

  // Ortam Sesleri
  {
    id: 'cafe',
    title: 'Kafe',
    category: 'Ortam',
    url: require('../../assets/sounds/cafe.mp3'),
    duration: 120,
    description: 'Kafe ortamı ve insan sesleri.',
  },
  {
    id: 'train',
    title: 'Tren Kabini',
    category: 'Ortam',
    url: require('../../assets/sounds/train.mp3'),
    duration: 120,
    description: 'Tren iç kabin sesi ve ray tıkırtıları.',
  },

  // Bebek Sesleri (White Noise)
  {
    id: 'hairdryer',
    title: 'Fön Makinesi',
    category: 'Bebek',
    url: require('../../assets/sounds/hairdryer.mp3'),
    duration: 120,
    description: 'Sakinleştirici fön makinesi sesi.',
  },
  {
    id: 'womb',
    title: 'Anne Karnı',
    category: 'Bebek',
    url: require('../../assets/sounds/womb.mp3'),
    duration: 120,
    description: 'Rahmden duyulan sesler.',
  },
  {
    id: 'vacuum',
    title: 'Elektrikli Süpürge',
    category: 'Bebek',
    url: require('../../assets/sounds/vacuum.mp3'),
    duration: 120,
    description: 'Elektrikli süpürge sesi.',
  },
  {
    id: 'shush',
    title: 'Pış Pış Sesi',
    category: 'Bebek',
    url: require('../../assets/sounds/shush.mp3'),
    duration: 120,
    description: 'Bebeği sakinleştiren şşş sesi.',
  },
];

export const categories = ['Hepsi', ...new Set(sounds.map((s) => s.category))];
