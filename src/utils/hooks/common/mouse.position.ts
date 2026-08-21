import { useSyncExternalStore } from "react";

export type MousePosition = {
  x: number;
  y: number;
};

let position: MousePosition = {
  x: 0,
  y: 0,
};

const listeners = new Set<(position: MousePosition) => void>();

export function setMousePosition(x: number, y: number): void {
  position = { x, y };
  listeners.forEach((listener) => {
    listener(position);
  });
}

export function getMousePosition(): MousePosition {
  return position;
}

export function subscribeMousePosition(listener: (position: MousePosition) => void,): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useMousePosition(): MousePosition {
  return useSyncExternalStore(
    subscribeMousePosition,
    getMousePosition,
    getMousePosition,
  );
}