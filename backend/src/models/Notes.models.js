import mongoose from "mongoose";

// 1. create a schema
// 2. create a model based on that schema!

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: string,
    },
  },
  { timestamps: true }
);
