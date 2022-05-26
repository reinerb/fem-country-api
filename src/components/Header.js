import { React, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";

class Header extends Component {
  componentDidMount() {
    library.add(faGlobe, faMoon, faSun);
  }

  render() {
    const modeSwitch = (
      <div className="mode-toggle">
        {this.props.darkMode ? (
          <FontAwesomeIcon icon="sun" />
        ) : (
          <FontAwesomeIcon icon="moon" />
        )}
      </div>
    );
    return (
      <header className="Header">
        <h1 className="Header-title">
          <FontAwesomeIcon icon="globe" />
          Where in the world?
        </h1>
        {modeSwitch}
      </header>
    );
  }
}

export default Header;
