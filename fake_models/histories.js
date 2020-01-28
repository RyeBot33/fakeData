var faker = require('faker');

function generateHistories() {
  let histories = [];
  for (var id = 0; id < 250; id++) {
    let historyName = faker.commerce.productName();
    let alarmCount = faker.random.number({ min: 1, max: 100 });
    let records = [];
    for (var y = 0; y < 500; y++) {
      let timestamp = faker.date.recent();
      let value = faker.random.number({ min: 30, max: 200 });
      let status = faker.company.bsNoun();
      records.push({
        timestamp,
        value,
        status
      });
    }
    histories.push({
      id,
      historyName,
      alarmCount,
      records
    });
  }
  return histories;
}

const fakeHistories = generateHistories();

module.exports = fakeHistories;
