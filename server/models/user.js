import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Id: { type: 'String' },
  provider: { type: 'String' },
  name: { type: 'String', required: true },
  email: {
    type: String, required: true,
    trim: true, unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  credit: { type: 'Number', default: 0 },
  cellphone: { type: 'Number' },
  city: String,
  avatar: { data: Buffer, contentType: String },
});

export default mongoose.model('User', userSchema);
