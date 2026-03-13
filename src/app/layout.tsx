import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Cognera | Privacy-First Behavioral Intelligence",
    description: "Understanding digital behavior without tracking personal identity.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
