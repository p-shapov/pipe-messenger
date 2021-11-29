type TEvents =
  | 'chatOpen'
  | 'profileInfoOpen'
  | 'profileInfoClose'
  | 'selectionModeStart'
  | 'selectionModeEnd'
  | 'messageSelect';

interface IEventEmitter {
  subscribe: (event: TEvents, listener: () => void) => void;
}

export type { TEvents, IEventEmitter };
