export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get("url");
    if (!target) return new Response("Missing 'url' param", { status: 400 });

    const res = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'http://example.com',
        'Origin': 'http://example.com'
      }
    });

    const headers = new Headers(res.headers);
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Headers", "*");

    return new Response(res.body, {
      status: res.status,
      headers
    });
  }
}
