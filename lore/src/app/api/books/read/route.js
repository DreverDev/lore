import { NextResponse } from 'next/server'
import { read } from '../../../../utils/database/controllers/bookController'

export async function GET() {
    const { books } = await read();
    return NextResponse.json({ books });
}