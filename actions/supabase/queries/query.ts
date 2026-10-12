import { Post } from "@/types/post";
import supabase from "../client";

// Example query to fetch all rows from your_table_name

export async function fetchPosts(): Promise<Post[]> {
  const { data, error } = await supabase.from("Posts").select("*");

  if (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }

  return data;
}
