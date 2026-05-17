export function PokemonSkeleton() {
  return (
    <div className="w-full max-w-2xl animate-pulse">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="h-32 w-32 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
        <div className="space-y-2">
          <div className="h-8 w-48 rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-6 w-16 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mb-6 space-y-2">
        <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Attacks */}
      <div className="mb-6 space-y-3">
        <div className="h-6 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="grid gap-2 sm:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-12 rounded-lg bg-zinc-200 dark:bg-zinc-800"
            />
          ))}
        </div>
      </div>

      {/* Evolutions */}
      <div className="space-y-3">
        <div className="h-6 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="flex gap-4">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="h-20 w-20 rounded-lg bg-zinc-200 dark:bg-zinc-800"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
