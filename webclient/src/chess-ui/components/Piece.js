import React, {PropTypes} from 'react';
import classnames from 'classnames';

import PieceTemplate from './PieceTemplate';

export default class Piece extends React.Component{
  render(){
    const {colored, type} = this.props;
    return React.createElement(PieceTemplate, {
      colored: colored,
      type: type
    });
  };
}
