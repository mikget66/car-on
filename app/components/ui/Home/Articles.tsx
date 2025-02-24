import Image from "next/image";

type Article = {
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

const carArticles = [
  {
    date: "2023-10-01",
    category: "Electric Vehicles",
    title: "The Rise of Electric Cars",
    description:
      "How electric vehicles are transforming the automotive industry and what to expect in the future.",
    image: "/images/the-rise-of-electric-cars.png",
  },
  {
    date: "2023-09-25",
    category: "Luxury Cars",
    title: "Top 10 Luxury Cars of 2023",
    description:
      "A look at the most luxurious and high-performance cars available this year.",
    image: "/images/top-10-luxurious.avif",
  },
  {
    date: "2023-09-20",
    category: "Classic Cars",
    title: "Restoring Vintage Cars: A Beginner's Guide",
    description:
      "Tips and tricks for restoring classic cars to their former glory.",
    image: "/images/Restoring-Vintage-Cars.jpg",
  },
  {
    date: "2023-09-15",
    category: "Sports Cars",
    title: "The Fastest Sports Cars in the World",
    description:
      "Discover the fastest and most powerful sports cars that dominate the roads.",
    image: "/images/The-Fastest-Sports-Cars.avif",
  },
  {
    date: "2023-09-10",
    category: "Car Maintenance",
    title: "Essential Car Maintenance Tips",
    description:
      "Keep your car running smoothly with these essential maintenance tips.",
    image: "/images/Essential-Car-Maintenance-Tips.webp",
  },
  {
    date: "2023-09-05",
    category: "Autonomous Vehicles",
    title: "The Future of Self-Driving Cars",
    description:
      "Exploring the technology behind autonomous vehicles and their potential impact on transportation.",
    image: "/images/The-Future-of-Self-Driving-Cars.jpg",
  },
];

const Articles = () => {
  return (
    <div className="col-span-3 flex flex-col gap-5 z-10">
      {carArticles.map((article: Article) => (
        <article
          className="bg-light p-8 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[400px]"
          key={article.title}
        >
          <div
            className="flex flex-col justify-start items-start gap-4"
            aria-label="content article"
          >
            <div className="flex gap-2 justify-start items-center">
              <span>{article.date}</span> <span>|</span>
              <span className="bg-white text-brandColor rounded px-2 py-1">
                {article.category}
              </span>
            </div>
            <h3 className="text-4xl font-bold">{article.title}</h3>
            <p className="text-textlight">{article.description}</p>
          </div>
          <div className="flex justify-end items-start">
            <div className="h-[300px] w-full overflow-hidden relative rounded-xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover hover:rotate-6 hover:scale-125 transition-all ease-in-out duration-150"
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Articles;
