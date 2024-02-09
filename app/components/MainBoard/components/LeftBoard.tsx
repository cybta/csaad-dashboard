'use client';
import React, { useState, useEffect } from 'react';
import { csGet } from '@/app/utils/fetcher';
import {
  Recipe,
  IngredientType,
  MeasurmentType,
  Ingredient,
} from '@/app/utils/types';
import Image from 'next/image';

const LeftBoard = () => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);
  const [measurements, setMeasurements] = useState<MeasurmentType[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [activeRecipeIndex, setActiveRecipeIndex] = useState<number>(0);
  const [baseUrl, setBaseUrl] = useState<string>('');

  useEffect(() => {
    const baseUrl = `${window.location.protocol}//${window.location.host}/`;

    setBaseUrl(baseUrl);

    csGet(`${baseUrl}/api/recipes/ingredients`, (data) => setIngredients(data));
    csGet(`${baseUrl}/api/recipes/measurments`, (data) =>
      setMeasurements(data)
    );
    csGet(`${baseUrl}/api/recipes/list`, (data: Recipe[]) => {
      setRecipes(data);
    });
  }, []);

  const getRecipes = (el: Recipe, index: number) => {
    if (activeRecipeIndex !== index) return;
    const itemIngredient: Ingredient[] = el.ingredients;

    const activeIngredients = itemIngredient.map((item) =>
      ingredients.find((ingredient) => ingredient.id === item.ingredient_id)
    );

    const activeMeasurements = itemIngredient.map((item) =>
      measurements.find((measurment) => measurment.id === item.measurement_id)
    );

    return (
      <div key={el.id} className='relative'>
        <Image
          alt={el.name}
          width='700'
          height='700'
          src={`/${el.main_image}`}
          className='rounded-tl-xl rounded-bl-xl object-contain w-full h-full flex'
        />
        <div className='absolute bottom-0 left-0 p-[30px]'>
          <div className={`text-xl font-bold`}>{el.name}</div>
          {activeIngredients && activeIngredients.length > 0 ? (
            <div>
              {activeIngredients.map((ing, i) => {
                const measurement = activeMeasurements[i];
                if (ing && measurement) {
                  return (
                    <div key={ing.id}>
                      <span>{itemIngredient[i].qty}</span>
                      <span>{measurement.display} </span>
                      <span>{ing.name}</span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  };

  const changeActiveRecipe = (index: number) => {
    setActiveRecipeIndex(index);
  };

  return (
    <div className='flex grow bg-primary-70 rounded-xl text-white'>
      {recipes && recipes.length > 0 ? (
        <div className='flex w-full h-full'>
          <div className='grow'>
            {recipes.map((el, i) => getRecipes(el, i))}
          </div>
          <div className='p-[30px]'>
            {recipes.map((el, i) => (
              <div
                key={el.id}
                className={`py-5 ${
                  i < recipes.length - 1 ? 'border-b border-b-white' : ''
                }`}
              >
                <button
                  onClick={() => changeActiveRecipe(i)}
                  className={`text-xl font-bold`}
                >
                  {el.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LeftBoard;
