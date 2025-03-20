import { PrismaClient } from '@prisma/client';

export async function GET(request) {
  const prisma = new PrismaClient();
  try {
    // Extract query parameters from the request URL
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const perPage = Math.max(1, parseInt(searchParams.get('per_page') || '10', 10));
    const category = searchParams.get('category');

    // Calculate pagination offset
    const skip = (page - 1) * perPage;

    // Define the filter condition (empty if no category is provided)
    const where = category ? { category: { equals: category, mode: 'insensitive' } } : {};

    // Fetch articles from the database, including author's name and avatar
    const articles = await prisma.article.findMany({
      where,
      skip,
      take: perPage,
      orderBy: { date: 'desc' },
      include: {
        author: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });

    // Return the articles as JSON
    return new Response(JSON.stringify(articles), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle any errors (e.g., database connection issues)
    return new Response(JSON.stringify({ error: `Internal server error: ${error}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    // Disconnect the Prisma client
    await prisma.$disconnect();
  }
}