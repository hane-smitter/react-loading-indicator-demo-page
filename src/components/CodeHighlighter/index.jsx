import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import darkish from "react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope";

SyntaxHighlighter.registerLanguage("javascript", js);

const CodeHighlighter = (props) => {
  return (
    <SyntaxHighlighter language="javascript" style={darkish} {...props}>
      {props.children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
