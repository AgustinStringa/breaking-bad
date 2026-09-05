/**
 * @typedef {Object} Phrase
 * @property {string} quote
 * @property {string} author
 * @property {number} id
 */

/**
 * Gets phrases from the configured API endpoint.
 *
 * @param {string} [url=import.meta.env.VITE_PHRASES_API_URL]
 * @returns {Promise<Phrase[]>}
 */
export async function getPhrases(
  url = import.meta.env.VITE_PHRASES_API_URL,
) {
  const response = await fetch(url, {
    mode: "cors",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Could not fetch phrases: ${response.status}`);
  }

  const payload = await response.json();
  const phrases = Array.isArray(payload) ? payload : payload.data;

  if (!Array.isArray(phrases)) {
    throw new Error("The phrases API returned an invalid response");
  }

  return phrases;
}

