import React from "react";
import MainBanner from "../components/Web/MainBanner";
import TopicsOfInterest from "../components/Web/TopicsOfInterest";
import About from "../components/Web/About";
import Testimonials from "../components/Web/Testimonials";

export default function Home() {
    
    return (
        <>
            <MainBanner />
            <TopicsOfInterest />
            <About />
            <Testimonials />
        </>
    )
}