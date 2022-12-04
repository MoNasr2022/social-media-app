import { db } from "../connect.js";
import jwt from "jsonwebtoken";



export const getUser = (req, res) => {
  
  const q = "SELECT * FROM users WHERE id=?";
  
  db.query(q, [req.params.userId], (err, data) => {
    if (err) return res.status(500).json(err);

    const { password, ...others } = data[0];
    return res.json(others);
  });
};
export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "UPDATE users SET `username`=?,`email`=?,`name`=?,`city`=?,`website`=?,`coverPic`=?, `profilePic`=? WHERE id = ?";
    db.query(
      q,
      [
        req.body.username,
        req.body.email,
        req.body.name,
        req.body.city,
        req.body.website,
        req.body.coverPic,
        req.body.profilePic,
        userInfo.id,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("user has been updated");
        return res.status(403).json("You can only update your profile");
      }
    );
  })
};
