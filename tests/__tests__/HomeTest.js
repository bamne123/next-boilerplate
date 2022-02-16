/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from 'Pages/index';

test('Check for Getting Started Text', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Get started by editing')).toBeInTheDocument();
});
