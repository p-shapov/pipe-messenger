export function assertNonNullable<A>(a: A, message: string): asserts a {
  if (!a) {
    throw new Error(message);
  }
}
