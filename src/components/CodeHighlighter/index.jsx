import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import darkish from "react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope";

/* 
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
*/

SyntaxHighlighter.registerLanguage("javascript", js);

const CodeHighlighter = (props) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={{
        ...darkish,
        fontFamily: "var(--font-inconsolata)",
        letterSpacing: "0.4px",
      }}
      wrapLongLines
      {...props}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
