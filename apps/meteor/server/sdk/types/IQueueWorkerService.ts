export interface IQueueWorkerService {
<<<<<<< HEAD
	queueWork<T extends Record<string, unknown>>(to: string, data: T): Promise<void>;
=======
	getConfig(): unknown;
>>>>>>> feat/chat-transcript
}
