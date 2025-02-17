'use client';

import { useEffect, useState } from 'react';
import { csGet, csPut } from '../utils/fetcher'; // Assuming you have a `csPut` function

interface PartsCateg {
  id: string;
  categ_title: string;
  categ_title_ru: string;
  list: Part[]; // Ensure this is always an array
}

interface Part {
  name: string;
  name_ru: string;
}

const Page = () => {
  const [categories, setCategories] = useState<PartsCateg[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [newPartName, setNewPartName] = useState('');
  const [newPartNameRu, setNewPartNameRu] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const fetchData = (query = '') => {
    setLoading(true);
    const baseUrl = `${window.location.protocol}//${window.location.host}`;
    const url = query
      ? `${baseUrl}/api/parts?search=${query}`
      : `${baseUrl}/api/parts`;

    csGet(url, (data: { parts: PartsCateg[] }) => {
      setCategories(data?.parts || []); // Ensure it's always an array
      setLoading(false);
      console.log('Fetched Data:', data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(searchTerm);
  };

  const handleAddPart = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCategory || !newPartName || !newPartNameRu) {
      setErrorMessage('All fields are required.');
      return;
    }

    const newPart = {
      name: newPartName,
      name_ru: newPartNameRu,
    };

    const url = `/api/parts/${selectedCategory}`; // Assuming the API endpoint includes category ID in the URL

    csPut(url, newPart, (data: { message: string; part: Part }) => {
      if (data.message === 'Item added successfully') {
        // Update the categories list after adding the part
        const updatedCategories = categories.map((category) =>
          category.id === selectedCategory
            ? { ...category, list: [...category.list, data.part] }
            : category
        );
        setCategories(updatedCategories);
        setNewPartName('');
        setNewPartNameRu('');
        setErrorMessage('');
      }
    });
  };

  return (
    <div className='flex flex-col gap-8 p-[30px]'>
      {/* Search Input */}
      <form onSubmit={handleSearch} className='flex gap-3 items-center'>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search parts...'
          className='border px-3 py-2 rounded-md'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md bg-primary-50'
        >
          Search
        </button>
      </form>

      {/* Loading Indicator */}
      {loading && <p>Loading...</p>}

      {/* Categories List */}
      {categories.length > 0 ? (
        categories.map((categ, i) => (
          <div key={categ.id || i} className='flex flex-col'>
            <div className='flex gap-3 font-bold text-lg'>
              <div>{categ.categ_title}</div>
              <div>{categ.categ_title_ru}</div>
            </div>

            <div className='flex flex-col'>
              {/* Ensure `categ.list` is an array before mapping */}
              {Array.isArray(categ.list) && categ.list.length > 0 ? (
                categ.list.map((el, index) => (
                  <div key={index} className='flex gap-3'>
                    <div>{el.name}</div>
                    <div>|</div>
                    <div>{el.name_ru}</div>
                  </div>
                ))
              ) : (
                <p>No parts in this category.</p>
              )}
            </div>
          </div>
        ))
      ) : !loading ? (
        <p>No parts found.</p>
      ) : null}

      {/* Add New Part Form */}
      <form onSubmit={handleAddPart} className='mt-8'>
        <h3 className='font-bold text-lg mb-4'>Add New Part</h3>

        {errorMessage && (
          <div className='text-red-500 mb-4'>{errorMessage}</div>
        )}

        <div className='flex gap-3 mb-4'>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='border px-3 py-2 rounded-md'
          >
            <option value=''>Select Category</option>
            {categories.map((categ) => (
              <option key={categ.id} value={categ.id}>
                {categ.categ_title}
              </option>
            ))}
          </select>
        </div>

        <div className='flex gap-3 mb-4'>
          <input
            type='text'
            value={newPartName}
            onChange={(e) => setNewPartName(e.target.value)}
            placeholder='Part Name (English)'
            className='border px-3 py-2 rounded-md w-full'
          />
        </div>

        <div className='flex gap-3 mb-4'>
          <input
            type='text'
            value={newPartNameRu}
            onChange={(e) => setNewPartNameRu(e.target.value)}
            placeholder='Part Name (Russian)'
            className='border px-3 py-2 rounded-md w-full'
          />
        </div>

        <button
          type='submit'
          className='bg-green-500 text-white px-4 py-2 rounded-md bg-primary-50'
        >
          Add Part
        </button>
      </form>
    </div>
  );
};

export default Page;
