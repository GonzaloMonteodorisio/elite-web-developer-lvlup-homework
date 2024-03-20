/*
  Patrón Builder: sirve para crear, paso a paso, objetos complejos.
  Puede delegar la construcción de objetos complejos, paso a paso (ciertas propiedades en vez de todas).
*/

export interface Person {
  name?: string,
  age?: number,
  email?: string,
  address?: string,
}

export class PersonBuilder {
  private person: Person;

  constructor() {
    this.person = {};
  }

  withName (name: string): PersonBuilder {
    this.person.name = name;
    return this;
  };

  withAge (age: number): PersonBuilder {
    this.person.age = age;
    return this;
  };

  withEmail(email: string): PersonBuilder {
    this.person.email = email;
    return this;
  };

  withAddress (address: string): PersonBuilder {
    this.person.address = address;
    return this;
  };

  build(): Person {
    return this.person;
  }
}

// Con arrow function (probar !!!!!!!!)


export const newPersonBuilder = () => {
  let person: Person = {};
  return {
    withName: (name: string) => {
      person.name = name;
      return this;
    },
    withAge: (age: number) => {
      person.age = age;
      return this;
    },   
    withEmail: (email: string) => {
      person.email = email;
      return this;
    },
    withAddress: (address: string) => {
      person.address = address;
      return this;
    },   
  }
}

/*
  Imaginemos que queremos crear una función a la cual le pasamos un objeto persona y un array de keys
  ['name', 'age'] -> {name: 'Gonzalo', age: 41}
  Que me devuelva sólo los atributos que están en el vector
*/

export const getData = <T, K extends keyof T>(obj:T, props:K[]) => {
  const result = {} as Pick<T,K>;
  props.forEach((prop) => {
    result[prop] = obj[prop];
  });

  return result;
}



