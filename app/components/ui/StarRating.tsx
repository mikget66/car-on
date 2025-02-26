"use client"
interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div
      className="Stars"
      style={{ "--rating": rating } as React.CSSProperties}
      aria-label={`Rating of this product is ${rating} out of 5.`}
    >
      <style jsx>{`
        .Stars {
          --percent: calc(var(--rating) / 5 * 100%);
          display: inline-block;
          font-size: 1rem;
          font-family: Times;
          line-height: 1;
          position: relative;
        }

        .Stars::before {
          content: "★★★★★";
          letter-spacing: 3px;
          background: linear-gradient(
            90deg,
            #fc0 var(--percent),
            #fff var(--percent)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 768px) {
          .Stars {
            font-size: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default StarRating;
