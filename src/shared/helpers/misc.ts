import { assertNonNullable } from './assertions';

export function nonNullable(name: string) {
  return function fn<T>(a: T | null | undefined) {
    assertNonNullable(a, `${name} doesn't exist`);

    return a;
  };
}

export const trace = <T>(x: T) => {
  // eslint-disable-next-line no-console
  console.log(x);

  return x;
};
