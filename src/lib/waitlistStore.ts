import { useSyncExternalStore } from "react";

const JOINED_KEY = "steady_waitlist_joined";

type State = { open: boolean; joined: boolean };

let state: State = {
  open: false,
  joined: (() => {
    try {
      return sessionStorage.getItem(JOINED_KEY) === "1";
    } catch {
      return false;
    }
  })(),
};

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const waitlistStore = {
  getState: () => state,
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  open: () => {
    state = { ...state, open: true };
    emit();
  },
  close: () => {
    state = { ...state, open: false };
    emit();
  },
  setOpen: (open: boolean) => {
    state = { ...state, open };
    emit();
  },
  markJoined: () => {
    try {
      sessionStorage.setItem(JOINED_KEY, "1");
    } catch {}
    state = { ...state, joined: true };
    emit();
  },
};

export const useWaitlist = () =>
  useSyncExternalStore(waitlistStore.subscribe, waitlistStore.getState, waitlistStore.getState);

export const openWaitlistFromCTA = () => {
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    event: "install_click",
    button_text: "Download for iOS",
    concept: "steady_v1",
  });
  waitlistStore.open();
};