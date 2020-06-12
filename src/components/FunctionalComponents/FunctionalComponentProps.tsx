import React, { useEffect, useState } from 'react';
import { IOtherService } from '../../interfaces/IOtherService';
import { IService } from '../../interfaces/IService';

export type FunctionalComponentPropsProps = {
	serviceOne: IService;
	serviceThree: IOtherService;
};

const FunctionalComponentProps: React.FunctionComponent<FunctionalComponentPropsProps> = (props) => {
	const [textOneToDisplay, setTextOneDisplay] = useState('not loaded...');
	const [textThreeToDisplay, setTextThreeDisplay] = useState('not loaded...');

	useEffect(() => {
		props.serviceOne.get().then((response) => {
			setTextOneDisplay(response);
		});
		props.serviceThree.search('searching').then((response) => {
			setTextThreeDisplay(response);
		});
	}, [props.serviceOne, props.serviceThree]);

	return (
		<div>
			<div className="text-one">{textOneToDisplay}</div>
			<div className="text-two">{textThreeToDisplay}</div>
		</div>
	);
};

export default FunctionalComponentProps;
