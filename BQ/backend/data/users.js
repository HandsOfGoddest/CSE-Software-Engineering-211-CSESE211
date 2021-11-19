import bcrypt from 'bcryptjs'

const users = [
  {
    userName: "1",
    name: "Admin User",
    userName: "admin",
    email: "admin@gmail.com",
    userName: "admin",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
   {
     name: "na@gmail.com",
     userName: "depgai",
    email: "na@gmail.com",
    userName: "na",
    password: bcrypt.hashSync('123456', 10),
},
   {
     name: "Luan",
     userName: "xau",
    email: "luan@gmail.com",
    userName: "luan",
    password: bcrypt.hashSync('123456', 10),

  },
  {    
    userName: "4",
    name: "Cuong",
    email: "cuong@gmail.com",
    username: "cuong",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "5",
    name: "Toan",
    email: "toan@gmail.com",
    userName: "toan",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "8",
    name: "Linh",
    email: "linh@gmail.com",
    userName: "linh",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "6",
    name: "Dat",
    email: "dat@gmail.com",
    userName: "dat",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "7",
    name: "Hieu",
    email: "hieu@gmail.com",
    userName: "hieu",
    password: bcrypt.hashSync('123456', 10),

  },
]

export default users