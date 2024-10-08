import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Titels from './Titels'
import Section5 from './Section5'
import S from './Aboutsection'

function About() {
    return (
        <>
            {/* <Link to="/">Home</Link> */}
            <Nav />
            <Titels Name={"About"} url={"https://wordpress.themeholy.com/fitkit/wp-content/themes/fitkit/assets/img/breadcumb-thumb.png"} />
            <S />
            {/* <Section5 /> */}
            <Footer />
        </>
    )
}

export default About