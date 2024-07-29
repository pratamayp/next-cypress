import React from 'react';
import Page from './page';

describe('<Page />', () => {
  it('renders', () => {
    cy.mount(<Page />);
  });
});
