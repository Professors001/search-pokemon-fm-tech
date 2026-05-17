"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { GET_POKEMON } from "@/lib/graphql/queries";
import { GetPokemonResponse } from "@/lib/graphql/types";
import { SearchInput } from "@/components/SearchInput";
import { PokemonCard } from "@/components/PokemonCard";
import { PokemonSkeleton } from "@/components/PokemonSkeleton";
import { NotFound } from "@/components/NotFound";

function PokemonSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(() => {
    const name = searchParams.get("name");
    return name || "";
  });

  const { data, loading, error } = useQuery<GetPokemonResponse>(GET_POKEMON, {
    variables: { name: searchTerm.toLowerCase() },
    skip: !searchTerm,
  });

  // Update search term when URL changes
  useEffect(() => {
    const name = searchParams.get("name");
    if (name !== null) {
      setSearchTerm(name);
    }
  }, [searchParams]);

  const handleSearch = useCallback(
    (value: string) => {
      if (value) {
        const params = new URLSearchParams(searchParams);
        params.set("name", value.toLowerCase());
        router.push(`?${params.toString()}`);
      } else {
        router.push("?");
      }
    },
    [router, searchParams]
  );

  const handleEvolutionClick = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams);
      params.set("name", name.toLowerCase());
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className="flex min-h-full flex-col items-center px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Pokémon Search
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Search for your favorite Pokémon
        </p>
      </header>

      <div className="mb-8 w-full max-w-md">
        <SearchInput value={searchTerm} onSearch={handleSearch} />
      </div>

      <main className="w-full max-w-2xl">
        {loading && <PokemonSkeleton />}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400">
            <p className="font-medium">Error loading Pokémon</p>
            <p className="text-sm">{error.message}</p>
          </div>
        )}

        {!loading && !error && data?.pokemon === null && searchTerm && (
          <NotFound searchTerm={searchTerm} />
        )}

        {!loading && !error && data?.pokemon && (
          <PokemonCard
            pokemon={data.pokemon}
            onEvolutionClick={handleEvolutionClick}
          />
        )}

        {!searchTerm && !loading && (
          <div className="py-16 text-center">
            <p className="text-zinc-500 dark:text-zinc-500">
              Enter a Pokémon name to get started
            </p>
            <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-600">
              Try searching for Pikachu, Charizard, or Bulbasaur
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-full flex-col items-center px-4 py-8">
          <header className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Pokémon Search
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Search for your favorite Pokémon
            </p>
          </header>
          <div className="mb-8 w-full max-w-md">
            <div className="h-12 w-full animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <PokemonSkeleton />
        </div>
      }
    >
      <PokemonSearch />
    </Suspense>
  );
}
