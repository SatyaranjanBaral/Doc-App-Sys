//  import mongoose from "mongoose";
// export const connectDB = async () => {
//     // Replace the Atlas URL with your Localhost URL
//     await mongoose.connect("mongodb://127.0.0.1:27017/MediCare")
//     .then(() => {
//         console.log("DB CONNECTED TO LOCALHOST");
//     })
//     .catch((err) => {
//         console.error("Connection error:", err);
//     });
// };



import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://satyaranjanbaral76_db_user:si8DGvbXjT9QhdQV@cluster0.hs4ymvf.mongodb.net/MediCare")
    
    .then(() =>{
        console.log("DB CONNECTED");
        
    })
};
export default connectDB;