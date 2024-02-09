const measurements = [
  {
    id: 'm-l',
    name: 'liter',
    display: 'ltr',
  },
  {
    id: 'm-ml',
    name: 'Milli Liter',
    display: 'mltr',
  },
  {
    id: 'm-kg',
    name: 'Kilo Grams',
    display: 'kg',
  },
  {
    id: 'm-g',
    name: 'Grams',
    display: 'g',
  },
  {
    id: 'm-mg',
    name: 'Milli Grams',
    display: 'mg',
  },
  {
    id: 'm-p',
    name: 'Piece',
    display: 'piece',
  },
  {
    id: 'm-tbsp',
    name: 'Table Spoon',
    display: 'tbsp',
  },
  {
    id: 'm-tsp',
    name: 'Tea Spoon',
    display: 'tsp',
  },
  {
    id: 'm-cup',
    name: 'Cup',
    display: 'cup',
  },
];

export default function handler(req, res) {
  res.status(200).json(measurements);
}
