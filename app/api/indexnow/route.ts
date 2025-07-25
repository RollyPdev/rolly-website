import { NextResponse } from 'next/server';
import { submitToIndexNow } from '../../../lib/indexnow';

export async function POST() {
  const urls = [
    'https://rollyparedes.net',
    'https://rollyparedes.net/#about',
    'https://rollyparedes.net/#services',
    'https://rollyparedes.net/#dev-projects',
    'https://rollyparedes.net/#design-portfolio',
    'https://rollyparedes.net/#skills',
    'https://rollyparedes.net/#contact'
  ];

  const success = await submitToIndexNow(urls);
  
  return NextResponse.json({ 
    success, 
    message: success ? 'URLs submitted to IndexNow' : 'IndexNow submission failed' 
  });
}