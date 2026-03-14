"use client";

import React from "react";

/* ═══════════════════════════════════════════════
   COMPONENT ERROR BOUNDARY
   
   Catches runtime errors in child components and
   renders a graceful fallback UI instead of
   crashing the entire page.
   ═══════════════════════════════════════════════ */

interface Props {
  children: React.ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
}

export default class ComponentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[ComponentErrorBoundary]", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-gold/15 bg-cream/50 backdrop-blur-sm p-8 text-center my-8">
          <p className="text-muted text-sm">
            {this.props.fallbackMessage || "This section couldn\u2019t load. Please refresh the page or contact us directly."}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
