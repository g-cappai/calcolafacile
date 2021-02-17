import fs from "fs";
import path from "path";

const textDirectory = path.join(process.cwd(), "content/text");

export const fetchPageSlug = () => {
  const mdxFNames = fs.readdirSync(textDirectory);
  return mdxFNames.map((fName) => fName.replace(".mdx", ""));
};

export const fetchMdxContent = (pageSlug) => {
  const fullPath = path.join(textDirectory, `${pageSlug}.mdx`);

  return fs.promises.readFile(fullPath, "utf8");
};
