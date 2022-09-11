import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>David Castagneto Portfolio</h1>
        <h2>First React Application</h2>
        <h2>Don't forget the english course, Dickhead!</h2>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
