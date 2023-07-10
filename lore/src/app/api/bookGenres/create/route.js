import { NextResponse } from 'next/server'
import { create as action } from '../../../../utils/database/controllers/bookGenreController'

export async function POST(request) {
    const req = await request.json();
    const res = await action(req);
    return NextResponse.json({ res });
}