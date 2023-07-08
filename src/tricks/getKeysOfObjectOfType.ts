type Obj = {
  a: string;
  b: string;
  c: number;
  d: number;
};

type KeysOfValue<T, TCondition> = {
  [K in keyof T]: T[K] extends TCondition ? K : never;
}[keyof T];

type User = {
  firstName: string;
  lastName: string;
  age: number;
  numberOfCats: number;
};

type StringKeysOfObj = KeysOfValue<User, string>;
