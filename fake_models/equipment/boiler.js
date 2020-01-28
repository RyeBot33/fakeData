var faker = require('faker');

function generateDevices() {
  let devices = [];
  for (var id = 0; id < 6; id++) {
    let deviceName = faker.commerce.productName();
    let status = faker.random.word();
    let serial = faker.random.number();
    let model = faker.random.word();
    let yearInstalled = faker.date.recent();
    let manufactureDate = faker.date.recent();
    let location = faker.address.city();
    let parentDevice = faker.commerce.productName();
    let type = faker.database.type();
    let networkNumber = faker.random.number({ min: 0, max: 4000 });
    let deviceId = faker.internet.mac();
    let ipAddressv4 = faker.internet.ip();
    let ipAddressv6 = faker.internet.ipv6();
    let protocol = faker.internet.protocol();
    let lastAlarmTime = faker.date.recent();
    let btu = faker.random.word();
    let gasFired = faker.random.boolean();
    let secondaryLoop = faker.random.boolean();
    let url = faker.internet.url();
    let warranty = {
      start: faker.date.past(),
      length: faker.random.number()
    };
    let numberOfComponents = getRandomInt(10);
    let components = [];
    for (let i = 0; i < numberOfComponents; i++) {
      let component = {
        name: faker.random.word(),
        id: i,
        type: faker.database.type(),
        model: faker.random.word(),
        serial: faker.random.word(),
        beenReplaced: faker.random.boolean(),
        dateLastReplaced: faker.date.recent(),
        status: faker.random.word()
      };

      components.push(component);
    }
    let numberOfRepairs = getRandomInt(30);
    let repairs = [];
    for (let y = 0; y < numberOfRepairs; y++) {
      let repair = {
        id: y,
        status: faker.random.words(),
        dateStarted: faker.date.past(),
        dateFinished: faker.date.recent(),
        description: faker.lorem.words(),
        company: faker.company.companyName(),
        leadTechName: faker.name.findName(),
        component: components[y]
      };
      repairs.push(repair);
    }

    let numberOfPoints = Math.max(getRandomInt(50), 30);
    let points = [];
    for (let z = 0; z < numberOfPoints; z++) {
      let point = {
        id: z,
        name: faker.random.word(),
        status: faker.random.words(),
        writeable: faker.random.boolean(),
        historyEnabled: faker.random.boolean(),
        historyLink: faker.internet.url(),
        out: faker.random.number(),
        units: faker.random.words(),
        lastAlarmTime: faker.date.recent()
      };
      points.push(point);
    }

    devices.push({
      id,
      deviceName,
      deviceId,
      status,
      btu,
      gasFired,
      secondaryLoop,
      serial,
      model,
      yearInstalled,
      manufactureDate,
      location,
      parentDevice,
      type,
      networkNumber,
      ipAddressv4,
      ipAddressv6,
      protocol,
      lastAlarmTime,
      url,
      warranty,
      components,
      repairs,
      points
    });
  }

  return devices;
}

const fakeDevices = generateDevices();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = fakeDevices;
