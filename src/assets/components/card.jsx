import React from "react";
import "./Comments.css"; // Import the CSS file

const comments = [
    { text: "Go, go, gen AI.", user: "RudeRedis", color: "orange" },
    { text: "This year was a fun one. Peace!", user: "Loki_God", color: "yellow" },
    { text: "Link Click season 2 crushes with its OP.", user: "JoeyGun13", color: "green" },
    { text: "My endless song would be Makeine's OP.", user: "rimopa", color: "lime" },
    { text: "Another great year! Excited for new anime.", user: "MrToxicRain", color: "green" },
    { text: "rezero is the best isekai anime.", user: "ZhaTectona", color: "yellow" },
    { text: "I'm glad that I watch anime.", user: "Narva", color: "orange" },
    { text: "Prioritizing is the key.", user: "Taco3", color: "yellow" },
    { text: "What is there to say, just keep pushing.", user: "nakib23", color: "green" },
    { text: "Anime is cooool 👍", user: "Furgo", color: "lime" },
    { text: "At the end of the day, it's the end of the day.", user: "Antonic-", color: "orange" },
    { text: "I'm not the best but I can be!!", user: "tjspg", color: "yellow" },
];

const getRandomRotation = () => `${Math.random() * 5 - 3}deg`;

const Comments = () => {
    return (
        <div className="comments-container">
            <h1 className="comments-title">Comments</h1>
            <div className="comments-grid">
                {comments.map((comment, index) => (
                    <div
                        key={index}
                        className={`comment-box ${comment.color}`}
                        style={{ "--rotation": getRandomRotation() }}
                    >
                        <p className="comment-text">{comment.text}</p>
                        <p className="comment-user">{comment.user}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;
