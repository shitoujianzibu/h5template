var mkdirp = require('mkdirp');
let m = {
  dir: null,
  mkdir: function() {
    m.dir = new Date().getTime();
    let p1 = new Promise((resolve, reject) => {
      mkdirp(__dirname + '/../public/' + m.dir, (err, made) => {
        if (err) {
          reject(err);
        }
        resolve(made);
      });
    });
    let p2 = new Promise((resolve, reject) => {
      mkdirp(__dirname + '/../public/' + m.dir + '/js', (err, made) => {
        if (err) {
          reject(err);
        }
        resolve(made);
      });
    });
    let p3 = new Promise((resolve, reject) => {
      mkdirp(__dirname + '/../public/' + m.dir + '/css', (err, made) => {
        if (err) {
          reject(err);
        }
        resolve(made);
      });
    });
    let p4 = new Promise((resolve, reject) => {
      mkdirp(__dirname + '/../public/' + m.dir + '/images', (err, made) => {
        if (err) {
          reject(err);
        }
        resolve(made);
      });
    });
    let p5 = new Promise((resolve, reject) => {
      mkdirp(__dirname + '/../public/' + m.dir + '/outimages', (err, made) => {
        if (err) {
          reject(err);
        }
        resolve(made);
      });
    });
    return new Promise((resolve, reject) => {
      Promise.all([p1, p2, p3, p4, p5])
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}


module.exports = m;