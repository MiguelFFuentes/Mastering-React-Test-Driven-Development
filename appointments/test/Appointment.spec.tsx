import { Appointment } from '../src/Appointment';
import React from "react";
import ReactDOM from 'react-dom'

describe('Appointment', () => {
    it('should render the customer first name', () => {
        const customer = {firstName: 'Ashley'};
        const component = <Appointment customer={customer}/>;
        const container = document.createElement('div');

        ReactDOM.render(component, container);

        expect(container.textContent).toMatch('Ashley');
    })
})
