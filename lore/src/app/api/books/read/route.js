import { NextResponse } from 'next/server'
import { read } from '../../../../utils/database/controllers/bookController'

export async function GET() {
    const res = await read();
    console.log(res)
    return NextResponse.json({ res });
}