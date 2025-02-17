import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), '/pages/api/parts/data.json'); // File located at project root

export default function handler(req, res) {
  // Read the data from the file
  const parts = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Get the search query from the request, if provided
  const { search } = req.query;

  if (search) {
    // Map through the parts and filter the list
    const filteredParts = parts.parts
      .map((part) => {
        // Filter the list based on the search term
        const filteredList = part.list?.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

        // Only return the part if there are matching items in the list
        if (filteredList && filteredList.length > 0) {
          return {
            ...part, // Retain the original part properties
            list: filteredList, // Replace list with filtered items
          };
        }
        return null; // If no matches, return null
      })
      .filter((part) => part !== null); // Remove null entries from the result

    // Return the filtered list
    res.status(200).json({ parts: filteredParts });
  } else {
    // If no search query, return all parts
    res.status(200).json(parts);
  }
}
