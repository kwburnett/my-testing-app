import { act } from '@testing-library/react';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { IOtherService } from '../../interfaces/IOtherService';
import { IService } from '../../interfaces/IService';
import FunctionalComponentProps from './FunctionalComponentProps';

describe('FunctionalComponentProps', () => {
	const serviceOne: IService = {
		get: () => Promise.resolve('serviceOne tested!'),
	};
	const serviceThree: IOtherService = {
		get: () => Promise.resolve('serviceThree tested!'),
		search: (query: string) => Promise.resolve('serviceThree tested and searched!'),
	};
	it('displays properties correctly', (done) => {
		let component: ReactWrapper;
		act(() => {
			component = mount(
				<FunctionalComponentProps serviceOne={serviceOne} serviceThree={serviceThree}></FunctionalComponentProps>,
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
