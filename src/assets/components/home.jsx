import { useNavigate } from "react-router-dom";
function home(){
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1>"1N73LL163NC3<br/>15<br/>7H3<br/>4B1L17Y<br/>70<br/>4D4P7<br/>70<br/>CH4NG3."</h1>
            <h1>- 573PH3N H4WK1NG</h1>
            <button className="button" onClick={() => navigate("/quest")}>Next</button>
        </div>
    );
}

export default home;