export type DeepOptional<T> = {
  [P in keyof T]?: T[P] extends object ? DeepOptional<T[P]> : T[P];
};

export type Optional<T> = {
  [P in keyof T]?: T[P];
};
