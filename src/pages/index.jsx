import React, { useRef, useEffect } from "react"
import TweenMax from 'gsap'

import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"
import ContactMetods from "../components/contact_methods"

import '../css/main.scss'

const IndexPage = () => {
    let main_section = useRef(null)

    useEffect( () => {
        TweenMax.from(
            main_section,
            2,
            {y: -500}
        )
    }, [])
    return (
        <Layout>
            <SEO title="Home" />
                <section className="main_section" ref={el => { main_section = el }}>
                    <div className="grid">
                        <h1 className="main_section--title"> Strona w budowie </h1>
                        <h2 className="main_section--subtitle">Zapaszam do kontaktu</h2>
                        <ContactMetods />
                    </div>
                </section>
        </Layout>
    )
}

export default IndexPage
