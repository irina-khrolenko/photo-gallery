// "use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Typography from "@mui/material/Typography";

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="text-neutral900 max-w-prose">{children}</p>
        ),
        heading: ({ children, level }) => {
          return <Typography variant={`h${level}`}>{children}</Typography>;
        },
      }}
    />
  );
}
