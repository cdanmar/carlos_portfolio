import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a 'section' element", () => {
   expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").lenght).toEqual(myWork.lenght);
  });
});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);
  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image src set correctly", () => {
    expect(images.getElement().props.src).toEqual(myWork[1].image.src);
  });
});
