import React, {Component} from 'react';
import ReactDom from 'react-dom';
import HelloWorld from '../src/components/HelloWorld';

ReactDom.render(<HelloWorld showDescription={true}/>, document.getElementById('container'));