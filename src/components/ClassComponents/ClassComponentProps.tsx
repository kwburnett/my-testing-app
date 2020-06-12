import React from 'react';
import { IOtherService } from '../../interfaces/IOtherService';
import { IService } from '../../interfaces/IService';

export type ClassComponentPropsProps = {
	serviceOne: IService;
	serviceThree: IOtherService;
};

export type ClassComponentPropsState = {
	textOneToDisplay: string;
	textThreeToDisplay: string;
};

class ClassComponentProps extends React.Component<ClassComponentPropsProps, ClassComponentPropsState> {
	constructor(props: ClassComponentPropsProps) {
		super(props);

		this.state = {
			textOneToDisplay: 'not loaded...',
			textThreeToDisplay: 'not loaded...'
		};
	}

	public componentDidMount = () => {
		this.props.serviceOne.get().then((response: string) => {
			this.setState({
				textOneToDisplay: response
			});
		});
		this.props.serviceThree.search('nothin').then((response: string) => {
			this.setState({
				textThreeToDisplay: response
			});
		});
	}

	public render = () => (
		<div>
			<div className="text-one">{this.state.textOneToDisplay}</div>
			<div className="text-two">{this.state.textThreeToDisplay}</div>
		</div>
	);
}

export default ClassComponentProps;
