var faker = require('faker');

function generateUsers() {
  var users = [];
  for (var id = 0; id < 20; id++) {
    let user = faker.helpers.userCard();

    user.password = faker.internet.password();
    user.CreationDate = faker.date.recent();
    user.jobTitle = faker.name.jobTitle();
    user.onCall = faker.random.boolean();

    users.push({
      id,
      user
    });
  }

  return { ...users };
}

const fakeUsers = generateUsers();

module.exports = Object.values(fakeUsers);
