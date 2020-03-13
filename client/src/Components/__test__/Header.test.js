import React from 'react';
import ReactDom from 'react-dom';
import Header from './../Header';
import { isTSAnyKeyWord } from '@babel/types'


import { render } from '@testing-library/react'

// it("crash test", () => {
//   const div = document.createElement("div");
//   ReactDom.render(<Header/>, div)
// })

// it("renders correctly", () => {
//   const {getByTestId} = render(<Header span/>)
//   expect(getByTestId('span')).toHaveTextContent("☼")
  
// }
// )

it('renders a the header text', () => {
  const { getByText } = render(<Header/>);
  const h1thing = getByText(/Womens World Cup Google Stats/i);

  
})

it('renders a moon for dark mode', () => {
  const { getByText } = render(<Header/>);
  const moon = getByText(/☾/i);

  
})

it('renders a sun for light mode', () => {
  const { getByText } = render(<Header/>);
  const moon = getByText(/☼/i);

  
})


