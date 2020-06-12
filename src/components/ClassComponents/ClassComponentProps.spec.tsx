import { shallow } from 'enzyme';
import React from 'react';
import { IOtherService } from '../../interfaces/IOtherService';
import { IService } from '../../interfaces/IService';
import ClassComponentProps from './ClassComponentProps';

describe('ClassComponentProps', () => {
	const serviceOne: IService = {
		get: () => Promise.resolve('serviceOne tested!'),
	};
	const serviceThree: IOtherService = {
		get: () => Promise.resolve('serviceThree tested!'),
		search: (query: string) => Promise.resolve('serviceThree tested and searched!'),
	};
	it('displays properties correctly', (done) => {
		const component = shallow(
			<ClassComponentProps serviceOne={serviceOne} serviceThree={serviceThree}></ClassComponentProps>,
		);
		setTimeout(() => {
			expect(component.find('.text-one').text()).toEqual('serviceOne tested!');
			expect(component.find('.text-two').text()).toEqual('serviceThree tested and searched!');
			done();
		}, 100);
	});
});
