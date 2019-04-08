var express = require('express');
var router = express.Router();
var {
  connect,
  insert,
  find,
  ObjectId
} = require("../libs/mongo.js");
var token = require("../libs/token.js");
const { verify } = require('../libs/token.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async (req, res, next) => {
  // console.log(req.body);
  let {
    username,
    password
  } = req.body
  let data = await find(`user`, {
    username: username
  })
  console.log(data, data[0].password)
  if (data[0].password === password) {
    res.send({
      status: "success",
      username:username,
      token: token.create({
        username
      })
    });
  } else {
    res.send({
      status: "fail"
    });
  }
});

router.post('/register', async (req, res, next) => {
  let {
    username,
    password,
    
  } = req.body
  let data = await insert("user", [{
    username,
    password,
    
  }]);
  res.send(data);
});

router.post('/findUser', async (req, res, next) => {
  let {
      username
  } = req.body
  let data = await find(`user`, username ? {
      username: username
  } : {})
  res.send(data);

})

router.post('/findUsers', async (req, res, next) => {
  let {
      goodsid
  } = req.body
  let data = await find(`cart`, goodsid ? {
    goodsid: goodsid
  } : {})
  res.send(data);

})

router.post('/autoLogin', async (req, res, next) => {
  console.log(req.body);
  let res1 = verify(req.body.token);
  if(res1){
    res.send(
      msg='success'
    );
  }else{
    res.send(
      msg='fail'
    );
  }

  res.send(req.body);
})

module.exports = router;
