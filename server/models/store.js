import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Store = new Schema({
    name: String,
    region: [String],
    thumbNail: String,
    categories: String,
    explain: String,
    availNow: Boolean,
    inform: {
      availTime: String,
      offDay: String,
      tel: String,
      owner: String
    },
    menuCategoreis: [String],
    menus: [
      {
        categories: String,
        name: String,
        price: Number
      }
    ],
    reviews: [
      {
        author: String,
        contents: String,
        imageUrl: String,
        starRate: Number,
        date: {
            created: { type: Date, default: Date.now },
            edited: { type: Date, default: Date.now }
        },
        is_edited: { type: Boolean, default: false }
      }
    ],
    saveStore: [String],
    oderCount: Number,
    starRate: Number
});

export default mongoose.model('store', Store);
