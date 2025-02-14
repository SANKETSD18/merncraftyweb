import loginusers from "../model/Schema.js";

const addUser = async (req, res) => {
    const fdata = req.body;
    const newloginusers = new loginusers(fdata);
    console.log(fdata);

    const existingData = await loginusers.findOne({ email: loginusers.email });
    if (existingData) {
        return res.status(409).json({
            success: false,
            message: "Email already exists. Please try another email.",
        });
    }

    try {
        await newloginusers.save();
        return res.status(200).json({
            success: true,
            message: "Data successfully inserted into MongoDB.",
        });
    } catch (err) {
        res.status(200).json({ success: false, msg: err.msg });
    }
};

const ConnectTo = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(200)
                .json({ success: false, error: "plz filles the data" });
        }
        const userlogin = await newloginusers.findOne({
            email: email,
            password: password,
        });
        console.log(newloginusers.name);

        if (!userlogin) {
            res.status(200).json({
                success: false,
                message: "Erro in Sign in",
            });
        } else {
            console.log(userlogin);
            res.status(200).json({
                success: true,
                message: "user Signin Successfully",
            });
        }
    } catch (e) {
        res.status(200).json({ success: false, message: "Unauthorized" });
    }
};

export { addUser, ConnectTo };
