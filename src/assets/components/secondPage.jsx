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
            <div className="page-enter-active">
                <h1>WELCOME</h1>
                <p>Your adventure begins now!</p>
                <button onClick={()=> navigate("/third")}>Next</button>
            </div>
        </div>
    );
}

export default FirstQuest;
