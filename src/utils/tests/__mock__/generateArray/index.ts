import { faker } from '@faker-js/faker';

function generateArray() {
  return faker.random
    .word()
    .split('')
    .map(() => ({
      id: faker.datatype.uuid(),
      name: faker.random.word(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }));
}

export default generateArray;
