var fs = require('fs');

exports.updateTax = function(req, res) {
    const tax = parseFloat(req.query.taxRate);
    
    //new Tax Rate should be a positive number.
    if (tax > 0 && !isNaN(tax)) {
        let taxRate = {
            "TaxRate" : tax
        }
        let json = JSON.stringify(taxRate);
        fs.writeFile('./Data/taxRate.json', json, function(err, result) {
          if(err) console.log('error', err);
        });
        res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }
  };