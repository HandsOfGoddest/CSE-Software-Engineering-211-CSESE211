import bcrypt from 'bcryptjs'

const users = [
    {
    name: "Admin User",
    userName: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
   {
     name: "na@gmail.com",
     userName: "depgai",
    email: "na@gmail.com",
    password: bcrypt.hashSync('123456', 10),
},
   {
     name: "Luan",
     userName: "xau",
    email: "luan@gmail.com",
    password: bcrypt.hashSync('123456', 10),

},
 
]

export default users