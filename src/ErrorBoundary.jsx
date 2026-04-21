import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: "2rem", maxWidth: 560, margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
          <h1 style={{ fontSize: "1.25rem" }}>Impossible d&apos;afficher la page</h1>
          <p style={{ color: "#444", lineHeight: 1.5 }}>
            Une erreur s&apos;est produite dans l&apos;application. Actualisez la page ou videz le cache du
            navigateur. Si le problème continue, ouvrez la console du navigateur (F12) pour plus de détails.
          </p>
          <pre
            style={{
              fontSize: 12,
              overflow: "auto",
              padding: "0.75rem",
              background: "#f5f5f5",
              borderRadius: 8
            }}
          >
            {String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
