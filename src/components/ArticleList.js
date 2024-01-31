import React from "react";
import Article from "../components/Article.js"

function ArticleList(props) { 
const article = props.posts.map((post) => (
    <Article key={post.id} {...post} minutes={post.minutes}/>))   
    return (<main>{article}</main>)    
}
ArticleList.defaultProps = {
    posts: []
}

export default ArticleList;
