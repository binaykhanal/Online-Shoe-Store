import React, { useState } from "react";

const DropDown = ({ category, categories, handleCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (category) => {
    handleCategoryChange(category);
    setIsOpen(false); // Close the dropdown after a category is selected
  };

  return (
    <div>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state on button click
      >
        {category}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className=" origin-top-right top-[40px] absolute right-0 mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {categories.map((cat) => (
              <div
                key={cat}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                role="menuitem"
                onClick={() => onClick(cat)}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
