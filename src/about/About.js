import React, { Component } from 'react';
import Avatar from '../avatar/Avatar.js';
import AboutMenu from './AboutMenu.js';
import HenshinEffect from '../avatar/AvatarHuman.js';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false, // Controls the visibility of the main content (avatar and menu)
    };
  }

  componentDidMount() {
    // Set a timer to update showContent after 5000 milliseconds (5 seconds)
    this.timer = setTimeout(() => {
      this.setState({ showContent: true });
    }, 4000);
  }

  componentWillUnmount() {
    // Clear the timer when the component unmounts to prevent memory leaks
    clearTimeout(this.timer);
  }

  render() {
    const { showContent } = this.state;

    return (
      <>
        {!showContent && <HenshinEffect />}
        {showContent && (
          <>
            <Avatar page="about" />
            <AboutMenu />
          </>
        )}
      </>
    );
  }
}
