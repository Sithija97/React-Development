import { useState } from "react";
import { htmlString } from "../data";
import CodeEditor from "@uiw/react-textarea-code-editor";

export const ReactTextAreaCodeEditor = () => {
  const [code, setCode] = useState(htmlString);
  return (
    <CodeEditor
      value={code}
      language="html"
      placeholder="Please enter html code."
      data-color-mode="dark"
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        // backgroundColor: "black",
        minHeight: 100,
        minWidth: 100,
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
      }}
    />
  );
};
