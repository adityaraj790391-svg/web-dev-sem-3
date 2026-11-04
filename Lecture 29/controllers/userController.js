const userSchema = require('../models/user');

const signup = async (req, res) => {
    const { name, email, password, age, course } = req.body;

    if (!name || !email || !password || !age || !course) {
        return res.status(400).send('Please fill all the fields');
    }

    const user = await userSchema.create({
        name,
        email,
        password,
        age,
        course
    });

    return res.status(201).send('User created successfully');
};


const Login = async(req, res) => {
  const Login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Invalid Credentials');
    }

    const user = await userSchema.findOne({ email });

    if (!user || password !== user.password) {
        return res.status(401).send('Unauthorized');
    }

    return res.status(200).json({
        message: 'Login successful',
        data: {
            name: user.name,
            email: user.email,
            age: user.age,
            course: user.course
        }
    });
};
}

module.exports = { signup, Login};