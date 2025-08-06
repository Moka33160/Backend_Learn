import mongoose from "mongoose";

const subSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "le nom est obligatoire"],
      trim: true,
      minLength: 2,
      maxLength: 30,
    },
    price: {
      type: Number,
      required: [true, "il faut mettre un prix a l'abonement"],
      min: 0,
    },
    currency: {
      type: String,
      enum: ["USD", "EUR", "GBP"],
      default: "EUR",
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yeary"],
    },
    category: {
      type: String,
      enum: [
        "sports",
        "news",
        "entertainment",
        "lifestyle",
        "technology",
        "finance",
        "politics",
        "other",
      ],
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "cancel", "expired"],
      default: "active",
    },
    paymentMethod: {
      type: String,
      trim: true,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);
const subModel = mongoose.model("subscription", subSchema);
export default subModel;
