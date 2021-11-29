import { Eq } from 'fp-ts/Eq';
import { pipe } from 'fp-ts/function';
import * as A from 'fp-ts/Array';

export const group = <T>(eq: Eq<T>): ((xs: T[]) => T[][]) =>
  A.chop((xs) => {
    const { init, rest } = pipe(
      xs,
      A.spanLeft((x: T) => eq.equals(x, xs[0]))
    );

    return [init, rest];
  });
