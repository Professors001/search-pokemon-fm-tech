"use client";

import Image from "next/image";
import { Evolution } from "@/lib/graphql/types";

interface EvolutionLinkProps {
  evolution: Evolution;
  onClick: (name: string) => void;
}

export function EvolutionLink({ evolution, onClick }: EvolutionLinkProps) {
  return (
    <button
      onClick={() => onClick(evolution.name)}
      className="group flex flex-col items-center gap-2 rounded-lg border border-zinc-200 p-3 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
        {evolution.image && (
          <Image
            src={evolution.image}
            alt={evolution.name}
            fill
            className="object-contain p-1 transition-transform group-hover:scale-110"
            sizes="64px"
          />
        )}
      </div>
      <span className="text-sm font-medium capitalize text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
        {evolution.name}
      </span>
    </button>
  );
}
