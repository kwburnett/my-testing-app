import React from 'react';
import { ServiceContext, ServiceContextProps } from '../providers/ServiceProvider';

const withServices = <T extends object>(
	Component: React.ComponentType<T>,
): React.FunctionComponent<Omit<T, keyof ServiceContextProps>> => props => (
	<ServiceContext.Consumer>
		{({services}) => <Component {...props as T} services={services}/>}
	</ServiceContext.Consumer>
);

export default withServices;
