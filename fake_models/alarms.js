var faker = require('faker');
const fs = require('fs');

function generateAlarms() {
  let alarms = [];
  for (let id = 0; id < 120; id++) {
    let uuid = faker.random.uuid();
    let status = faker.random.word();
    let value = faker.random.number(100);
    let emailAlarm = faker.random.boolean();
    let alarmName = faker.company.bsNoun();
    let timeOfAlarm = faker.date.recent();
    let alarmPriority = faker.random.number(10);
    let parentDevice = faker.commerce.productName();
    let location = {
      state: faker.address.state(),
      city: faker.address.city(),
      address: faker.address.streetAddress()
    };
    let lastUserToAck = faker.helpers.userCard();
    //alarms = {};

    alarms[id] = {
      ['id']: id,
      uuid,
      status,
      value,
      emailAlarm,
      alarmName,
      timeOfAlarm,
      alarmPriority,
      parentDevice,
      location,
      lastUserToAck
    };
  }
  return alarms;
}

let alarms = generateAlarms();

module.exports = alarms;
