import MonacoEditor from "@uiw/react-monacoeditor";

export const ReactMonacoEditor = () => {
  return (
    <>
      <MonacoEditor
        language="html"
        value="<h1>I ♥ react-monacoeditor sithija</h1>"
        height="300px"
        options={{
          theme: "vs-dark",
        }}
      />
    </>
  );
};
