import { IOtherService } from '../interfaces/IOtherService';

export default class ServiceThree implements IOtherService {
	public get(): Promise<string> {
		return Promise.resolve('service three');
	}

	public search(query: string): Promise<string> {
		return Promise.resolve('service three - I found some stuff!');
	}
}
