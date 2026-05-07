import { NextResponse } from 'next/server';

export function GET(): NextResponse {
    return NextResponse.json(
        { status: "SUCCESS", errors: [], message: "Hello from Hexonite!", data: null },
        { status: 200 }
    );
}
