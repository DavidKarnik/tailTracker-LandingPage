export async function POST(request) {
    console.log("[API] Request headers:", request.headers);
    console.log("[API] Request method:", request.method);

    try {
        const requestData = await request.json();
        console.log("[API] Received data:", requestData);

        if (!requestData.email) {
            console.error("[API] Email missing in request");
            return Response.json({ error: "Email is required" }, { status: 400 });
        }

        console.log("[API] Forwarding to Google Sheets:", {
            email: requestData.email,
            name: requestData.name || ""
        });

        const gsheetResponse = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: requestData.email,
                name: requestData.name || ""
            }),
        });

        console.log("[API] Google Sheets response status:", gsheetResponse.status);

        if (!gsheetResponse.ok) {
            const errorText = await gsheetResponse.text();
            console.error("[API] Google Sheets error:", errorText);
            throw new Error(`Google Sheets error: ${gsheetResponse.status}`);
        }

        return Response.json({ success: true });

    } catch (error) {
        console.error("[API] Critical error:", error);
        return Response.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}