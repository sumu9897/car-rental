import imagekit from "../configs/imageKit.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from "fs";

// Change Role
export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
    res.json({ success: true, message: "Now you can list cars" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// List Car

export const addCar = async (req, res) => {
  try {
    const { _id } = req.User;
    let car = JSON.parse(req.body.carData);

    const imageFile = req.file;

    // upload Image to Imagekit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.origanalname,
      folder: "/cars",
    });

    // optimization through imagekit URL transFormation
    var optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        {
          width: "1280",
        },
        { quality: "auto" },
        {
          format: "webp",
        },
      ],
    });

    const image = optimizedImageUrl;
    await Car.create({...car, owner: _id, image})

    res.json({success: true, message: "Car Added"})
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
