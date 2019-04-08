const express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });


var {
    connect,
    insert,
    find,
    ObjectId,
    del
  } = require("../libs/mongo.js");

// 查找商品
router.get('/',async(req,res)=>{
    let username = req.query.username;
    // let username = req.body;
    
    // let Params = [{username}];
    // res.send(req.query)
    // console.log(Params)
    console.log(username)
    var data = await find('cart',{username})
      
    
    res.send(data);
    console.log(data)
})


router.delete('/',urlencodedParser,async(req,res)=>{
  // let id = req.query.id;
  // console.log(req.query.id)
  var rcart = await del(`cart`,{})
  
  var data = await find(`cart`,{});
  res.send(data);
})
  
// 删除商品
// db文件夹下的find可以用来删除商品
// router.delete('/',urlencodedParser,async(req,res)=>{
//     let {id} = req.query;
//     // console.log(req.query)
//     var delSql = 'DELETE FROM cart where id=' + id;
//     var data = await db.find(delSql);
//     res.send(data);
// })

// // 修改商品
// // db文件夹下的add可以用来修改商品
// router.post('/updata',async(req,res)=>{
//     let {num,goodsid} = req.body
//     // let modSql = 'UPDATE cart SET num = ? WHERE id = ?';
//     let modSqlParams = [num, goodsid];

//     var data = await update(cart,modSqlParams);
//     res.send(data);
// })

// // 添加商品
router.post('/insert',urlencodedParser,async(req,res)=>{
    let {picture,goodsname,goodsid,num,allPrice,username,size,color} = req.body;
    
    let Params = [{picture,goodsname,goodsid,num,allPrice,username,size,color}];
    // console.log(req.body)
    // res.send(req.body)
    // var sql = 'INSERT INTO cart (id,title,price,num,url)  VALUES(?,?,?,?,?)';
    var data = await insert("cart",Params);
    res.send(data);
})
// router.post('/insert', async (req, res, next) => {
//   let {
//     picture,
//     goodsname,
//     goodsid,
//     num,
//     allPrice,
//     username
//   } = req.body
//   let data = await insert("cart", [{
//     picture,
//     goodsname,
//     goodsid,
//     num,
//     allPrice,
//     username
    
//   }]);
//   res.send(data);
// });

module.exports = router;