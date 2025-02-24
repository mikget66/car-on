// app/components/Articles.js
import Image from "next/image";
import Link from "next/link";

type Article = {
  id: number;
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

const Articles = async () => {
  try {
    // Fetch data from the API route
    const response = await fetch("http://localhost:3000/api/carArticles");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const carArticles = await response.json();

    return (
      <div className="col-span-3 flex flex-col gap-5 z-10">
        {carArticles.map((article: Article) => (
          <Link href={`/blogs/${article.id}`} key={article.title}>
            <article className="bg-light p-8 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[400px]">
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
                <h3 className="text-4xl font-bold hoverP">{article.title}</h3>
                <p className="text-textlight " >{article.description}</p>
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
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching car articles:", error);
    return <div>Error loading car articles. Please try again later.</div>;
  }
};

export default Articles;
