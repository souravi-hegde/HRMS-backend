const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class UserEmployee {
  constructor() {
    const userEmployeeSchema = new Schema({
      //user_fields
      username: {
        type: String,
        required: true,
        unique: true,
        maxLength: 50
      },
      password: {
        type: String,
        required: true,
        maxLength: 128
      },
      firstName: {
        type: String,
        required: true,
        maxLength: 50
      },
      lastName: {
        type: String,
        required: true,
        maxLength: 50
      },
      email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 100
      },
      dateJoined: {
        type: Date,
        default: Date.now,
        required: true
      },
      role: {
        type: String,
        enum: ['employee', 'admin'],
        default: 'employee',
        required: true
      },

      //employee_fields
      fatherName: {
        type: String,
        maxLength: 50,
        required: true
      },
      motherName: {
        type: String,
        maxLength: 50,
        required: true
      },
      phoneNumber: {
        type: String,
        required: true,
        maxLength: 15
      },
      address: {
        type: String,
        required: true,
        maxLength: 255
      },
      educationType: {
        type: String,
        required: true,
        maxLength: 100
      },
      yearOfPassing: {
        type: Number,
        required: true,
        min: 1900,
        max: new Date().getFullYear()
      },
      profilePicture: {
        type: String,
        maxLength: 255
      },
      bio: {
        type: String,
        maxLength: 2000
      }
    }, {
      timestamps: true
    });

    this.model = mongoose.model('UserEmployee', userEmployeeSchema);
  }

  getModel() {
    return this.model;
  }
}

module.exports = new UserEmployee().getModel();
