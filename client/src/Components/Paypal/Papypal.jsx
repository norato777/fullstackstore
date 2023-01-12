import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
    const initialOptions = {
        "client-id": "AWNi-4NE7sfR8UX05nbqyTlHYA3g_mzuhwfI06Jsp0ZKoklN4UrDXF93b7GXBAHVejpEeHXwehr3tnbF",
        currency: "USD",
        // intent: "capture",
        // "data-client-token": "abc123xyz==",
    };

    return (
        <>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons />
            </PayPalScriptProvider>

        </>
    )
}

export default Paypal;