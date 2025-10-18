import { MDXRemote } from "next-mdx-remote/rsc";
import { WalkthroughPost } from "@/lib/walkthrough";
import remarkGfm from "remark-gfm";

interface WalkthroughContentProps {
  post: WalkthroughPost;
  hideTitle?: boolean;
}

const components = {
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>
  ),
  tbody: ({ children }: { children: React.ReactNode }) => (
    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
      {children}
    </tbody>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
      {children}
    </td>
  ),
  img: ({
    src,
    alt,
    ...props
  }: {
    src?: string;
    alt?: string;
    [key: string]: any;
  }) => (
    <img
      src={src}
      alt={alt}
      className="max-w-full h-auto rounded-lg shadow-md my-4"
      {...props}
    />
  ),
} as const;

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
        {/* @ts-expect-error Server Component */}
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
    </div>
  );
}
