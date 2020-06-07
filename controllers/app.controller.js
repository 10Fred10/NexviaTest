//Backend input validator
function validator(amount, interestRate, nbOfYears) {
  if (amount == 0 || interestRate == 0 || nbOfYears == 0) {
    return false;
  } else if (amount < 0 || interestRate < 0 || nbOfYears < 0) {
    return false;
  } else if (isNaN(amount) || isNaN(interestRate) || isNaN(nbOfYears)) {
    return false;
  } else {
    return true;
  }
}

exports.calcInterest = function(req, res) {
  const amount = parseInt(req.query.amount);
  const interestRate = parseFloat(req.query.interestRate);
  const nbOfYears = parseInt(req.query.nbOfYears);

  if (validator(amount, interestRate, nbOfYears)) {
    let newAmount = amount + amount * interestRate * nbOfYears;
    res.status(200).send({ message: newAmount.toFixed(3) });
  } else {
    res.status(400).send({ message: "Please verify your input!" });
  }
};
