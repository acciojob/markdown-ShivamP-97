import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor() {
  const [markdownText, setMarkdownText] = useState("");
  const [previewText, setPreviewText] = useState("");

  useEffect(() => {
    setPreviewText(markdownText);
  }, [markdownText]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
      />

      <div className="preview">
        <ReactMarkdown>{previewText}</ReactMarkdown>
      </div>
    </div>
  );
}