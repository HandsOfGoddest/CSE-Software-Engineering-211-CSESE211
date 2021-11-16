import bcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: "na@gmail.com",
    email: "na@gmail.com",
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: "Luan",
    email: "luan@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    name: "Cuong",
    email: "cuong@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    name: "Toan",
    email: "toan@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    name: "Linh",
    email: "linh@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    name: "Dat",
    email: "dat@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    name: "Hieu",
    email: "hieu@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
]

export default users