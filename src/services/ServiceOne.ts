import { IService } from '../interfaces/IService';

export default class ServiceOne implements IService {
	public get(): Promise<string> {
		return Promise.resolve('service one');
	}
}
