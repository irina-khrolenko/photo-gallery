declare global {
interface AfterRunEvent<TState, TResult> extends BeforeRunEvent<TState extends Record<string, unknown> ? TState : never> {
      result: TResult;
    }
}

export {};