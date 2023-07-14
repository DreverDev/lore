import { NextResponse } from 'next/server'
import { getOne } from '@/utils/database/controllers/bookController';

export async function GET(request) {
    let element = {};
    element = { element } = await getOne(request.nextUrl.searchParams.get("id"));
    return NextResponse.json(element);
}