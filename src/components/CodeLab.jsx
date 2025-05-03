import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import SplitPane from "react-split-pane";
import classNames from "classnames";

export default function CodeLab() {
  const defaultHtml = "<h1>Hello world</h1>";
  const defaultCss = "h1 { color: red; }";
  const defaultJs = "console.log('Hello from JS');";

  const [html, setHtml] = useState(() => localStorage.getItem("html") || defaultHtml);
  const [css, setCss] = useState(() => localStorage.getItem("css") || defaultCss);
  const [js, setJs] = useState(() => localStorage.getItem("js") || defaultJs);
  const [srcDoc, setSrcDoc] = useState("");

  const [showEditors, setShowEditors] = useState(true);
  const [showPreview, setShowPreview] = useState(true);
  const [confirmation, setConfirmation] = useState("");

  const runCode = () => {
    setSrcDoc(`
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `);
  };

  const resetCode = () => {
    setHtml(defaultHtml);
    setCss(defaultCss);
    setJs(defaultJs);
    runCode();
    setConfirmation("Reset to default code.");
  };

  const saveLocal = () => {
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("js", js);
    setConfirmation("Code saved locally.");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      runCode();
      saveLocal();
    }, 400);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const renderEditors = () => (
    <div className="bg-[#1e1e1e] text-white p-2 h-full overflow-auto">
      <div className="mb-2 font-semibold text-sm">HTML</div>
      <Editor
        height="20vh"
        language="html"
        value={html}
        onChange={(v) => setHtml(v || "")}
        theme="vs-dark"
      />
      <div className="my-2 font-semibold text-sm">CSS</div>
      <Editor
        height="20vh"
        language="css"
        value={css}
        onChange={(v) => setCss(v || "")}
        theme="vs-dark"
      />
      <div className="my-2 font-semibold text-sm">JavaScript</div>
      <Editor
        height="20vh"
        language="javascript"
        value={js}
        onChange={(v) => setJs(v || "")}
        theme="vs-dark"
      />
    </div>
  );

  const renderPreview = () => (
    <div className="bg-white h-full overflow-auto">
      <iframe
        srcDoc={srcDoc}
        title="Live Preview"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );

  return (
    <div className="h-screen w-full font-sans">
      {/* Top bar */}
      <div className="flex justify-between items-center p-3 bg-[#121212] text-white shadow">
        <div className="font-semibold text-lg">CodeLab</div>
        <div className="space-x-2">
          <button
            onClick={() => setShowEditors((prev) => !prev)}
            className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
          >
            {showEditors ? "Hide Editors" : "Show Editors"}
          </button>
          <button
            onClick={() => setShowPreview((prev) => !prev)}
            className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
          >
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>
          <button
            onClick={runCode}
            className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
          >
            Run
          </button>
          <button
            onClick={resetCode}
            className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded"
          >
            Reset
          </button>
          <button
            onClick={saveLocal}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
          >
            Save Local
          </button>
        </div>
      </div>

      {confirmation && (
        <div className="bg-green-100 text-green-800 text-sm px-4 py-2 text-center">
          {confirmation}
        </div>
      )}

      {/* Layout */}
      {showEditors && showPreview ? (
        <SplitPane
          split="vertical"
          defaultSize="50%"
          minSize={100}
          resizerStyle={{
            background: "#333",
            width: "5px",
            cursor: "col-resize",
            zIndex: 1,
          }}
        >
          {renderEditors()}
          {renderPreview()}
        </SplitPane>
      ) : showEditors ? (
        renderEditors()
      ) : showPreview ? (
        renderPreview()
      ) : (
        <div className="text-center text-gray-500 mt-20">No panels visible</div>
      )}
    </div>
  );
}
