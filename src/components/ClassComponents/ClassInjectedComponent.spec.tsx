import { shallow } from 'enzyme';
import React from 'react';
import { IOtherService } from '../../interfaces/IOtherService';
import { IService } from '../../interfaces/IService';
import { ClassInjectedComponent } from './ClassInjectedComponent';

describe('ClassInjectedComponent', () => {
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
		const component = shallow(<ClassInjectedComponent services={services} />);
		setTimeout(() => {
			expect(component.find('.text-one').text()).toEqual('serviceOne tested!');
			expect(component.find('.text-two').text()).toEqual('serviceThree tested and searched!');
			done();
		}, 100);
	});
});
