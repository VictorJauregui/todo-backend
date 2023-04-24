const User = require("../models/User")

const registerUser = async (req, res) => {
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            const newUser = new User(req.body)
            await newUser.save()
            return res.status(200).json({ok: true, msg: "new user created succesfully" })
        }
    } catch (error) {
        return res.status(404).json({ok: false, msg: "something is wrong", error:error})
        
    }
}

const loginUser = async(req,res) => {
    try {
        const {email, pass} = await req.body
        const existUser = await User.findOne({email:email, pass:pass})
        console.log(existUser)
        
        if (!existUser) {
            return res.status(404).json({ok: false, msg: "The user doesnt exist"}) 
        }
        else{
            return res.status(200).json({ok: true, msg: "The user exist"}) 
        }
        
    } catch (error) {
        
    }

}
module.exports = {registerUser, loginUser}