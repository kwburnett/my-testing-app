import React, { useEffect, useState } from 'react';
import withServices from '../../injectors/withServices';
import { IOtherService } from '../../interfaces/IOtherService';
import { IService } from '../../interfaces/IService';

export type FunctionalInjectedComponentProps = {
	services: {
		serviceOne: IService;
		serviceThree: IOtherService;
	};
};

export const FunctionalInjectedComponent: React.FunctionComponent<FunctionalInjectedComponentProps> = (props) => {
	const [textOneToDisplay, setTextOneDisplay] = useState('not loaded...');
	const [textThreeToDisplay, setTextThreeDisplay] = useState('not loaded...');

	useEffect(() => {
		props.services.serviceOne.get().then((response) => {
			setTextOneDisplay(response);
		});
		props.services.serviceThree.search('searching').then((response) => {
			setTextThreeDisplay(response);
		});
	}, [props.services.serviceOne, props.services.serviceThree]);

	return (
		<div>
			<div className="text-one">{textOneToDisplay}</div>
			<div className="text-two">{textThreeToDisplay}</div>
		</div>
	);
};

export default withServices(FunctionalInjectedComponent);
