const list = [
  {
    id: 'rec-hummus',
    name: 'Hummus',
    main_image: 'assets/img/recipes/hummus.jpg',
    ingredients: [
      {
        ingredient_id: 'i-chickpease',
        measurement_id: 'm-g',
        qty: 500,
      },
      {
        ingredient_id: 'i-ice',
        measurement_id: 'm-g',
        qty: 70,
      },
      {
        ingredient_id: 'i-tahini',
        measurement_id: 'm-g',
        qty: 250,
      },
      {
        ingredient_id: 'i-sault',
        measurement_id: 'm-tsp',
        qty: 1,
      },
      {
        ingredient_id: 'i-lemon',
        measurement_id: 'm-g',
        qty: 75,
      },
    ],
    preparation: [
      {
        name: 'Boil the Chickpease',
        image_url: 'img',
        time: 120,
        description: 'boil the Chickpease until it reaches the image attached',
      },
      {
        name: 'Relax time',
        image_url: 'img',
        time: 5,
        description: 'let the Chickpease relax for 5 min',
      },
      {
        name: 'Sault',
        image_url: 'img',
        description: 'add the sault',
      },
      {
        name: 'Blend the Chickpease',
        image_url: 'img',
        time: 2,
        description:
          'Blend the Chickpease until it becomes with the consistncy in the photo',
      },
      {
        name: 'Add the ice',
        image_url: 'img',
        description:
          'add the ice cubes to give it a liter texture and blend again',
      },
      {
        name: 'Add the Tahini',
        image_url: 'img',
        time: 2,
        description: 'add the tahini and blend again',
      },
      {
        name: 'Add the Lemon',
        image_url: 'img',
        time: 2,
        description: 'add the Lemon and blend again',
      },
      {
        name: 'Voila!',
        image_url: 'img',
      },
    ],
  },
  {
    id: 'rec-toumsauce',
    name: 'Lebanese Toum Sauce',
    main_image: 'assets/img/recipes/garlic-sauce.jpg',
    ingredients: [
      {
        ingredient_id: 'i-garlic',
        measurement_id: 'm-g',
        qty: 150,
      },
      {
        ingredient_id: 'i-sunfloweroil',
        measurement_id: 'm-g',
        qty: 600,
      },
      {
        ingredient_id: 'i-lemon',
        measurement_id: 'm-g',
        qty: 135,
      },
      {
        ingredient_id: 'i-sault',
        measurement_id: 'm-tsp',
        qty: 1,
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(list);
}
