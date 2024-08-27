import { create } from 'zustand';
import type { Thing } from '../types';

interface ThingStore {
	things: Thing[];
	addThing: (thing: Thing) => void;
	updateThing: (thing: Thing) => void;
	removeThing: (thing: Thing) => void;
}

export const useThingStore = create<ThingStore>((set) => ({
	things: [],
	addThing: (thing) => set((state) => ({ things: [...state.things, thing] })),
	updateThing: (thing) =>
		set((state) => ({
			things: state.things.map((t) => (t.id === thing.id ? thing : t)),
		})),
	removeThing: (thing) =>
		set((state) => ({ things: state.things.filter((t) => t.id !== thing.id) })),
}));

