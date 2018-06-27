var express = require('express');
var router = express.Router();

var tailorImg = require('../server/tailorImg');
var tem = require('../server/genTemplate');
var saveImg = require('../server/saveImg');

/* GET home page. */
var obj = {
  title: "模板生成",
  text: "请选择你的图片",
}
router.get('/', function (req, res, next) {
  res.render('index', obj);
});
router.post('/imgUpload', async function (req, res, next) {
  await saveImg(req, res);
  await tailorImg();
  await tem.genTemp();
});

module.exports = router;
