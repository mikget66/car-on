import Image from "next/image";
import markdownit from "markdown-it";

const Page = async ({ params }: { params: { id: number } }) => {
  const md = markdownit();

  try {
    // Fetch data from the API route
    const response = await fetch(
      `http://localhost:3000/api/carArticles/${params.id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const Article = await response.json();
    const parsedContent = md.render(Article?.content);
    console.log(Article)
    return (
      <div className="flex flex-col items-center py-5 gap-3">
        <h2 className="text-center text-3xl bg-light p-3 shadow-lg">
          {Article.title}
        </h2>
        <p className="text-textlight">{Article.description}</p>
        <div className="Container ">
          <div className="h-[200px] lg:h-[650px] w-full overflow-hidden relative rounded-xl">
            <Image
              src={Article.image}
              alt={Article.title}
              fill
              className="object-cover"
            />

          </div>

          {parsedContent ? (
              <article
                className="prose break-all article max-w-5xl"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />
            ) : (
              <p className="no-result ">No details provided</p>
            )}
            <span className="text-brandColor">{Article.author}</span>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching car articles:", error);
    return <div>Error loading car articles. Please try again later.</div>;
  }
};

export default Page;
