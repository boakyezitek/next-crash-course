import React from 'react';
import Link from 'next/link';
import articlesStyles from  '../styles/Article.module.css'
function ArticleItems({article}) {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articlesStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    );
}

export default ArticleItems;