'use babel';

import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}