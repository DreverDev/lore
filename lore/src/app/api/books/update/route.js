import { NextResponse } from 'next/server'
import { update as action } from '../../../../utils/database/controllers/bookController'

export async function PUT(request) {
    const req = await request.json();
    const res = await action(req);
    return NextResponse.json({ res });
}