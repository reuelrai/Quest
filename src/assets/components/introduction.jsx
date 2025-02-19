import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FirstQuest() {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);
    

    useEffect(() => {
        setTimeout(() => setAnimate(true), 50); // Slight delay for effect
    }, []);

    return (
        <div className="screen">
            <div className={animate ? "page-enter-active" : "page-enter"}>
                <h1>WELCOME</h1>
                <p>Your adventure begins now!</p>
                <button onClick={()=> navigate("/play")}>Next</button>
            </div>
        </div>
    );
}

export default FirstQuest;
