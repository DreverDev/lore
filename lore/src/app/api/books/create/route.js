import { NextResponse } from 'next/server'
import { create } from '../../../../utils/database/controllers/bookController'

export async function POST(request) {
    const req = await request.json();
    const res = await create(req);
    return NextResponse.json({ res });
}