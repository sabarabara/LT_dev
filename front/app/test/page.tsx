import React from "react";
import Layout from "@/app/components/layout/layout";
//import ChutL from '@/app/components/ui/chut/message_l';
import ChutR from '@/app/components/ui/chut/message/message_r';
import Person from "@/app/components/ui/person/person";
import Person_popup from "../components/ui/person_popup/person_popup";
import Sidebar from "../components/ui/sidebar/sidebar";
import Box from "../components/layout/box/box";
import Textinput from "../components/ui/chut/textarea/textarea";
import Link from "next/link";

export default function Test() {
    console.log("ok");

    return (
        <div className="Test">
            <Link href='/pages/message'>message</Link>
            <Link href='/pages/meet'>meet</Link>
        </div>
    );
}
