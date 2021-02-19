import CalcPageTemplate from "../../components/templates/calc-page-template";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import AllCalcs from "../../content/all-calcs";

const components = AllCalcs;

import { fetchPageSlug, fetchMdxContent } from "../../lib/calcs";

export default function CalcPage({ slug, metadata, mdxSource }) {
  const content = hydrate(mdxSource, { components });
  return (
    <CalcPageTemplate
      title={metadata.title}
      meta_desc={metadata.meta_desc}
      slug={slug}
    >
      {content}
    </CalcPageTemplate>
  );
}

export async function getStaticPaths() {
  const slugs = await fetchPageSlug();

  return {
    paths: slugs?.map((calcSlug) => ({ params: { calcSlug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params?.calcSlug;

  const mdxContent = await fetchMdxContent(slug);
  const { content, data } = matter(mdxContent);

  const mdxSource = await renderToString(content, { components, scope: data });

  return {
    props: {
      slug,
      mdxSource,
      metadata: data,
    },
  };
}
