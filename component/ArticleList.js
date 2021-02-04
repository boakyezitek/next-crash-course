import React from 'react';
import articlesStyles from  '../styles/Article.module.css'
import ArticleItems from './ArticleItems';
function ArticleList({articles}) {
    return (
        <div className={articlesStyles.grid}>
             {articles.map((x, index) => (<React.Fragment key={index}>
          <ArticleItems article={x}/>
       </React.Fragment>))}
        </div>
    );
}

export default ArticleList;