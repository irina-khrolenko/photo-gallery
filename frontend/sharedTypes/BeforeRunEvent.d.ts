declare global {
interface BeforeRunEvent<TState extends Record<string, unknown>> extends Event {
      state: TState;
    }
}

export {};