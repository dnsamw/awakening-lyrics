import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="font-rubik-80s p-6 text-center text-lime-300">
          <p>Something went wrong.</p>
          <Link to="/" className="text-black font-rubik-80s">
            <div className="md:mt-6 bg-lime-400 hover:bg-lime-500 w-15 md:min-w-35 md:p-2 flex justify-center items-center h-full md:h-auto">
              <div className="md:hidden text-xl h-full flex justify-center items-center">
                {" "}
                Album
              </div>
              <span className="hidden md:inline">Back to album</span>
            </div>
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}