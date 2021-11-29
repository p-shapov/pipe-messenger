export const withDelay =
  (delay: number) =>
  <T>(lazy: () => T) =>
    new Promise<T>((resolve, reject) =>
      setTimeout(() => {
        try {
          resolve(lazy());
        } catch (err) {
          if (err instanceof Error) {
            reject(err);
          }
        }
      }, delay)
    );
