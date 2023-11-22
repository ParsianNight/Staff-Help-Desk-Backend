const mongoose = require("mongoose");
const { Schema } = mongoose;

const faqSchema = new Schema(
	{
		question: {
			type: String,
			required: true,
		},

		answer: {
			type: String,
			required: true,
		},

		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
		  },

		lastModified: {
			type: Date,
			default: Date.now,
		},

		viewCount: {
			type: Number,
			default: 0,
		},
	},
	{
		strict: true,
	}
);

module.exports = mongoose.model('faq', faqSchema);
