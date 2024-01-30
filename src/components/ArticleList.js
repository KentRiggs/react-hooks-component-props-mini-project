import React from "react";
import Article from "./Article";

function ArticleList(props) { 
const article = props.posts.map((post) => (
    <Article key={post.id} {...post} minutes={post.minutes}/>))   
    return (<main>{article}</main>)    
}

export default ArticleList