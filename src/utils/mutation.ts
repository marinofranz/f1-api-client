export function stringsToDates<T extends Record<string, any>>(object: T): T {
  const result: Record<string, any> = {};

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];

      if (typeof value === "string" && !isNaN(Date.parse(value))) {
        result[key] = new Date(value);
      } else {
        result[key] = value;
      }
    }
  }

  return result as T;
}

export function nullify<T extends Record<string, any>>(object: T): T {
  const result: Record<string, any> = {};

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];

      if (value === "None" || value === "NaT") {
        result[key] = null;
      } else {
        result[key] = value;
      }
    }
  }

  return result as T;
}

export function deleteProps<T extends object, K extends keyof T>(
  object: T,
  array: K[]
): Omit<T, K> {
  var newObject = { ...object };
  array.forEach((prop) => {
    delete newObject[prop];
  });

  return newObject;
}
