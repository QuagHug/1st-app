import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    age: 'Number', 
    avatar: 'string', 
    creditCardNumber: 'string',
    email: 'string',
    firstName: 'string',
    gender: 'string',
    lastName: 'string',
    phoneNumber: 'string',
    ssn: 'Number'
});
const User = mongoose.model('User', schema);

export default User;