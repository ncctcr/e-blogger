import React from 'react';
import PostList from "@/components/PostList";
import { Metadata } from 'next';
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import AddNewPostButton from "@/components/AddNewPostButton";
export const metadata: Metadata = {
    title: 'Blog | Posts',
    description: 'Explore our collection of blog posts. Read articles on various topics, stay updated with the latest trends, and find insightful content from our bloggers.',
};

const Posts = () => {
    return (
        <>
            <CustomBreadcrumbs current={'Posts'}/>
            <PostList/>
        </>
    );
};

export default Posts;