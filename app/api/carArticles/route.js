import carArticles from "../../data/carArticles";

export async function GET() {

  return new Response(JSON.stringify(carArticles), {
    headers: { "Content-Type": "application/json" },
  });
}
