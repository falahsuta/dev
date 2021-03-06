import React from "react";
import ScrollHorizontal from "react-scroll-horizontal";
import "./style/index.css";

export default class App extends React.Component {
  state = {
    someDivs: this.genData(),
  };

  genData() {
    var data = [];
    var max = 14;

    for (; --max > 0; ) {
      data.push({
        text: "Scroll Me " + max + "!!",
      });
    }

    return data;
  }

  render() {
    const exampleItems = this.state.someDivs.map((item, i) => {
      return (
        <div key={i} className="tile">
          <h2>{item.text}</h2>
        </div>
      );
    });
    return (
      <main>
        <div className="center w50 mx-auto mb">
          <h1 className="dots">React Scroll Horizontal</h1>
          <h3>
            Feed &lt;ScrollHorizontal&gt; one child, or many children. So long
            as they have a defined width/height, this component will take care
            of the rest.
          </h3>
          <div className="flex justify-center">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=hew&repo=react-scroll-horizontal&type=star&count=true"
              width="170px"
              height="20px"
              title="github stars button"
            />
          </div>
        </div>
        <div className="hr" />
        <h1
          className="center"
          onClick={(e) => this.setState({ someDivs: this.genData() })}
        >
          Full Width
        </h1>
        <div
          style={{
            marginLeft: "600px",
            padding: "50px",
            border: "2px solid white",
            borderRadius: "30px",
            width: "190em",
          }}
        >
          <div
            style={{
              height: `22.7em`,
              width: "190em",
            }}
          >
            <ScrollHorizontal>{exampleItems}</ScrollHorizontal>
          </div>
        </div>
        <div className="hr" />
        <h1
          className="center"
          onClick={(e) => this.setState({ someDivs: this.genData() })}
        >
          Arbitrary Width, Spring Config
        </h1>
        <div style={{ height: `22.7em`, width: `66%` }}>
          <ScrollHorizontal config={{ stiffness: 160, damping: 110 }}>
            {exampleItems}
          </ScrollHorizontal>
        </div>
        <footer>
          <p>
            Made by <a href="http://github.com/hew">hew</a>
          </p>
        </footer>
      </main>
    );
  }
}
