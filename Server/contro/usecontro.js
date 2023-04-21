import User from "../model/Schema.js";
const addUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            res.status(422).json("Email already Exist");

        }
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(409).json({ msg: err.msg });
    }

}
const SignIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(req.body);
        // const userData = await userData.find();
        // res.status(200).json(userData)
        if (!email || !password) {
            return res.status(400).json({ error: "plz filles the data" });
        }
        const userlogin = await User.findOne({ email: email, password: password });
        // console.log(userlogin.name);
        console.log(userlogin);
            if (!userlogin) {
            res.status(400).json({ message: "Erro in Sign in" })
        } else {
            console.log(userlogin);
            // res.status(200).json({ message: "user Signin Successfully" })
            res.status(200).json({ message: "user Signin Successfully" })
              }
    }

    catch (e) {
        res.status(401).json(e);
    }

}

export { addUser, SignIn };
