import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import App from './App';
import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';

const setup = propOverrides => {
    const renderer = createRenderer();
    renderer.render(<App />);
    const output = renderer.getRenderOutput();
    return output;
  }
  
  describe('components', () => {
    describe('Header', () => {
      it('should render', () => {
        const output = setup()
        const [ headerContainer ] = output.props.children
        expect(headerContainer.type).toBe(HeaderContainer)
      });
    });
    
    describe('ListContainer', () => {
      it('should render', () => {
        const output = setup();
        const [ , listContainer ] = output.props.children;
        expect(listContainer.type).toBe(ListContainer)
      });
    });

    // describe('FormContainer', () => {
    //     it('should render', () => {
    //       const output = setup();
    //       const [ , formContainer ] = output.props.children;
    //       expect(formContainer.type).toEqual(FormContainer);
    //     });
    //   });
  })
