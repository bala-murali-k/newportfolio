type ScrollRequest = {
  percent: number;
  behavior?: ScrollBehavior;
};

type ScrollListener = (request: ScrollRequest) => void;

const listeners = new Set<ScrollListener>();

export function requestMinimalScroll( percent: number, behavior: ScrollBehavior = 'smooth' ) {
  listeners.forEach((listener) => {
    listener({
      percent,
      behavior,
    });
  });
}

export function subscribeToMinimalScroll( listener: ScrollListener ) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}