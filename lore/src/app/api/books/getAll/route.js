import { NextResponse } from 'next/server';
import { getAll } from '../../../../utils/database/controllers/bookController';

// export const revalidate = 0;

export async function GET() {
    
    const { elements } = await getAll();

    return NextResponse.json({
        status: 200,
        elements,
    });
}