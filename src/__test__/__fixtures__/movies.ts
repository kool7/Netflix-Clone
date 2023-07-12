import { faker } from '@faker-js/faker';

export function createRandomMovies(): any {
  return {
    backdrop_path: faker.image.url(),
    poster_path: faker.image.url(),
    id: faker.number.int(),
    name: faker.word.sample()
  };
}

export const MOVIES: any[] = faker.helpers.multiple(createRandomMovies, {
  count: 15,
});