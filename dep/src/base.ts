export abstract class BaseClass {
  #a: number | undefined;
  readonly #b: number;

  constructor() {
    this.#b = 2;
  }

  get a() {
    if (this.#a === undefined) {
      this.#a = 1;
    }
    return this.#a;
  }

  get b() {
    return this.#b;
  }
}

export abstract class BaseClass2 {
  #a: number | undefined;
  readonly #b: number;

  constructor() {
    this.#b = 2;
  }

  get a() {
    if (this.#a === undefined) {
      this.#a = 1;
    }
    return this.#a;
  }

  get b() {
    return this.#b;
  }
}
