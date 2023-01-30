import bcrypt from 'bcrypt';
import authModel from "../models/authModel.js";

class authController {

  static addUser = async (req, res) => {
    if (req.method == "POST") {
      // console.log("first img", req.file)
      // const mulimg = req.file.filename;
      const { name, email, img, phone, password, cpassword, terms } = req.body

      const user = await authModel.findOne({ email: email });

      if (user) {
        res.send({ "status": "failed", "message": "Email already exists.!!", });
      } else {
        if (name && email && phone && password && cpassword) {
          if (password === cpassword) {
            try {
              const salt = await bcrypt.genSalt(10);
              const hashPassword = await bcrypt.hash(password, salt);

              const data = await authModel({
                name: name,
                email: email,
                phone: phone,
                img: img,
                password: hashPassword,
                terms: terms
              })

              const result = await data.save();
              console.log("Final Result-", result)

            } catch (error) {
              res.status(400).send({ "status": "failed", "message": "Unable to Register", });
            }
          } else {
            res.status(401).send({ "status": "failed", "message": "Password not match.!!", });
          }
        } else {
          res.status(404).send({ "status": "failed", "message": "All Field Required...", });
        }
      }
    } else {
      try {
        const data = await authModel.find();

        if (data.length > 0) {
          res.status(200).send({
            status: 'success',
            message: "All Data Show!!!",
            data: data
          });
        } else {
          res.status(404).send({
            status: 'failed',
            message: "Data not found...!"
          });
        }
      } catch (error) {
        console.log('Get All Data - ', error);
      }
    }
  }
}

export default authController;
