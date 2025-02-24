import carArticles from "../../../data/carArticles";

export async function GET(request, { params }) {
    const { id } = params;
  
 
    // Find the article with the matching ID
    const article = carArticles.find((article) => article.id === parseInt(id));
  
    if (!article) {
      return new Response(JSON.stringify({ error: "Article not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    return new Response(JSON.stringify(article), {
      headers: { "Content-Type": "application/json" },
    });
  }