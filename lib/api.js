export async function getAllPlayers() {
  const response = await fetch(`https://www.balldontlie.io/api/v1/players`);
  const playerData = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch players.");
  }

  return playerData;
}