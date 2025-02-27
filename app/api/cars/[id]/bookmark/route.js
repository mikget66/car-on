import cars from "../../../../data/cars";

export async function POST(request, { params }) {
  try {
    const { id } = await params;
    const { userId } = await request.json();

    // Validate user ID
    if (!userId) {
      return new Response(JSON.stringify({ error: "User ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Find car
    const carIndex = cars.findIndex((car) => car.id === parseInt(id));
    if (carIndex === -1) {
      return new Response(JSON.stringify({ error: "Car not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Convert numeric IDs to numbers for backward compatibility
    const userIdValue = typeof userId === 'string' && !isNaN(userId) 
      ? parseInt(userId, 10)
      : userId;

    // Add bookmark if not exists
    const car = cars[carIndex];
    if (!car.bookmarked.includes(userIdValue)) {
      car.bookmarked.push(userIdValue);
    }

    return new Response(JSON.stringify({ success: true, bookmarked: car.bookmarked }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: `Internal server error: ${error}` }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}