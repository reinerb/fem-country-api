import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, Component } from "react";

class Header extends Component {
  render() {
    const modeSwitch = (
      <div className="mode-toggle">
        <FontAwesomeIcon icon="moon" /> Dark Mode
      </div>
    );
    return (
      <header>
        <div className="site-title">Where in the world?</div>
        {modeSwitch}
      </header>
    );
  }
}

export default Header;
