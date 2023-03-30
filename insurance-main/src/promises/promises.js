const data = [
  { name: "Butters", age: 3, type: "dog" },
  { name: "Lizzy", age: 6, type: "dog" },
  { name: "Red", age: 1, type: "cat" },
  { name: "Joey", age: 3, type: "dog" },
];

///Q1. Write a promise function which will display all records  with type ==='dog'///
function findAllDogs(data) {
  return new Promise((resolve, reject) => {
    const dogs = data.filter((item) => item.type === "dog");
    if (dogs.length > 0) {
      resolve(dogs);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
}
findAllDogs(data)
  .then((dogs) => console.log(dogs))
  .catch((error) => console.log(error));

///Q2. Write a promise function which will display all the records starting with name 'B' or any character passed as parameter.//
function findSpecificStartChar(data, startChar) {
  return new Promise((resolve, reject) => {
    const filteredData = data.filter((record) => {
      return record.name.startsWith(startChar);
    });
    if (filteredData.length > 0) {
      resolve(filteredData);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
}
findSpecificStartChar(data, "B")
  .then((filteredData) => {
    console.log(filteredData);
  })
  .catch((error) => {
    console.log(error);
  });

//////Q3. Write a promise function which will display sum of all ages.////
function findSumAges(data) {
  return new Promise((resolve, reject) => {
    const sum = data.reduce((total, item) => {
      return total + item.age;
    }, 0);
    if (sum === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(sum);
    }
  });
}
findSumAges(data)
  .then((sum) => {
    console.log(sum);
  })
  .catch((error) => {
    console.log(error);
  });

////Q4. Write a promise function which will display all the records with only name & ages.////
function findAll(data) {
  return new Promise((resolve, reject) => {
    const mappedData = data.map((record) => {
      return { name: record.name, age: record.age };
    });
    if (mappedData.length > 0) {
      resolve(mappedData);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
}
findAll(data)
  .then((mappedData) => {
    console.log(mappedData);
  })
  .catch((error) => {
    console.log(error);
  });

///Q5. Write a function to display sum of all ages of records having type as dog.////
function sumAgesOfDogs(data) {
  return findAllDogs(data)
    .then((dogs) => {
      return findSumAges(dogs);
    })
    .then((sum) => {
      console.log("Total sum of ages of dogs: ", sum);
    })
    .catch((error) => {
      console.log(error);
    });
}

///Q6. Write a promise function which will display all the records in sorting according to names.///

function sorting(data, order) {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      reject("NO RECORDS");
    } else {
      const sortedData = data.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (order === "ASC") {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        } else if (order === "DESC") {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }
      });
      resolve(sortedData);
    }
  });
}
sorting(data, "ASC")
  .then((sortedData) => {
    console.log(sortedData);
  })
  .catch((error) => {
    console.log(error);
  });
sorting(data, "DESC")
  .then((sortedData) => {
    console.log(sortedData);
  })
  .catch((error) => {
    console.log(error);
  });
