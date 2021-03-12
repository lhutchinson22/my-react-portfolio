const mail = require("./mail");

const Hello = (nm, bd, to) => {
  return `<h1>${nm}</h1><h1>${bd}</h1><h1>${to}</h1>`;
};

module.exports = Hello;
