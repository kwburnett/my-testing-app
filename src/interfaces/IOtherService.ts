export interface IOtherService {
	get: () => Promise<string>;
	search: (query: string) => Promise<string>;
}
