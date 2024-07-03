type DeepNonNull<T> = T extends object
  ? {
      [P in keyof T]: DeepNonNull<Exclude<T[P], null>>;
    }
  : Exclude<T, null>;

export const replaceNullWithUndefined = <T>(
  obj: T
): DeepNonNull<T> | undefined => {
  if (obj === null) return undefined;
  if (typeof obj === "object" && obj !== null) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // @ts-expect-error modifying object in-place
        obj[key] = replaceNullWithUndefined(obj[key]);
      }
    }
  }
  return obj as DeepNonNull<T>;
};
