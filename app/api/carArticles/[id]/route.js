import { PrismaClient } from '@prisma/client';

export async function GET(request, { params }) {
  const prisma = new PrismaClient();
  try {
    // Extract and validate the ID from the URL parameters
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return new Response(JSON.stringify({ error: 'Invalid article ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Fetch the article from the database
    const article = await prisma.article.findUnique({
      where: { id },
    });

    // Check if the article exists
    if (!article) {
      return new Response(JSON.stringify({ error: 'Article not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Return the article as JSON
    return new Response(JSON.stringify(article), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle any errors (e.g., database connection issues)
    return new Response(JSON.stringify({ error: `Internal server error:${error}`}), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    // Disconnect the Prisma client
    await prisma.$disconnect();
  }
}