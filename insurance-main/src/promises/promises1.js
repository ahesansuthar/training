const users = [
  {
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages: 34,
  },
  {
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages: 23,
  },
];

///Q1. Write a promise function to add a new record at the end of array users using spread operator,//
function addLast(users, temp) {
  return new Promise((resolve, reject) => {
    try {
      const updatedUsers = [...users, temp];
      resolve(updatedUsers);
    } catch (error) {
      reject(error);
    }
  });
}
const newUser = {
  id: 4,
  name: "Akbar",
  username: "akbar",
  email: "akbar@example.com",
  phone: "123-456-7890",
  website: "akbar.com",
  password: "password_password",
  ages: 28,
};

addLast(users, newUser)
  .then((updatedUsers) => {
    console.log(updatedUsers);
  })
  .catch((error) => {
    console.log(error);
  });
//Q2. Write a promise function to add a new record at the begining of array users using spread operator,//
function addFirst(users, temp) {
  return new Promise((resolve, reject) => {
    try {
      const updatedUsers = [temp, ...users];
      resolve(updatedUsers);
    } catch (error) {
      reject(error);
    }
  });
}
const newUser1 = {
  id: 4,
  name: "Akbar",
  username: "akbar",
  email: "akbar@example.com",
  phone: "123-456-7890",
  website: "akbar.com",
  password: "password_password",
  ages: 28,
};

addFirst(users, newUser1)
  .then((updatedUsers) => {
    console.log(updatedUsers);
  })
  .catch((error) => {
    console.log(error);
  });
//Q3. Write a promise function to display all records only 3 fields id,name,username.//
function display(users) {
  return new Promise((resolve, reject) => {
    try {
      const filteredUsers = users.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
      }));
      resolve(filteredUsers);
    } catch (error) {
      reject(error);
    }
  });
}
display(users)
  .then((filteredUsers) => {
    console.log(filteredUsers);
  })
  .catch((error) => {
    console.log(error);
  });
//Q4. Write a promise function which will display all records  with name ==='demon' //
function findNameEquals(users) {
  return new Promise((resolve, reject) => {
    try {
      const filteredUsers = users.filter((user) => user.name === "demon");
      if (filteredUsers.length === 0) {
        reject("NO RECORDS FOUND");
      } else {
        resolve(filteredUsers);
      }
    } catch (error) {
      reject(error);
    }
  });
}
findNameEquals(users)
  .then((filteredUsers) => {
    console.log(filteredUsers);
  })
  .catch((error) => {
    console.log(error);
  });
//Q5. Write a promise function which will display all the records starting with name 'B' or any character passed as parameter.//
function findSpecificStartChar(data, char) {
  return new Promise((resolve, reject) => {
    const filteredData = data.filter((user) => user.name.startsWith(char));
    if (filteredData.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(filteredData);
    }
  });
}
findSpecificStartChar(users, "B")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
//Q6. Write a promise function which will display sum of all ages.//
function findSumAges(users) {
  return new Promise((resolve, reject) => {
    const sum = users.reduce((total, user) => {
      if (user.ages) {
        return total + user.ages;
      } else {
        return total;
      }
    }, 0);

    if (sum === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(sum);
    }
  });
}
findSumAges(users)
  .then((sum) => console.log("Sum of ages:", sum))
  .catch((err) => console.log("Error:", err));

//Q7. Write a promise function which will display all the records with only name & ages.//

function findAll(users) {
  return new Promise((resolve, reject) => {
    const result = users.map((user) => {
      return { name: user.name, ages: user.ages };
    });

    if (result.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(result);
    }
  });
}
findAll(users)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//Q8. Write a function to display sum of all ages of records having name starting with 'B'//
function findNameAges(users, startChar) {
  return findSpecificStartChar(users, startChar)
    .then((data) => {
      if (data.length === 0) {
        throw "NO RECORDS FOUND";
      }
      return findAll(data);
    })
    .then((data) => {
      return data.reduce((sum, { ages }) => sum + ages, 0);
    });
}
findNameAges(users, "B")
  .then((sum) => {
    console.log("Sum of ages:", sum);
  })
  .catch((error) => {
    console.error(error);
  });

//Q9. Write a promise function which will display all the records in sorting according to names//

function sorting(data, order) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(data) || data.length === 0) {
      reject("NO RECORDS");
    } else {
      let sortedData = data.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (order === "ASC") {
          return nameA > nameB ? 1 : -1;
        } else {
          return nameA < nameB ? 1 : -1;
        }
      });
      resolve(sortedData);
    }
  });
}
sorting(users, "ASC")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
