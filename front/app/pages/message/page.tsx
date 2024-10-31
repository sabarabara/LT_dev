"use client";

import React, { useState } from "react";
import Layout from "@/app/components/layout/layout";
import Message from "@/app/components/ui/chut/message";

import Sidebar from "@/app/components/ui/sidebar/sidebar";

export default function MessagePage() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleMouseEnter = (event: React.MouseEvent) => {
        if (event.clientX <= 5) {
            setIsSidebarVisible(true);
        }
    };

    const handleMouseLeave = () => {
        setIsSidebarVisible(false);
    };

    return (
        <div
            className="message"
            onMouseMove={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Sidebar
                name="date"
                date={[{ month: 'Jan', day: 1 }, { month: 'Feb', day: 2 }]}
                isVisible={isSidebarVisible}
            />

            <Layout/>
            <Message/>
        </div>
    );
}
