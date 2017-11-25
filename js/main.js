import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Serverless Portfolio",
    'image': {
      'desc': "Lamnda Symbol",
      'src': "images/AWS-Lambda.png",
      'className' : "section__lambdaImage",
      'comment': ""
    }
  },
  {
    'title': "Back of the Yards",
    'image': {
      'desc': "Coffee Beans",
      'src': "images/volcancoffee1.jpg",
      'className' : "section__exampleImage",
      'comment': ""
    }
  },
  {
    'title': "Event MGR",
    'image': {
      'desc': "placeholder image",
      'src': "images/example3.png",
      'className' : "section__exampleImage",
      'comment': ""
    }
  },
  {
    'title': "Lindsey Portfolio",
    'image': {
      'desc': "placeholder image",
      'src': "images/example3.png",
      'className' : "section__exampleImage",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
