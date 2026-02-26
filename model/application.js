import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    collegeName: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      default: "B.Tech",
    },
    year: {
      type: String,
      enum: ["2nd", "3rd", "Final"],
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    roleApplyingFor: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    portfolio: {
      type: String,
    },
  },
  { timestamps: true },
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;
