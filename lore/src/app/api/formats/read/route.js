import { NextResponse } from 'next/server'
import { read as action } from '../../../../utils/database/controllers/formatController'

export async function GET() {
    const res = await action();
    return NextResponse.json({ res });
}