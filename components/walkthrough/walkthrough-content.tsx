import { MDXRemote } from "next-mdx-remote/rsc";
import { WalkthroughPost } from "@/lib/walkthrough";

interface WalkthroughContentProps {
  post: WalkthroughPost;
  hideTitle?: boolean;
}

export async function WalkthroughContent({
  post,
  hideTitle = false,
}: WalkthroughContentProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {!hideTitle && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          {post.excerpt && (
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {post.excerpt}
            </p>
          )}
        </div>
      )}

      <div className="walkthrough-content">
        <MDXRemote source={post.content} />
      </div>
    </div>
  );
}
