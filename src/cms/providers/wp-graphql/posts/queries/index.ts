import GET_ALL_POSTS from "./GetAllPosts.graphql?raw";
import { graphqlFetcher } from "../../utils/fetcher";
import { normalizePosts } from "./normalizer";
import { PostsResponseSchema, type PostNodeRaw } from "../../types/posts";
import type { PostNormalized } from "../../../../../typesNormalized/global";

export async function getAllPosts(): Promise<PostNormalized[]> {
    const { posts } = await graphqlFetcher(GET_ALL_POSTS);
    if (!posts?.nodes) return [];
    const validPosts: PostNodeRaw[] = PostsResponseSchema.parse(posts).nodes;
    return normalizePosts(validPosts);
}
