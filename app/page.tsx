"use client";

import { useEffect, useState } from "react";
import { fetchPosts } from "@/actions/supabase/queries/query";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import PostComponent from "@/components/PostComponent";
import { Post } from "@/types/post";
import {
  Blueprint,
  Content,
  ContentScroll,
  HeaderText,
  Logo,
  Main,
  TopBar,
} from "./styles";

export default function Home() {
  const [postData, setPostData] = useState<Post[] | null>(null);

  useEffect(() => {
    async function fetchPostData() {
      const fetchedPosts = await fetchPosts();
      setPostData(fetchedPosts);
    }

    fetchPostData();
  }, []);

  return (
    <Main>
      <Content>
        <TopBar>
          <Logo>
            <BlueprintLogo />
          </Logo>
          <HeaderText>
            <Blueprint>blueprint</Blueprint> volunteers
          </HeaderText>
        </TopBar>

        <ContentScroll>
          <div>
            {postData == null ? (
              <p>Loading...</p>
            ) : (
              postData.map(post => <PostComponent key={post.id} post={post} />)
            )}
          </div>
        </ContentScroll>
      </Content>
    </Main>
  );
}
