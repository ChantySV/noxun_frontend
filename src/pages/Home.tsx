import { useState, useEffect } from "react";
import { getPostsWithUserNames } from "../api/Api";
import { JSONPlaceholderResponse } from "../api/post/post.interface";
import { CustomHeader } from "../common/components/CustomHeader";
import { Table } from "../components/table/Table";

export const Home = () => {
  const [posts, setPosts] = useState<JSONPlaceholderResponse[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPostsWithUserNames();
      setPosts(response);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <CustomHeader
        title="JSONPlaceholder"
        description="Una simple y falsa REST API para testing y prototipado."
      />
      <Table posts={posts} />
    </>
  );
};
