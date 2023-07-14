import { NextResponse } from 'next/server'
import { getAll as action } from '../../../../utils/database/controllers/sagaController'

export async function GET() {
    const { sagas } = await action();
    return NextResponse.json(sagas);
}