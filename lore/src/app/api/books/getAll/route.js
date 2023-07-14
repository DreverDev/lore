import { NextResponse } from 'next/server'
import { getAll } from '../../../../utils/database/controllers/bookController'

export async function GET() {
    const { elements } = await getAll();
    return NextResponse.json({ elements });
}