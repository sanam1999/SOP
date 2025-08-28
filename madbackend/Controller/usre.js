const User = require("../Model/user");



module.exports.signup = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;
        let newUser = new User({
            name:Name,
            username: Email,
        });
        await User.register(newUser, Password);
       let user =  await newUser.save();
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            user: {
                _id : user._id,
                Name: Name,
                username: user.username,
                profileImg: user.profileImg,
            },
        });
    } catch (err) {
        console.error(err);
        return res.status(200).json({
            success: false,
            message: "Error during signup",
            error: err.message,
        });
    }
};
module.exports.login = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(200).json({
                success: false,
                message: "Authentication failed",
            });
        }
        console.log(req.user._id)
        let usesss= await User.findById(req.user._id)
        console.log(usesss)
        res.status(200).json({
            success: true,
            message: "Login successful",

            user: {
                _id : req.user._id,
                name: req.user.name,
                username: req.user.username,
                profileImg: usesss.profileImage,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error during login",
            error: err.message,
        });
    }
};

module.exports.logout = async(req, res)=>{
    try{
        req.logOut((err) => {
                    if (err) {
                        return res.status(200).json({
                            success: false,
                            message: "user logout",
                        })
                    }
                  
                   return res.status(200).json({
                    success: true,
                    message: "user logout",
                    data:null,
                   
                });
                })
        }catch(e){
            console.log(e)
            return res.status(200).json({
                success: false,
                message: "invalid user error",
                data:null,
                error:e
            });
        }
}
