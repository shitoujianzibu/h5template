var sharp = require('sharp');
var mkdir = require('./mkdir');

var unitHeight = 500;
var cutHeight = 0;
async function tailorImg() {
  var imgDir = __dirname + '/../public/'+ mkdir.dir +'/images/1.png';
  var imageData = await getImageData(imgDir);
  var num = Math.ceil(imageData.imageHeight / unitHeight);
  cutHeight = imageData.imageHeight - ((num - 1) * unitHeight);
  for (var i = 0; i < num; i ++) {
    await sharp(imgDir)
      .extract({
        left: 0,
        top: unitHeight * i,
        width: imageData.imageWidth,
        height: i == num - 1 ? cutHeight : unitHeight,
      })
      .toFile(__dirname + `/../public/${mkdir.dir}/outimages/${i}.png`)
      .then(async result => {
        console.log(i + imageData.format +  '图片切分成功');
      })
      .catch(err => {
        console.log(err);
      })
  }
}

async function getImageData(imgDir) {
  var imageHeight = 0;
  var imageWidth = 0;
  var format = '.png';
  const image = sharp(imgDir);
  await image
    .metadata()
    .then(metadata => {
      imageWidth = metadata.width;
      imageHeight = metadata.height;
      format = '.' + metadata.format;
      console.log('图片数据获取成功');
    })
    .catch(err => {
      console.log(err);
    });
    return {
      imageWidth,
      imageHeight,
      format
    }
}

module.exports = tailorImg;
