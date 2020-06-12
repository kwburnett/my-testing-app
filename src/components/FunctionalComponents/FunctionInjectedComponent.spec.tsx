import { act } from '@testing-library/react';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { IOtherService } from '../../interfaces/IOtherService';
import { IService } from '../../interfaces/IService';
import { FunctionalInjectedComponent } from './FunctionInjectedComponent';

describe('FunctionalInjectedComponent', () => {
	const services: { serviceOne: IService; serviceThree: IOtherService } = {
		serviceOne: {
			get: () => Promise.resolve('serviceOne tested!'),
		},
		serviceThree: {
			get: () => Promise.resolve('serviceThree tested!'),
			search: (query: string) => Promise.resolve('serviceThree tested and searched!'),
		},
	};
	it('displays properties correctly', (done) => {
		let component: ReactWrapper;
		act(() => {
			component = mount(
				<FunctionalInjectedComponent services={services}/>
			);
		});
		setTimeout(() => {
			expect(component.find('.text-one').text()).toEqual('serviceOne tested!');
			expect(component.find('.text-two').text()).toEqual('serviceThree tested and searched!');
			component.unmount();
			done();
		}, 100);
	});
});
