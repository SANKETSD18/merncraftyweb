import User from "../model/Schema.js";
const addUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);

    
    const existingData = await User.findOne({ email: user.email });
    if (existingData) {
        return res.status(200).json( {success: false, message: 'Email already exists. Please try another email.'});
    }

    try {
        await newUser.save();
        return res.status(200).json({ success: true,  message: 'Data successfully inserted into MongoDB.'});
        // res.status(201).json(newUser);
        // await newUser.save();
        // res.send();
    }
    catch (err) {
        // return res.status(500).send('Error inserting data into MongoDB.');
        res.status(200).json({ success: false,  msg: err.msg });
    }

}
const SignIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(req.body);
        // const userData = await userData.find();
        // res.status(200).json(userData)
        if (!email || !password) {
            return res.status(200).json({ success: false, error: "plz filles the data" });
        }
        const userlogin = await User.findOne({ email: email, password: password });
        console.log(userlogin.name);
        // console.log(userlogin);
        if (!userlogin) {
            res.status(200).json({ success: false, message: "Erro in Sign in" })
        } else {
            console.log(userlogin);
            res.status(200).json({ success: true, message: "user Signin Successfully" })
        }
    }

    catch (e) {
        res.status(200).json({ success: false, message: "Unauthorized" });
    }

}

export { addUser, SignIn };
