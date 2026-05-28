require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');

const assignUsernames = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/elearning');
    console.log('Connected to DB');

    const users = await User.find({ username: { $exists: false } });
    console.log(`Found ${users.length} users without a username.`);

    for (const user of users) {
      const baseUsername = user.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const username = baseUsername + Math.floor(1000 + Math.random() * 9000);
      user.username = username;
      await user.save();
      console.log(`Assigned username ${username} to user ${user.email}`);
    }

    console.log('Done assigning usernames.');
    process.exit(0);
  } catch (error) {
    console.error('Error assigning usernames:', error);
    process.exit(1);
  }
};

assignUsernames();
