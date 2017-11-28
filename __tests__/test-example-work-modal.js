import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const myExample = {
  'title': "Serverless Portfolio",
  'href': "https://cdanmar.com",
  'desc': "The website you are currently visiting. It is written in Node and is hosted in AWS Lambda",
  'image': {
    'desc': "Lamnda Symbol",
    'src': "images/AWS-Lambda.png",
    'className' : "section__lambdaImage",
    'comment': ""
  }
};

configure({ adapter: new Adapter() });

describe("ExampleWorkModal component", () => {
  let component = shallow(<ExampleWorkModal example={myExample}
    open={false}/>);
  let openComponent = shallow(<ExampleWorkModal example={myExample}
    open={true}/>);

  let anchors = component.find("a");

  it("Should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Should link to our project", () => {
    expect(anchors.getElement().props.href).toEqual(myExample.href)
  });

  it("Should have the modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  })
});
