import { useEffect } from "react";
import HeroSection from "./HeroSection";
import { useGlobalContext } from "../redux/Context";



const Home = () => {
    const { updateHomePage } = useGlobalContext();

    useEffect(() => updateHomePage(), []);

    return (
        <>
            <HeroSection />


        </>
    );
};

export default Home;