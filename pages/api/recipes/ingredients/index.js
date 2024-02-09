const ingredients = [
  {
    id: 'i-chickpease',
    name: 'Chickpease',
    measurement: ['m-kg', 'm-g'],
    icon: 'Chickpease',
  },
  {
    id: 'i-lemon',
    name: 'Lemon',
    measurement: ['m-ml', 'm-l', 'm-g'],
    icon: 'Lemon',
  },
  {
    id: 'i-sunfloweroil',
    name: 'Sunflower Oil',
    measurement: ['m-g', 'm-ml', 'm-l'],
    icon: 'Sunfloweroil',
  },
  {
    id: 'i-garlic',
    name: 'Garlic',
    measurement: ['m-g', 'm-kg', 'm-p'],
    icon: 'Garlic',
  },
  {
    id: 'i-sault',
    name: 'Sault',
    measurement: ['m-g', 'm-tbsp', 'm-tsp'],
    icon: 'Sault',
  },
  {
    id: 'i-tahini',
    name: 'Tahini',
    measurement: ['m-g', 'm-tbsp', 'm-ml', 'm-l'],
    icon: 'Tahini',
  },
  {
    id: 'i-ice',
    name: 'Ice',
    measurement: ['m-g'],
    icon: 'Ice',
  },
];

export default function handler(req, res) {
  res.status(200).json(ingredients);
}
