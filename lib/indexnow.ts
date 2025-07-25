const INDEXNOW_KEY = '7a8b9c2d1e3f4g5h6i7j8k9l0m1n2o3p';
const SITE_URL = 'https://rollyparedes.net';

export async function submitToIndexNow(urls: string[]) {
  const payload = {
    host: 'rollyparedes.net',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    return response.ok;
  } catch (error) {
    console.error('IndexNow submission failed:', error);
    return false;
  }
}