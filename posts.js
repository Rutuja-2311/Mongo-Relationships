const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

//const addData = async () => {
//let user = await User.findOne({ username: "sherLockholmes" });
//  let user1 = new User({
//    username: "sherLockholmes",
//    email: "sher@123.com",
//  });

//  let post1 = new Post({
//    content: "This is my first post",
//    likes: 100,
//  });

//  let post2 = new Post({
//    content: "This is my second post",
//    likes: 150,
//  });

//  post1.user = user1._id;
//  post2.user = user._id;

//  await user1.save();
//  await post1.save();
//  await post2.save();
//};

//addData();

const getData = async () => {
  let result = await Post.findOne({}).populate("user", "username -_id");
  console.log(result);
};

getData();

//const del = async () => {
//  await Post.deleteByIdAndDelete({ _id: "6a089bde7f2e44ee9b275e49" });
//};

//del();
