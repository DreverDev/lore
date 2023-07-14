import { NextResponse } from 'next/server'
import { getAll as action } from '../../../../utils/database/controllers/formatController'

export async function GET() {
    const { formats } = await action();
    console.log(formats)
    return NextResponse.json(formats);
}