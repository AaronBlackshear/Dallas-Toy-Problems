setApp();
/* 
  Today's goal is to create some Node endpoints. Do not modify the above function call, or any of the code below the console.log. For each endpoint, everything you need will be on the req object (body, params, users, etc). If you're not sure what the data will look like, try console.logging the req object. The console will verify as you complete each endpoint
*/

app.get("/api/people", (req, res) => {
  /* On this enpoint, return the users array found on the req object with a status of 200 and either the json or send methods.*/
  res.status(200).json(req.users);
});

app.get("/api/people/:id", (req, res) => {
  /* Here you are passed a parameter in the url. Using the id parameter find the correct user and return it with a status of 200 using the json or send methods */
  req.users.map(cur => req.params.id === cur.id && res.status(200).json(cur));
});

app.put("/api/people/:id", (req, res) => {
  /* Here you are passed a parameter in the url. Using the id parameter find the correct object, and update it with the values passed on the body, then return the updated users array with a status of 200 using the json or send methods */
  // console.log(req.body);
  let updatedArr = req.users.map(cur => {
    if (req.params.id === cur.id) {
      cur[req.body.prop] = req.body.val;
      return cur;
    }
    return cur;
  });
  res.status(200).json(updatedArr);
});

app.post("/api/people", (req, res) => {
  /* On this endpoint, we will be receiving a new user on the request object. Add this user to the users array then return the updated users array with a status of 200 using the json or send methods */
  req.users.push(req.body);
  res.status(200).json(req.users);
});

app.delete("/api/people/:id", (req, res) => {
  /* Finally, you are passed a parameter in the url. Using the id parameter find the correct object, remove it from the users then return the updated users array with a status of 200 using the json or send methods */
  var newArr = req.users.filter((cur, ind) => {
    if (cur.id === req.params.id) {
      req.users.splice(ind, 1);
    }
    return cur;
  });
  res.status(200).json(newArr);
});

console.log(`If you do everything right, this will show up in the console`);

function setApp() {
  let { should } = require("chai");
  let lodashClonedeep = require("lodash.clonedeep");
  should();
  let res = {
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
    }
  };
  let t1 = lodashClonedeep(res);
  let t2 = lodashClonedeep(res);
  let t3 = lodashClonedeep(res);
  let t4 = lodashClonedeep(res);
  let t5 = lodashClonedeep(res);
  let users = [
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
    }
  ];
  return (app = {
    get: function(str, cb) {
      let strArr = str.split(":");
      let id = strArr.length > 1 ? strArr.pop() : undefined;
      if (!id) {
        cb({ users }, t2); // all users
        let { test } = t2;
        test.should.be.an("object");
        test.json.should.be.an("array");
        test.status.should.be.a("number");
        test.status.should.equal(200);
        test.json.length.should.equal(2);
        console.log('"get /api/people working!"');
      } else {
        cb({ params: { id: 1 }, users }, t1); // single user based on id.
        let { test } = t1;
        test.should.be.an("object");
        test.json.should.be.an("object");
        test.json.id.should.be.a("number");
        test.status.should.be.a("number");
        test.status.should.equal(200);
        test.json.first_name.should.equal("Shea");
        console.log('"get /api/people/:id working!"');
      }
    },
    put: function(str, cb) {
      cb(
        {
          body: { prop: "email", val: "shea@email.com" },
          params: { id: 1 },
          users
        },
        t3
      ); // modify user 1, return entire array of users
      let { test } = t3;
      test.should.be.an("object");
      test.json.should.be.an("array");
      test.status.should.be.a("number");
      test.status.should.equal(200);
      test.json[0].email.should.equal("shea@email.com");
      test.json.length.should.equal(2);
      console.log("put /api/people/:id working!");
    },
    post(str, cb) {
      cb(
        {
          body: {
            id: 11,
            first_name: "Steven",
            last_name: "Isbell",
            email: "asdf@qwerty.dm"
          },
          users
        },
        t4
      ); // add new user to the end of the users array
      let { test } = t4;
      users.length.should.equal(3);
      test.should.be.an("object");
      test.json.should.be.an("array");
      test.status.should.be.a("number");
      test.status.should.equal(200);
      test.json.length.should.equal(3);
      test.json
        .slice()
        .pop()
        .should.be.a("object");
      test.json
        .slice()
        .pop()
        .first_name.should.equal("Steven");
      console.log("post /api/people/ working!");
    },
    delete(str, cb) {
      cb({ params: { id: 2 }, users }, t5);
      let { test } = t5;
      test.should.be.an("object");
      test.json.should.be.an("array");
      test.status.should.be.a("number");
      test.status.should.equal(200);
      test.json.length.should.equal(2);
      users.length.should.equal(2);
      console.log("delete /api/people/:id working!");
    }
  });
}
