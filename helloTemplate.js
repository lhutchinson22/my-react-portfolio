const mail = require("./mail");

const Hello = (nm, bd, to) => {
  return `<h2>${nm}</h2><h2>${bd}</h2><h2>${to}</h2>`;
};

module.exports = Hello;
