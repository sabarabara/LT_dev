"use client";

import React from "react";
import { useState } from "react";
import Layout from "@/app/components/layout/layout"
import Person from "@/app/components/ui/person/person";
import Person_popup from "@/app/components/ui/person_popup/person_popup";
import Header from "@/app/components/layout/header/page";
import Sidebar from "@/app/components/ui/sidebar/sidebar";

export default function meet(){
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    return(
        <div className="meet">
            <Header name="meet"/>
            <Sidebar
                name="date"
                date={[{ month: 'Jan', day: 1 }, { month: 'Feb', day: 2 }]}
                isVisible={isSidebarVisible}
            />

        </div>
    );
}