export async function POST(request) {
    const { email, name } = await request.json();

    try {
        // 1. Odeslání do Google Sheets
        const gsheetResponse = await fetch(process.env.GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name }),
        });

        // 2. Ošetření chyb
        if (!gsheetResponse.ok) {
            throw new Error(`Google Sheets API error: ${gsheetResponse.statusText}`);
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error('API route error:', error);
        return Response.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}