// import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
// import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
// import darkish from "react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope";
import themeColor from "react-syntax-highlighter/dist/esm/styles/prism/xonokai";

/* 
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
*/

// <Expire color={["indigo", "green"]} lesson="taught" num={2} />

SyntaxHighlighter.registerLanguage("jsx", jsx);

const CodeHighlighter = (props) => {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={themeColor}
      customStyle={{
        letterSpacing: "0.8px",
        fontFamily: "var(--font-inconsolata)",
        borderRadius: 10,
        fontWeight: 600,
        fontSize: "12.2px",
        lineHeight: 1.4,
      }}
      wrapLongLines
      codeTagProps={{
        style: {
          lineHeight: "inherit",
          fontSize: "inherit",
        },
      }}
      {...props}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
