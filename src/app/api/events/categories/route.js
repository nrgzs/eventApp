const fs = require('fs');
const path = require('path');

import { NextResponse } from 'next/server';

export async function GET() {
  const data  = fs.readFileSync(
    path.join(process.cwd(), 'data/data.json'),
    { encoding: 'utf8', flag: 'r' }
  );
  const {eventsCategories} = JSON.parse(data);
  
  return NextResponse.json(eventsCategories );
}
