"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import { Pokemon } from "@/lib/graphql/types";
import { EvolutionLink } from "./EvolutionLink";

interface PokemonCardProps {
  pokemon: Pokemon;
  onEvolutionClick: (name: string) => void;
}

function getTypeColor(type: string): string {
  const colors: Record<string, string> = {
    Grass: "bg-green-500 text-white",
    Fire: "bg-red-500 text-white",
    Water: "bg-blue-500 text-white",
    Electric: "bg-yellow-400 text-black",
    Psychic: "bg-pink-500 text-white",
    Ice: "bg-cyan-300 text-black",
    Dragon: "bg-purple-600 text-white",
    Dark: "bg-gray-800 text-white",
    Fairy: "bg-pink-300 text-black",
    Normal: "bg-gray-400 text-black",
    Fighting: "bg-orange-700 text-white",
    Flying: "bg-indigo-300 text-black",
    Poison: "bg-purple-500 text-white",
    Ground: "bg-yellow-600 text-white",
    Rock: "bg-yellow-700 text-white",
    Bug: "bg-lime-500 text-black",
    Ghost: "bg-purple-800 text-white",
    Steel: "bg-gray-500 text-white",
  };
  return colors[type] || "bg-gray-400 text-black";
}

export const PokemonCard = memo(function PokemonCard({
  pokemon,
  onEvolutionClick,
}: PokemonCardProps) {
  const fastAttacks = useMemo(
    () => pokemon.attacks?.fast || [],
    [pokemon.attacks]
  );
  const specialAttacks = useMemo(
    () => pokemon.attacks?.special || [],
    [pokemon.attacks]
  );
  const evolutions = useMemo(
    () => pokemon.evolutions || [],
    [pokemon.evolutions]
  );

  return (
    <div className="w-full max-w-2xl rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {/* Header Section */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
          {pokemon.image && (
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              fill
              className="object-contain p-2"
              sizes="128px"
            />
          )}
        </div>
        <div className="flex-1">
          <div className="mb-1 flex items-baseline gap-2">
            <h1 className="text-2xl font-bold capitalize text-zinc-900 dark:text-zinc-100">
              {pokemon.name}
            </h1>
            <span className="text-lg text-zinc-500 dark:text-zinc-400">
              #{pokemon.number}
            </span>
          </div>
          <p className="mb-3 text-zinc-600 dark:text-zinc-400">
            {pokemon.classification}
          </p>
          <div className="flex flex-wrap gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`rounded-full px-3 py-1 text-sm font-medium ${getTypeColor(type)}`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Physical Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Height</p>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            {pokemon.height.minimum} - {pokemon.height.maximum}
          </p>
        </div>
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Weight</p>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            {pokemon.weight.minimum} - {pokemon.weight.maximum}
          </p>
        </div>
      </div>

      {/* Attacks Section */}
      {(fastAttacks.length > 0 || specialAttacks.length > 0) && (
        <div className="mb-6">
          <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Attacks
          </h2>

          {fastAttacks.length > 0 && (
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Fast Attacks
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {fastAttacks.map((attack) => (
                  <div
                    key={attack.name}
                    className="flex items-center justify-between rounded-lg border border-zinc-200 p-3 dark:border-zinc-700"
                  >
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {attack.name}
                    </span>
                    <div className="flex items-center gap-2 text-sm">
                      <span
                        className={`rounded px-2 py-0.5 text-xs ${getTypeColor(attack.type)}`}
                      >
                        {attack.type}
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400">
                        {attack.damage} dmg
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {specialAttacks.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Special Attacks
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {specialAttacks.map((attack) => (
                  <div
                    key={attack.name}
                    className="flex items-center justify-between rounded-lg border border-zinc-200 p-3 dark:border-zinc-700"
                  >
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {attack.name}
                    </span>
                    <div className="flex items-center gap-2 text-sm">
                      <span
                        className={`rounded px-2 py-0.5 text-xs ${getTypeColor(attack.type)}`}
                      >
                        {attack.type}
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400">
                        {attack.damage} dmg
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Evolutions Section */}
      {evolutions.length > 0 && (
        <div>
          <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Evolutions
          </h2>
          <div className="flex flex-wrap gap-4">
            {evolutions.map((evolution) => (
              <EvolutionLink
                key={evolution.id}
                evolution={evolution}
                onClick={onEvolutionClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
});
