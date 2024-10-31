// app/page.tsx
import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="Home">
            <p>Welcome to My App</p>

            <Link href="/test">Test</Link>
        </div>
    );
};
