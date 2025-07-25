const INDEXNOW_KEY = 'a85a2aefb8e24833bd53ce707ed5814f';
const SITE_URL = 'https://rollyparedes.net';

const urls = [
  'https://rollyparedes.net',
  'https://rollyparedes.net/sitemap.xml'
];

async function submitToIndexNow() {
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

    if (response.ok) {
      console.log('✅ URLs successfully submitted to IndexNow');
    } else {
      console.log('❌ IndexNow submission failed:', response.status);
    }
  } catch (error) {
    console.error('❌ IndexNow submission error:', error);
  }
}

submitToIndexNow();