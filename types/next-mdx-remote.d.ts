declare module "next-mdx-remote/rsc" {
  import { ReactNode } from "react";
  
  interface MDXRemoteProps {
    source: string;
    components?: {
      [key: string]: React.ComponentType<any>;
    };
    options?: {
      mdxOptions?: {
        remarkPlugins?: any[];
        rehypePlugins?: any[];
      };
    };
  }
  
  export function MDXRemote(props: MDXRemoteProps): JSX.Element;
}
