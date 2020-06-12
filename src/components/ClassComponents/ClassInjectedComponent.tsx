import React from 'react';
import withServices from '../../injectors/withServices';
import { IOtherService } from '../../interfaces/IOtherService';
import { IService } from '../../interfaces/IService';

export type ClassInjectedComponentProps = {
	services: {
		serviceOne: IService;
		serviceThree: IOtherService;
	};
};

export type ClassInjectedComponentState = {
	textOneToDisplay: string;
	textThreeToDisplay: string;
};

export class ClassInjectedComponent extends React.Component<ClassInjectedComponentProps, ClassInjectedComponentState> {
	constructor(props: ClassInjectedComponentProps) {
		super(props);

		this.state = {
			textOneToDisplay: 'not loaded...',
			textThreeToDisplay: 'not loaded...',
		};
	}

	public componentDidMount = () => {
		this.props.services.serviceOne.get().then((response: string) => {
			this.setState({
				textOneToDisplay: response,
			});
		});
		this.props.services.serviceThree.search('nothin').then((response: string) => {
			this.setState({
				textThreeToDisplay: response,
			});
		});
	};

	public render = () => (
		<div>
			<div className="text-one">{this.state.textOneToDisplay}</div>
			<div className="text-two">{this.state.textThreeToDisplay}</div>
		</div>
	);
}

export default withServices(ClassInjectedComponent);
