type Enum<E> = Record<keyof E, number | string> | { [k: number]: number };

export function getEnumKVPs<E extends Enum<E>>(enumType: E) {
  const arrayObjects = [];

  for (const [propertyKey, propertyValue] of Object.entries(enumType)) {
    if (!Number.isNaN(Number(propertyKey))) {
      continue;
    }
    arrayObjects.push({ value: propertyValue, key: propertyKey });
  }

  return arrayObjects;
}
