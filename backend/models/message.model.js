import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		// create time & update time  (timeStamp true ke karan khud se ho jayega)
	},
	{ timestamps: true }
);

const Message= mongoose.model("Message", messageSchema);

export default Message;