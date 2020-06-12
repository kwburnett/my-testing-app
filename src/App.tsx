import React from 'react';
import './App.css';
import ClassComponentProps from './components/ClassComponents/ClassComponentProps';
import FunctionalComponentProps from './components/FunctionalComponents/FunctionalComponentProps';
import ServiceOne from './services/ServiceOne';
import ServiceThree from './services/ServiceThree';
import { ServiceProvider } from './providers/ServiceProvider';
import FunctionalInjectedComponent from './components/FunctionalComponents/FunctionInjectedComponent';
import ClassInjectedComponent from './components/ClassComponents/ClassInjectedComponent';

const App: React.FunctionComponent = () => {
	return (
		<div className="App">
			<ClassComponentProps serviceOne={new ServiceOne()} serviceThree={new ServiceThree()}></ClassComponentProps>
			<FunctionalComponentProps
				serviceOne={new ServiceOne()}
				serviceThree={new ServiceThree()}
			></FunctionalComponentProps>
			<ServiceProvider>
				<ClassInjectedComponent />
				<FunctionalInjectedComponent />
			</ServiceProvider>
		</div>
	);
};

export default App;
