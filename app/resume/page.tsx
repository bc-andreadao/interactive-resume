"use client";

import { useState } from 'react';
import { SkillChart } from '@/components/skillChart';
import { IconCluster } from '@/components/iconCluster';
import { WritingPieChart } from '@/components/pieChart';
import { Work } from "@/components/workExperience";
import { MultiActionAreaCard } from "@/components/card";
import { CustomizedTimeline } from "@/components/timeline"


export default function Resume () {

    const [company, setCompany] = useState<string>("BigCommerce");

    return (
        <>
        <section>
            <h1 className="text-4xl font-bold">Andrea Dao</h1>
            <h2>Technical writer</h2>
            <h2>Contact</h2>
            <article className="flex justify-evenly">
                <p>Email: daoam22@gmail.com</p>
                <p>Home: Chicago, IL</p>
                <p>LinkedIn: linkedin.com/in/andrea-dao/</p>
            </article>
            <article>
                <h2>Profile</h2>
                <p>Lover of writing, developer docs, creating basic websites with HTML / CSS / JS, and everything in between. Prospective career passions include producing creative works of writing, building freelance websites with my own designs, and more.</p>    
            </article>
            <h2>Skills</h2>
            <SkillChart />
            <h2>Tools and Stacks</h2>
            <IconCluster />
            <h2>How I currently spend my time</h2>
            <WritingPieChart />
        </section>
        <section>
            <h2>Work Experience</h2>
        <div className="block">
            <section className="grid grid-cols-2">
                <CustomizedTimeline setCompany={setCompany}/>
                <div>
                    <Work company={company}/>
                    <MultiActionAreaCard company={company}/>
                </div>
            </section>
        </div>
        </section>
        <section>
            <h2>Education</h2>
            <section className="flex justify-evenly">
                <article>
                    <p>Web Development Certification</p>
                    <p>Austin Coding Academy</p>
                    <p>2024 - present</p>
                </article>
                <article>
                    <p>Intro to Tech Writing Certificate</p>
                    <p>Society for Technical Commun. (STC)</p>
                    <p>2021</p>
                </article>
                <article>
                    <p>M.S., Molecular Engineering</p>
                    <p>University of Chicago</p>
                    <p>2019 -  2021</p>
                </article>
                <article>
                    <p>B.S., Chemical Engineering</p>
                    <p>University of Washington, Seattle</p>
                    <p>2015 - 2019</p>
                </article>
            </section>
        </section>
        </>
    )
}