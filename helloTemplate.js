const mail = require("./mail");

const Hello = (nm, bd, to) => {
  return `<h4>${nm}</h4><h6>${bd}</h6><h6>${to}</h6>`;
};

module.exports = Hello;
