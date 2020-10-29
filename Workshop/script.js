let people = "";

for (let i = 0; i < 10; i++) {
  const name = faker.name.firstName();
  const city = faker.address.city();
  const job = faker.name.jobTitle();
  const location = faker.address.streetAddress();
  const phone = faker.phone.phoneNumber();
  const mail = faker.internet.email();
  const salary = faker.finance.amount();
  const age = faker.random.number(50);

  people += `{ "name": "${name}", "city": "${city}", "job": "${job}", "location": "${location}", "phone": "${phone}", "mail": "${mail}", "salary": ${salary}, "age":${age} },`;
}

console.log(people);
