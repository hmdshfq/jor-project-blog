import React from 'react';
import { getBlogPostList } from '@/helpers/file-helpers';
import BlogSummaryCard from '@/components/BlogSummaryCard';
import {BLOG_TITLE} from '@/constants/';

import styles from './homepage.module.css';

export const metadata = {
    title: BLOG_TITLE,
    description: 'A wonderful blog about JavaScript',
};

async function Home() {
    let blogPosts = await getBlogPostList();
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.mainHeading}>Latest Content:</h1>

            {/* TODO: Iterate over the data read from the file system! */}
            {blogPosts.map(({ slug, ...delegated }) => (
                <BlogSummaryCard key={slug} slug={slug} {...delegated} />
            ))}
        </div>
    );
}

export default Home;
