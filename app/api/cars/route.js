import cars from "../../data/cars";

export async function GET() {

  return new Response(JSON.stringify(cars), {
    headers: { "Content-Type": "application/json" },
  });
}
