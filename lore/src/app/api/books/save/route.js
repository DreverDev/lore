import { NextResponse } from 'next/server'
import connection from '@/utils/database/connection';
import { save } from '../../../../utils/database/controllers/bookController'

export async function POST(request) {
  const req = await request.json();
  const res = await save(req);
  return NextResponse.json({ res });
}