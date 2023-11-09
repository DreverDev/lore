import { NextResponse } from 'next/server'
import { create } from '../../../../utils/database/controllers/bookController'
import setRevalidate from '@/utils/revalidatePaths/setRevalidate';

export async function POST(request) {
    const req = await request.json();
    const res = await create(req);

    await setRevalidate();

    return NextResponse.json({ res });
}