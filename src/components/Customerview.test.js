import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Customerview from "./Customerview";
describe('<Customerview />', () => {

    jest.mock('react-router-dom', () => ({
      useParams: jest.fn().mockReturnValue({ id: '3' }),
    }));
  
    it('renders correctly', () => {
      const {getByText} = (<Customerview />);
      expect(" Customer Details").toBeTruthy();
    });
  
  });
  