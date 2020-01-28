var faker = require('faker');

function generateSchedules() {
  let schedules = [];
  for (let id = 0; id < 10; id++) {
    let name = faker.lorem.word();
    let enabled = faker.random.boolean();
    let priority = faker.random.number(16);
    let events = [
      {
        eventName: faker.lorem.word(),
        eventStart: faker.date.past(),
        eventEnd: faker.date.future(),
        createdBy: faker.helpers.userCard(),
        eventValue: faker.random.boolean()
      },
      {
        eventName: faker.lorem.word(),
        eventStart: faker.date.past(),
        eventEnd: faker.date.future(),
        createdBy: faker.helpers.userCard(),
        eventValue: faker.random.boolean()
      },
      {
        eventName: faker.lorem.word(),
        eventStart: faker.date.past(),
        eventEnd: faker.date.future(),
        createdBy: faker.helpers.userCard(),
        eventValue: faker.random.boolean()
      },
      {
        eventName: faker.lorem.word(),
        eventStart: faker.date.past(),
        eventEnd: faker.date.future(),
        createdBy: faker.helpers.userCard(),
        eventValue: faker.random.boolean()
      }
    ];

    schedules.push({
      id,
      name,
      enabled,
      priority,
      events
    });
  }

  return { ...schedules };
}

const fakeSchedules = generateSchedules();

module.exports = Object.values(fakeSchedules);
