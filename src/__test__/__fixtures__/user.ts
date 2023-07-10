import { faker } from "@faker-js/faker";

export function createRandomUser(): any {
  return {
    isSignedIn: true,
    email: faker.internet.email(),
    uid: faker.string.uuid(),
  };
}
