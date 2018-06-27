var fs = require('fs');
var mkdir = require('./mkdir');
var deleteImages = require('./deleteImages');
async function saveImg(req, res) {
  if (req.body.base64) {
    res.json({
      msg: '上传成功'
    });
  } else {
    res.json({
      msg: '上传失败'
    })
    return;
  }
  var originImgBase64 = req.body.base64;
  var buf1 = Buffer.from(originImgBase64, 'base64');
  
  await mkdir.mkdir();
  await writeFile(buf1);
}

async function writeFile(buf1) {
  // await deleteImages(__dirname + '/../public/images/');
  return new Promise((resolve, reject) => {
    fs.writeFile(__dirname + '/../public/' + mkdir.dir + '/images/1.png', buf1, err => {
      if (err) {
        reject(err);
        console.log('写入图片失败');
      }
      resolve();
      console.log('写入图片成功');
    });

  })
}
module.exports = saveImg;