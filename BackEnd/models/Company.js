const mongoose = require('mongoose');
const companySchema = mongoose.Schema({
   name: {
      type: String
   },
   code: {
      type: String
   },
   location: {
      type: String
   }
});
module.exports = mongoose.model('Company',companySchema);


