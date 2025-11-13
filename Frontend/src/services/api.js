const API_BASE_URL = "https://api-elib.srminsider.live/api";

export const generateFingerprint = () => {
  const nav = window.navigator;
  const screen = window.screen;

  const fingerprint = [
    nav.userAgent,
    screen.height,
    screen.width,
    screen.colorDepth,
    new Date().getTimezoneOffset(),
    nav.language || nav.userLanguage,
    nav.hardwareConcurrency,
  ].join("|");

  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    hash = (hash << 5) - hash + fingerprint.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash).toString(36);
};

export const recordVisit = async () => {
  const fingerprint = generateFingerprint();
  try {
    const response = await fetch(`${API_BASE_URL}/visitors/record`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fingerprint }),
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to record visit:", error);
    throw error;
  }
};

export const getVisitorStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/visitors/stats`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch visitor stats:", error);
    throw error;
  }
};
