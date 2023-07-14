import { NextResponse } from 'next/server'
import { getAll as action } from '../../../../utils/database/controllers/bookGenreController'

export async function GET() {
    const { bookGenres } = await action();
    return NextResponse.json(bookGenres);
}