export const GET = async () => {
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN;
  const ALBUM_ID = '1163521439110637'; // Cupcakes album ID

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${ALBUM_ID}/photos?fields=source,created_time,link&limit=12&access_token=${ACCESS_TOKEN}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Facebook API error:', errorData);
      return new Response(JSON.stringify({ error: 'Failed to fetch photos' }), { status: 500 });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data.data), { status: 200 });
  } catch (error) {
    console.error('Error fetching photos:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
