import bcrypt from 'bcryptjs'

const users = [
  {
    userName: "1",
    name: "Admin User",
    userName: "admin",
    email: "admin@gmail.com",
    phoneNumber: "0365480412",
    gender: "male",
    dateOfBirth: "2/10/2001",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
   {
     name: "na@gmail.com",
     userName: "depgai",
    email: "na@gmail.com",
    phoneNumber: "036480412",
    gender: "xxxx",
    dateOfBirth: "0/10/2001",
    password: bcrypt.hashSync('123456', 10),
},
   {
     name: "Luan",
     userName: "xau",
    email: "luan@gmail.com",
    phoneNumber: "036512",
    gender: "male1",
    dateOfBirth: "10/2001",
    password: bcrypt.hashSync('123456', 10),

  },
  {    
    userName: "Cuong",
    name: "Cuong",
    email: "cuong@gmail.com",
    phoneNumber: "03652",
    gender: "male4",
    dateOfBirth: "2001",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "toan",
    name: "Toan",
    email: "toan@gmail.com",
    phoneNumber: "03654804",
    gender: "male7",
    dateOfBirth: "20",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "linh",
    name: "Linh",
    email: "linh@gmail.com",
    phoneNumber: "036548041",
    gender: "male9",
    dateOfBirth: "201",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "Dat",
    name: "Dat",
    email: "dat@gmail.com",
    phoneNumber: "036548412",
    gender: "male6",
    dateOfBirth: "001",
    password: bcrypt.hashSync('123456', 10),

  },
  {
    userName: "hieu",
    name: "Hieu",
    email: "hieu@gmail.com",
   phoneNumber: "036540412",
    gender: "mal4e",
    dateOfBirth: "82001",
    password: bcrypt.hashSync('123456', 10),

  },
]

export default users