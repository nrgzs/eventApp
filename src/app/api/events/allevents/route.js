const fs = require('fs');
const path = require('path');

import { NextResponse } from 'next/server';

export async function GET() {
  const data = fs.readFileSync(path.join(process.cwd(), 'data/data.json'), {
    encoding: 'utf8',
    flag: 'r',
  });
  const { allEvents } = JSON.parse(data);
  return NextResponse.json(allEvents);
}

export async function POST(req) {
  const body = await req.json();

  const data = fs.readFileSync(path.join(process.cwd(), 'data/data.json'), {
    encoding: 'utf8',
    flag: 'r',
  });
  const { allEvents } = JSON.parse(data);

  const cityEvents = allEvents.filter(
    (event) => event.city.toLowerCase() === body.city
  );

  return NextResponse.json(cityEvents);
}
