import { array } from 'shared/helpers';
import { Eq } from 'fp-ts/Eq';
import { Ord } from 'fp-ts/Ord';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import { Ordering } from 'fp-ts/Ordering';
import { IMessage } from './namespace';

const sumMessages = (xs: IMessage[]) => ({
  ...xs.reduce((acc, x) => ({ ...acc, ...x })),
  isSelected: xs.every(({ isSelected }) => isSelected),
});

const flattenMessages = (xs: IMessage[][]) =>
  xs.reduce(
    (acc: IMessage[], chunk) => [...acc, ...(A.size(chunk) > 1 ? [sumMessages(chunk)] : chunk)],
    []
  );

const messageIdEq: Eq<IMessage> = {
  equals: (x, y) => x.id === y.id,
};

const messageOrd: Ord<IMessage> = {
  ...messageIdEq,
  compare: (x, y) => x.id.localeCompare(y.id) as Ordering,
};

export const mergeMessages = (xs: IMessage[], ys: IMessage[]) =>
  pipe([...xs, ...ys], A.sort(messageOrd), array.group(messageIdEq), flattenMessages);
