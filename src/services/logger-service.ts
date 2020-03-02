export const log = (message: string): Promise<void> =>
  new Promise(() => console.log(message));
