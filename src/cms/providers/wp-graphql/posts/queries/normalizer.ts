import type { PostNormalized } from "../../../../../typesNormalized/global";
import type { PostNodeRaw } from "../../types/posts";


export function normalizePosts(posts: PostNodeRaw[]): PostNormalized[] {
  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    date: post.date,
    categories: post.categories.nodes,
    featuredImage: post.featuredImage?.node ?? null,
    author: post.authorACF.author,
    premium: post.premiumACF.premium,
    subtitle: post.subtitleACF.subtitle,
    readingTime: post.tiempoDeLecturaACF.readingTime,
  }));
}
