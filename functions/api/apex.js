
export async function onRequestGet({ env }) {
  const player = "Alexmufasa";

  if (!env.APEX_API_KEY) {
    return Response.json({
      ok: false,
      error: "API_KEY_MISSING"
    }, { status: 503 });
  }

  const url = new URL(
    "https://api.apexlegendsstatus.com/bridge"
  );

  url.searchParams.set("auth", env.APEX_API_KEY);
  url.searchParams.set("player", player);
  url.searchParams.set("platform", "PC");
  url.searchParams.set("version", "5");

  try {
    const response = await fetch(url, {
      headers: { "Accept": "application/json" }
    });

    const data = await response.json();

    return Response.json({
      ok: response.ok,
      player,
      platform: "PC",
      fetchedAt: new Date().toISOString(),
      source: "Apex Legends Status",
      data
    }, {
      status: response.ok ? 200 : response.status,
      headers: {
        "Cache-Control": "public, max-age=60"
      }
    });
  } catch {
    return Response.json({
      ok: false,
      error: "UPSTREAM_UNAVAILABLE"
    }, { status: 502 });
  }
}
