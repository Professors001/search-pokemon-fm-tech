"use client";

import { useState, useCallback, useEffect } from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onSearch: (value: string) => void;
}

export function SearchInput({ value, onSearch }: SearchInputProps) {
  const [inputValue, setInputValue] = useState(value);

  // Sync internal state when prop value changes (e.g., when clicking evolution)
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSearch(inputValue.trim());
    },
    [inputValue, onSearch]
  );

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for a Pokémon..."
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 pr-12 text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-800"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
