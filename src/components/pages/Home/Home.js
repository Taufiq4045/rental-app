import React, { useEffect } from 'react';

import Footer from '../../components/Footer/Footer';
import HeroComponent from '../../components/Hero/HeroComponent'
import HowComponent from '../../components/How/HowComponent';
import WhyComponent from '../../components/Why/WhyComponent';

export default function Home(){

    useEffect(() => {
        document.title = 'Welcome to DriveWell'
    },[])

    return (
        <>
            {/* use React.memo() for stopping the unnecessary rendering in multiple nested components */}
            <HeroComponent />
            <HowComponent />
            <WhyComponent />
            <Footer />
        </>
    )
}