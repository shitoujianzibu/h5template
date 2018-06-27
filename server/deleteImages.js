var fs = require('fs');
async function deleteImages(dir) {
  var files = fs.readdirSync(dir);
  if (files.length == 0) {
    return;
  }

  files.forEach((file) => {
    var result = fs.unlinkSync(dir  +  file);
    console.log('删除'+ file + "成功");
  })
}

module.exports = deleteImages;