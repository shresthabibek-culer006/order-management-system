const multer = require("multer");
const path = require("path");

// WHERE and HOW to store files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads/");  // saves files here
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);  // e.g: 1234567890-profile.jpg
  }
});

// FILTER — only allow images
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);   // accept file
  } else {
    cb(new Error("Only images allowed!"), false);  // reject file
  }
};

// LIMITS
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }  // max 5MB
});

module.exports = upload;