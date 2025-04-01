// app/components/CodeHighlight.jsx (or any server component)
import { useEffect, useState, memo } from "react";
import { type BundledLanguage, codeToHtml } from "shiki";

import styles from "./CodeHighlighter.module.scss";

function CodeHighlighter({
  lang,
  children,
}: {
  lang: BundledLanguage;
  children: string;
}) {
  const [highlighted, setHighlighted] = useState("");

  useEffect(() => {
    let isMounted = true;
    async function genHighlightedCode() {
      const out = await codeToHtml(children, {
        lang: lang,
        theme: "night-owl",
      });

      isMounted && setHighlighted(out);
    }
    if (typeof children == "string") {
      genHighlightedCode();
    }

    return () => {
      isMounted = false;
    };
  }, [children]);

  return highlighted ? (
    <div
      className={styles.codeHighlight}
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  ) : (
    <p className={styles.placeholderHighlight}>Generating code...</p>
  );
}

export default memo(CodeHighlighter);
