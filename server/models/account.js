import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Account = new Schema({
    username: String,
    password: String,
    salt: String,
    order: [{
      storeId: String,
      date:{
          created: { type: Date, default: Date.now }
      }
    }],
    created: { type: Date, default: Date.now }
});

export default mongoose.model('account', Account);
