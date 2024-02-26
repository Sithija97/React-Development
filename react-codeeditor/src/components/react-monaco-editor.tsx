import Editor from "@monaco-editor/react";
import { htmlString } from "../data";

export const ReactMonacoEditor = () => {
  return (
    <>
      <Editor
        height="90vh"
        width="90vh"
        theme="vs-dark"
        defaultLanguage="html"
        defaultValue={htmlString}
      />
    </>
  );
};
