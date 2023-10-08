export class FailedJob {
  id: bigint;
  connection: string;
  queue: string;
  payload: string;
  exception: string;
  failedAt: Date;

  constructor(
    id: bigint,
    connection: string,
    queue: string,
    payload: string,
    exception: string,
    failed_at: Date
  ) {
    this.id = id;
    this.connection = connection;
    this.queue = queue;
    this.payload = payload;
    this.exception = exception;
    this.failedAt = failed_at;
  }
}
