import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error in 'did catch'. Render fallback UI with static method above
        // TODO, some error loggingthis.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. That is not good</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;