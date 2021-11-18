import bcrypt from 'bcryptjs'

const users = [
  {
    userName: "1",
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    userName: "2",
    name: "na@gmail.com",
    email: "na@gmail.com",
    password: bcrypt.hashSync('123456', 10),
  },
  {
    userName: "3",
    name: "Luan",
    email: "luan@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
  {    
    userName: "4",
    name: "Cuong",
    email: "cuong@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "5",
    name: "Toan",
    email: "toan@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "8",
    name: "Linh",
    email: "linh@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "6",
    name: "Dat",
    email: "dat@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "7",
    name: "Hieu",
    email: "hieu@gmail.com",
    password: bcrypt.hashSync('123456', 10),

  },
]

export default users