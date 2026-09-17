import { Star } from "lucide-react";

export function StarRating({ rating, className = "" }: { rating: number; className?: string }) {
  const safeRating = Math.max(0, Math.min(5, rating));

  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`Avaliação: ${safeRating} de 5 estrelas`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`size-4 ${index < safeRating ? "fill-accent text-accent" : "text-border"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}