export default function handler(req, res){
    return res.status(200).json({message: process.env.GOOGLE_CLIENT_ID})
}