import {useState} from "react";
import "./Banner.scss"
export default function Banner() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <div className="btn-contenair">
                    <a className="btn" href="/">Get Started</a>
                </div>
            </div>
            <div className="banner-img">
                <img src="/images/illustration-working.svg" alt=""/>
            </div>
        </div>
    )
}
