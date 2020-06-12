import { IService } from '../interfaces/IService';

export default class ServiceTwo implements IService {
	public get(): Promise<string> {
		return Promise.resolve('service two');
	}
}
