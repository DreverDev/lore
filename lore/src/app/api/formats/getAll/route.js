import { NextResponse } from 'next/server'
import { getAll as action } from '../../../../utils/database/controllers/formatController'

export async function GET() {
    const { formats } = await action();
    return NextResponse.json(formats);
}