import { SearchX } from "lucide-react";

interface NotFoundProps {
  searchTerm: string;
}

export function NotFound({ searchTerm }: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <SearchX className="h-16 w-16 text-zinc-400 dark:text-zinc-600" />
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        No Pokémon found
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        We couldn&apos;t find a Pokémon matching &quot;{searchTerm}&quot;
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        Try searching for names like Pikachu, Charizard, or Bulbasaur
      </p>
    </div>
  );
}
