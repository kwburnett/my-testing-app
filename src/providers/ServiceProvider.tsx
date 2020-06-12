import React, { createContext } from 'react';
import { IOtherService } from '../interfaces/IOtherService';
import { IService } from '../interfaces/IService';
import ServiceOne from '../services/ServiceOne';
import ServiceThree from '../services/ServiceThree';
import ServiceTwo from '../services/ServiceTwo';

export type Services = {
	serviceOne: IService;
	serviceTwo: IService;
	serviceThree: IOtherService;
};

export type ServicesProviderProps = {
	services: Partial<Services>;
};
export type ServiceContextProps = {
	services: Services;
};

const initialContext: ServiceContextProps = {
	services: {
		serviceOne: new ServiceOne(),
		serviceTwo: new ServiceTwo(),
		serviceThree: new ServiceThree(),
	},
};
export const ServiceContext = createContext<ServiceContextProps>(initialContext);

export const ServiceProvider: React.FunctionComponent<Partial<ServicesProviderProps>> = ({ services, children }) => {
	const contextProps: ServiceContextProps = {
		services: {
			serviceOne: services?.serviceOne || initialContext.services.serviceOne,
			serviceTwo: services?.serviceTwo || initialContext.services.serviceTwo,
			serviceThree: services?.serviceThree || initialContext.services.serviceThree,
		},
	};

	return <ServiceContext.Provider value={contextProps}>{children}</ServiceContext.Provider>;
};
