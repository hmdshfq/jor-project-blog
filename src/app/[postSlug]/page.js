import React from 'react';
import BlogHero from '@/components/BlogHero';
import styles from './postSlug.module.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { loadBlogPost } from '@/helpers/file-helpers';
import COMPONENT_MAP from '@/helpers/mdx-components';

export async function generateMetadata({ params }) {
    const { frontmatter } = await loadBlogPost(params.postSlug);
    return {
        title: frontmatter.title,
        description: frontmatter.abstract,
    };
}

async function BlogPost({ params }) {
    const { frontmatter, content } = await loadBlogPost(params.postSlug);
    return (
        <article className={styles.wrapper}>
            <BlogHero
                title={frontmatter.title}
                publishedOn={frontmatter.publishedOn}
            />
            <div className={styles.page}>
                <MDXRemote
                    source={content}
                    components={COMPONENT_MAP}
                />
            </div>
        </article>
    );
}

export default BlogPost;
