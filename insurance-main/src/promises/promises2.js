const family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 },
];

//Q1. Write a promise function which will display all the name with age > 26//
function findAge(family) {
  return new Promise((resolve, reject) => {
    const filteredFamily = family.filter((member) => member.age > 26);
    if (filteredFamily.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(filteredFamily.map((member) => member.name));
    }
  });
}

findAge(family)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

//Q2. Write a promise function which will display all the records starting with name 'J' or any character passed as parameter.//
function findSpecificStartChar(arr, char) {
  return new Promise((resolve, reject) => {
    const filteredArr = arr.filter((person) => {
      const name = person.name.toLowerCase();
      return name.startsWith(char.toLowerCase());
    });
    if (filteredArr.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(filteredArr);
    }
  });
}
findSpecificStartChar(family, "J")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//Q3. Write a promise function which will display all the records ending with name 'nny' or any character passed as parameter.//
function findSpecificEndChar(family, char) {
  return new Promise((resolve, reject) => {
    const filteredData = family.filter((item) => item.name.endsWith(char));
    if (filteredData.length > 0) {
      resolve(filteredData);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
}
findSpecificEndChar(family, "nny")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Q4. Write a promise function which will display all the records with only name.//
function findAllNames(family) {
  return new Promise((resolve, reject) => {
    const names = family.map((person) => person.name);
    if (names.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(names);
    }
  });
}
findAllNames(family)
  .then((names) => console.log(names))
  .catch((error) => console.log(error));
  
///Q5. Write a promise function which will display all the records in sorting according to names.///
function Sorting(data, order) {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      reject("NO RECORDS");
    } else {
      const sortedData = data.sort((a, b) => {
        if (order === "ASC") {
          return a.name.localeCompare(b.name);
        } else if (order === "DESC") {
          return b.name.localeCompare(a.name);
        }
      });
      resolve(sortedData);
    }
  });
}
Sorting(family, "ASC")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
