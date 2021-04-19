import React from "react";
import MainBanner from "../components/Web/MainBanner";
import TopicsOfInterest from "../components/Web/TopicsOfInterest";
import About from "../components/Web/About";

export default function Home() {
    return (
        <>
            <div>
                <h1>Estamos en Home</h1>
                <h2>Y abajo esta el MainBanner</h2>
            </div>
            <MainBanner />
            <TopicsOfInterest />
            <About />
        </>
    )
}