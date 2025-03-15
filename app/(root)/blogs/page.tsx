import Image from "next/image";
import Link from "next/link";
import baseUrl from '@/app/data/baseURL'


type Article = {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

const page = async () => {
  

  try {
    const response = await fetch(`${baseUrl}/api/carArticles`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const carArticles = await response.json();
    return (
      <div className="py-4">
        <div className="flex flex-col items-center text-center">
          <span className="uppercase font-semibold">Blog Page</span>
          <h2 className="text-4xl font-bold">
            Hello & Welcome 👋 to Our Car Blog
          </h2>
          <p className="text-lg text-textlight max-w-2xl">
            Stay updated with the latest car reviews, industry news, maintenance
            tips, and expert insights. Whether you&aposre a car enthusiast or a
            first-time buyer, we’ve got you covered!
          </p>
        </div>
        <div className="Container ">
          <div className=" blogsContainer">
            {carArticles.map((article: Article) => (
              <Link href={`/blogs/${article.id}`} key={article.title}>
                <article className="bg-light  rounded-xl grid overflow-hidden grid-cols-1 gap-4 min-h-[400px]">
                  <div className=" flex justify-end items-start">
                    <div className="h-[100px] lg:h-[300px] w-full relative ">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover "
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col justify-start items-start gap-4 p-2"
                    aria-label="content article"
                  >
                    <div className="flex gap-2 justify-start items-center">
                      <span>{article.date}</span> <span>|</span>
                      <span className="bg-white text-brandColor rounded px-2 py-1">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-4xl font-bold">
                      {article.title}
                    </h3>
                    <p className="text-textlight ">{article.description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching car articles:", error);
    return <div>Error loading car articles. Please try again later.</div>;
  }
};
export default page;
