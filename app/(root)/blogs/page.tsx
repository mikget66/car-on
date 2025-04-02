"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ArticleSkeleton from "@/app/components/ui/skeletons/ArticleSkeleton";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

type Article = {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: "string";
  };
};

const filters = ["all", "Maintenance", "Innovations", "news", "electric"];

const Page = () => {
  const [filter, setFilter] = useState<string>("all");
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        let url = `${baseUrl}api/carArticles?page=1&per_page=10`;
        if (filter !== "all") {
          url += `&category=${filter}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [filter]);

  const formatted = (date: string | number | Date) => {
    const fDate = new Date (date);


    return `${fDate.getDate()}-${fDate.getMonth()+1}-${fDate.getFullYear()}`


  };

  return (
    <div className="">
      <div className="bg-blogImage flex flex-col justify-center items-center text-center min-h-[800px] bg-no-repeat bg-cover bg-center ">
        <span className="uppercase font-semibold">Blog Page</span>
        <h2 className="text-4xl font-bold">
          Hello & Welcome 👋 to Our Car Blog
        </h2>
        <p className="text-lg text-textlight max-w-2xl">
          Stay updated with the latest car reviews, industry news, maintenance
          tips, and expert insights. Whether you&apos;re a car enthusiast or a
          first-time buyer, we’ve got you covered!
        </p>
      </div>
      <div className="Container flex flex-col gap-3  pb-3">
        <h2 className="text-3xl">
          Our{" "}
          <span className='font-caveatRegular text-brandColor text-4xl'>
            blogs
          </span>
        </h2>
        <p>Find every thing you need to know about cars</p>
        <div className="flex justify-between">
          <div className="flex gap-2 flex-wrap">
            {filters.map((categoryFilter: string, index: number) => (
              <span
                key={index}
                className={`p-1 rounded-md ${
                  categoryFilter === filter
                    ? "bg-brandColor/100"
                    : "bg-brandColor/50"
                } cursor-pointer`}
                onClick={() => {
                  setFilter(categoryFilter);
                  console.log("Filter set to:", categoryFilter);
                }}
              >
                {categoryFilter}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {isLoading
            ? Array(6)
                .fill(null)
                .map((_, index) => <ArticleSkeleton key={index} />)
            : articles.map((article: Article) => (
                <article
                  key={article.title}
                  className="bg-light p-4 md:p-8 rounded-xl grid grid-cols-1 gap-4 "
                >
                  <Link href={`/blogs/${article.id}`}>
                    <div className="flex justify-end items-start relative">
                      <span className="absolute top-2 left-2 z-[1] rounded-full p-1 bg-brandColor/80">
                        {article.category}
                      </span>
                      <div className="h-[200px] sm:h-[250px] md:h-[180px] lg:h-[300px] w-full overflow-hidden relative rounded-xl">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="">
                      <span>{formatted(article.date)}</span>
                    </div>
                    <div
                      className="flex flex-col justify-start items-start gap-4"
                      aria-label="content article"
                    >
                      <h3 className="text-2xl font-bold">{article.title}</h3>
                      <p className="text-textlight">{article.description}</p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-5">
                    <div className="h-[40px] w-[40px] overflow-hidden relative rounded-full">
                      <Image
                        src={article.author.avatar}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>{article.author.name}</span>
                  </div>
                </article>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
