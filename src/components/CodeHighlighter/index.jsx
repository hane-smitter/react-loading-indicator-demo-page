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
      style={darkish}
      customStyle={{
        letterSpacing: "0.8px",
        fontFamily: "var(--font-inconsolata)",
        borderRadius: 4,
        fontWeight: 600,
      }}
      wrapLongLines
      {...props}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
