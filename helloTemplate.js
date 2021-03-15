const mail = require("./mail");

const Hello = (nm, bd, to) => {
  return `<h2>${nm}</h2><p>${bd}</p><p>${to}</p>`;
};

module.exports = Hello;
