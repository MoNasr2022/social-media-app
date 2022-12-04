import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getFollowers = (req, res) => {
  const q = "SELECT followerUserId FROM relationship WHERE followedUserId = ?";

  db.query(q, [req.query.followedUserId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map(follower => follower.followerUserId ));
  });
};

export const addFollower = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO relationship (`followerUserId`,`followedUserId`) VALUES (?)";
    const values = [userInfo.id, req.body.userId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Followig");
    });
  });
};

export const deleteFollower = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "DELETE FROM relationship WHERE `followerUserId`= ? AND `followedUserId` = ?";

    db.query(q, [userInfo.id, req.query.followedUserId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("UnFollow");
    });
  });
};
