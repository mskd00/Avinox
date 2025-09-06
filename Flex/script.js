console.log("Script loaded");

console.log(1 + 3);

let result = 5 * 2;

const name = "Masoud";

console.log(result);

const age = 17;

if (age > 18) {
  console.log("Adult and your age is " + age);
} else {
  console.log("Minor, Your age is " + age);
}

let score = 90;
calculateScore(score);
function calculateScore(score) {
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else {
    console.log("F");
  }
}

const sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 213));

let Hey;

console.log(Hey, Hey == undefined);

if (1 == "1") {
  console.log("Equal");
}

if (1 === 1) {
  console.log("klfajwekjfk");
}

let isOkay = true;

if (isOkay) {
  console.log("is okay");
} else {
  console.log("not okay");
}

// HOMEWORK:

function getTicketPrice(age) {
  if (age < 12) {
    return 5;
  } else if (age >= 12 && age <= 17) {
    return 10;
  } else {
    return 15;
  }
}
