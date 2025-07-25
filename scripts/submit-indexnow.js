const INDEXNOW_KEY = '3da1000b90204433bfd0cb37fcc60829';
const SITE_URL = 'https://rollyparedes.net';

const urls = [
  'https://rollyparedes.net',
  'https://rollyparedes.net/#about',
  'https://rollyparedes.net/#services',
  'https://rollyparedes.net/#dev-projects',
  'https://rollyparedes.net/#design-portfolio',
  'https://rollyparedes.net/#skills',
  'https://rollyparedes.net/#certificates',
  'https://rollyparedes.net/#contact'
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