import React, { useRef, useEffect } from "react"
import TweenMax from 'gsap'


const ContactMetods = () => {
    let list_element1 = useRef(null)
    let list_element2 = useRef(null)
    let list_element3 = useRef(null)

    useEffect( () => {
        TweenMax.from(list_element1, 1, { delay: 1.3, opacity: 0 })
        TweenMax.from(list_element2, 1, { delay: 1.7, opacity: 0 })
        TweenMax.from(list_element3, 1, { delay: 2.1, opacity: 0 })
    }, [])
    return (
        <ul className="main_section__contact_list" >
            <li className="main_section__contact_list--element" ref={el => { list_element1 = el }}><a href="https://github.com/phincka">GitHub</a></li>
            <li className="main_section__contact_list--element" ref={el => { list_element2 = el }}><a href="https://www.linkedin.com/in/pawel-hincka/">LinkedIn</a></li>
            <li className="main_section__contact_list--element" ref={el => { list_element3 = el }}><a href="mailto: pawel@hincka.pl">pawel@hincka.pl</a></li>
        </ul>
    )
}

export default ContactMetods
