"use client";

import React, { useState } from "react";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full space-x-2"
    >
      <input
        type="text"
        placeholder="what are you looking for?"
        className="p-2 border w-full rounded-md bg-[#f8f8f8] focus:border-gray-300 focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-primary border hidden lg:flex text-[#fff] rounded-md "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
