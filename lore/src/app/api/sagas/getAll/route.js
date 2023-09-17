import { NextResponse } from 'next/server'
import { getAll as action } from '../../../../utils/database/controllers/sagaController'

export const revalidate = 0;

export async function GET() {
    const { sagas } = await action();
    return NextResponse.json(sagas);
}