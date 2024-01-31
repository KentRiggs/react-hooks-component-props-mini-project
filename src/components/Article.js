import React from "react";

function Article({title="Components 101", date = "January 1, 1970", preview, minutes}) { 
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {readingTime(minutes)}</small>
            <p>{preview}</p>
        </article>
    )    
}

function readingTime(minutes) {
const coffee = "☕️";
const bento = "🍱";
let emojis = minutes < 30 ? coffee:bento;
let math = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
return `${emojis.repeat(math)} ${minutes} min read`
} 

export default Article;