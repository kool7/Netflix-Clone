import { faker } from "@faker-js/faker";

export function createRandomCredentials(): any {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

export function createRandomEmail(): any {
  return {
    email: faker.internet.email(),
  };
}

export function createRandomPassword(): any {
  return {
    password: faker.internet.password(),
  };
}
