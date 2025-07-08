"use client";

import { useState } from 'react';
import { MultiActionAreaCard } from "@/components/card";


export default function Resume () {

    const [company, setCompany] = useState<string>("BigCommerce");

    return (
        <section >
            <MultiActionAreaCard company={company}/>
        </section>
    )
}