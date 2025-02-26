import cars from "../../../data/cars";

export async function GET(request, { params }) {
    const { id } = params;
  
 
    // Find the article with the matching ID
    const car = cars.find((car) => car.id === parseInt(id));
  
    if (!car) {
      return new Response(JSON.stringify({ error: "car not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    return new Response(JSON.stringify(car), {
      headers: { "Content-Type": "application/json" },
    });
  }