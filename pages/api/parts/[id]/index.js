// pages/api/parts/[id].js

import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), '/pages/api/parts/data.json'); // File located at project root

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query; // Get the id from the URL query

    // Read the JSON file
    const parts = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Find the part with the matching id
    const part = parts.parts.find((p) => p.id === id);

    if (part) {
      // If the part is found, return it
      res.status(200).json(part);
    } else {
      // If no part is found, return a 404 status
      res.status(404).json({ message: `Part with id ${id} not found` });
    }
  } else if (req.method === 'PUT') {
    const { name, name_ru } = req.body; // Get name and name_ru from the request body

    if (!name || !name_ru) {
      return res
        .status(400)
        .json({ message: 'Name and name_ru are required.' });
    }

    const { id } = req.query; // Get the category ID from the URL query

    // Read the JSON file
    const parts = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Find the category matching the provided id
    const categoryIndex = parts.parts.findIndex((p) => p.id === id);

    if (categoryIndex === -1) {
      return res
        .status(404)
        .json({ message: `Category with id ${id} not found` });
    }

    // Add the new item to the list
    const newItem = {
      name: name,
      name_ru: name_ru,
    };

    parts.parts[categoryIndex].list.push(newItem);

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(parts, null, 2), 'utf-8');

    // Respond with the updated list
    res.status(200).json({
      message: 'Item added successfully',
      part: parts.parts[categoryIndex],
    });
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
