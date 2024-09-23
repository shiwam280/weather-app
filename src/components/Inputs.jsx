import { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const citySuggestions = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Mumbai",
  "Berlin",
  "Sydney",
  "Toronto",
];

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city !== "") setQuery({ q: city });
  };

  // Handle input change to filter suggestions
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCity(inputValue);

    // Filter suggestions based on user input
    const filtered = citySuggestions.filter((city) =>
      city.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true); // Show suggestions dropdown
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setShowSuggestions(false); // Hide suggestions dropdown after selection
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-col w-3/4 relative">
        <div className="flex flex-row items-center justify-center space-x-4">
          <input
            value={city}
            onChange={handleInputChange}
            type="text"
            placeholder="search by city..."
            className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
          />
          <BiSearch
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearch}
          />
        </div>

        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="absolute z-10 w-[534px] bg-white shadow-lg max-h-48 overflow-y-auto mt-12">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="cursor-pointer p-2 hover:bg-gray-200 text-gray-800"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          &#176;C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          &#176;F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
