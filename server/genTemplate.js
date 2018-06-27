var ejs = require('ejs');
var fs = require('fs');
var mkdir = require('./mkdir');
var obj = {};

async function genTemp() {
  var images = await getData();
  var obj = await setData(images);

  ejs.renderFile(__dirname + '/../views/tem.ejs', obj, async function(err, str) {
    await writeHtml(str)
  });
};
async function getData() {
  var files = fs.readdirSync(__dirname + '/../public/' + mkdir.dir + '/outimages');
  return files;
}
async function writeHtml(str) {
  return new Promise((resolve, reject) => {
    fs.writeFile(__dirname + '/../public/' + mkdir.dir + '/index.html', str, (err) => {
      if (err) {
        reject(err);
        console.log('生成模板失败');
      } else {
        resolve({
          msg: '生成模板成功',
        });
        console.log('生成模板成功');
        mkdir.dir = null;
      }
    });
  })
}
async function setData(images) {
  obj.images = images;
  obj.title = '这是生成的模板';
  obj.text = '没什么好写的';
  return obj;
}

module.exports = {
  genTemp: genTemp,
}