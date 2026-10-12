import { FiHeart as HeartIcon } from "react-icons/fi";
import { LuCircle as ProfileIcon } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import {
  Divider,
  Footer,
  FooterIcons,
  FooterText,
  Header,
  HeaderSub,
  HeaderUsername,
  PostDesc,
  PostImage,
  ShareIcon,
} from "@/app/styles";
import { Post } from "@/types/post";

export default function PostComponent({ post }: { post: Post }) {
  return (
    <>
      <Header>
        <ProfileIcon size={40} fill="#D9D9D9" stroke="none" />
        <div>
          <HeaderUsername>
            <b>{post.user_name}</b> at <b>{post.npo_name}</b>
          </HeaderUsername>
          <HeaderSub>San Francisco, CA</HeaderSub>
        </div>
      </Header>

      <PostImage src={post.image_link} alt="Post Image" />

      <PostDesc>{post.post_text}</PostDesc>

      <Footer>
        <FooterText>{post.num_likes} Likes</FooterText>
        <FooterText>View 2 Comments</FooterText>
      </Footer>
      <FooterIcons>
        <HeartIcon size={30} strokeWidth={1.5} />
        <TbMessageCircle size={30} strokeWidth={1.5} />
        <ShareIcon size={30} strokeWidth={0.1} />
      </FooterIcons>
      <Divider></Divider>
    </>
  );
}
