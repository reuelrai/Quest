import { useEffect, useState } from "react";
import "./quest.css"; // Import only here

function FirstQuest() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 50); // Slight delay for effect
    }, []);

    return (
        <div className="screen">
            <div className={animate ? "page-enter-active" : "page-enter"}>
                <h1>Introduction</h1>
                <p>Your adventure begins now!</p>
            </div>
        </div>
    );
}

export default FirstQuest;
