import React, { Component } from 'react';
import mermaid from 'mermaid';

class BookRecommendationDiagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diagram: ''
    };
  }

  componentDidMount() {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
    });

    // Fetch the Mermaid diagram text from the static file
    fetch('/mermaid_diagram.txt')
      .then(response => response.text())
      .then(text => {
        this.setState({ diagram: text }, () => {
          // After the state is updated with the fetched diagram text,
          // call mermaid.contentLoaded() to process the diagram text.
          mermaid.contentLoaded();
        });
      });
  }

  render() {
    return (
      <div className="mermaid-diagram">
        {/* Render the diagram text inside the mermaid div */}
        <div className="mermaid" dangerouslySetInnerHTML={{ __html: this.state.diagram }}></div>
      </div>
    );
  }
}

export default BookRecommendationDiagram;
