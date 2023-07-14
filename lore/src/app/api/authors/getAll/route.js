import { NextResponse } from 'next/server'
import { getAll as action } from '../../../../utils/database/controllers/authorController'

export async function GET() {
    const { authors } = await action();
    return NextResponse.json(authors);
}