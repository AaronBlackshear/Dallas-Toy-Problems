function userIsInDb(req, res) {
  return req
    .getUser(req.user.id)
    .then(user => {
      if (user.length) return res.status(200).json(...user);
      else
        return req
          .addUser(req.user)
          .then(user => res.status(200).json(...user));
    })
    .catch(err => res.status(500).json(err));
}

/* Do not change the code below, it is for testing purposes */

const res = {
  test: {},
  status: function(n) {
    this.test.status = n;
    return this;
  },
  json: function(obj) {
    this.test.json = obj;
    return this;
  },
  send: function(obj) {
    this.test.json = obj;
    return this;
  },
  redirect: function(str) {
    this.test.redirect = str;
    return this;
  }
};

const shea = {
  id: 1,
  first_name: "Shea",
  last_name: "Close",
  email: "nope@uhNo.com"
};

const steven = {
  id: 11,
  first_name: "Steven",
  last_name: "Isbell",
  email: "nobody@likesme.com"
};

const jaylan = {
  id: 12,
  first_name: "Jaylan",
  last_name: "Jones",
  email: "everybody@likesme.com"
};

const users = [
  {
    id: 1,
    first_name: "Shea",
    last_name: "Close",
    email: "nope@uhNo.com"
  },
  {
    id: 2,
    first_name: "Grady",
    last_name: "Legen",
    email: "glegen1@slate.com"
  },
  {
    id: 3,
    first_name: "Delora",
    last_name: "Duckett",
    email: "dduckett2@usatoday.com"
  },
  {
    id: 4,
    first_name: "Harriott",
    last_name: "Hadigate",
    email: "hhadigate3@macromedia.com"
  },
  {
    id: 5,
    first_name: "Regine",
    last_name: "Jerg",
    email: "rjerg4@weibo.com"
  },
  {
    id: 6,
    first_name: "Giffard",
    last_name: "Carruthers",
    email: "gcarruthers5@about.com"
  },
  {
    id: 7,
    first_name: "Maurizio",
    last_name: "McIsaac",
    email: "mmcisaac6@github.com"
  },
  {
    id: 8,
    first_name: "Ravi",
    last_name: "Eubank",
    email: "reubank7@time.com"
  },
  {
    id: 9,
    first_name: "Eydie",
    last_name: "Gunning",
    email: "egunning8@google.de"
  },
  {
    id: 10,
    first_name: "Auberon",
    last_name: "Davidek",
    email: "adavidek9@phoca.cz"
  }
];

function getUserPromise() {
  let bool = 0;
  return function(id) {
    return new Promise((res, rej) => {
      bool++;
      if (bool > 2) {
        return rej(id);
      }
      return res(users.filter(c => +c.id === +id));
    });
  };
}

function addUserPromise() {
  return function(user) {
    return new Promise((res, rej) => {
      users.push(user);
      return res([user]);
    });
  };
}

let chai = require("chai");
let lodashClonedeep = require("lodash.clonedeep");

let getUser = getUserPromise();
let addUser = addUserPromise();
const test1 = userIsInDb(
  { getUser, addUser, user: shea },
  lodashClonedeep(res)
).then(({ test }) => {
  if (test === undefined) {
    console.log(
      "Failed to retrieve user to database, please ensure you are returning promises"
    );
  } else return test;
});
const test2 = userIsInDb(
  { getUser, addUser, user: steven },
  lodashClonedeep(res)
).then(({ test }) => {
  if (test === undefined) {
    console.log(
      "Failed to add user to database, please ensure you are returning promises"
    );
  } else return test;
});
const test3 = userIsInDb(
  { getUser, addUser, user: jaylan },
  lodashClonedeep(res)
)
  .then(({ test }) => {
    if (test === undefined) {
      console.log(
        "Failed to add user to database, please ensure you are returning promises"
      );
    } else return test;
  })
  .catch(() => {
    console.log(
      "Failed to handle promise rejections, please ensure you are adding .catches for all promises"
    );
  });

var expect = require("chai").expect;

Promise.all([test1, test2, test3]).then(([t1, t2, t3]) => {
  expect(t1).to.be.a("object");
  expect(t1.json).to.be.a("object");
  expect(t1.json.id).to.be.a("number");
  expect(t1.json.id).to.equal(1);
  expect(t1.status).to.be.a("number");
  expect(t1.status).to.equal(200);

  expect(t2).to.be.a("object");
  expect(t2.json).to.be.a("object");
  expect(t2.json.id).to.be.a("number");
  expect(t2.json.id).to.equal(11);
  expect(t2.status).to.be.a("number");
  expect(t2.status).to.equal(200);

  expect(t3).to.be.a("object");
  expect(t3.json).to.be.a("number");
  expect(t3.json).to.equal(12);
  expect(t3.status).to.be.a("number");
  expect(t3.status).to.equal(500);
  console.log("All Tests passing, Congrats!");
});
