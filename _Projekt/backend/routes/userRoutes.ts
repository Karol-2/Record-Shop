import express, { Request, Response } from "express";
import { userData } from "../data/userData";
import { User } from "../models/User.model";
import jwt from "jsonwebtoken";
import { UserType } from "../enums/UserType";

const router = express.Router();

const usersDatabase: User[] = userData;


router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = usersDatabase.find((user) => user.email === email);

    if (!user) {
      return res.status(404).json({ message: "User doesn't exists" });
    }

  if (email === user.email && password === user.password) {
    const accessToken = jwt.sign({ email }, process.env.TOKEN_SECRET!, {
      expiresIn: "1h",
    });
    const refeshToken = jwt.sign({ email }, process.env.TOKEN_SECRET!, {
      expiresIn: "2h",
    });
    res
      .status(200)
      .json({ accessToken: accessToken, refreshToken: refeshToken, id: user.id });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});


router.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).json(usersDatabase);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/users/:id", (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const user = usersDatabase.find((user) => user.id === userId);

    if (!user) {
      return res.status(404).json({ message: "Not Found - User not found" });
    }

    res.status(200).json( user );
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/users/:id", (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { firstName, lastName, email, password, ...extraFields } = req.body;

    //CASE 1 - not at least one field existing in request
    if (!firstName && !lastName && !email && !password) {
      return res.status(400).json({
        message: "Bad Request - At least one field is required for update",
      });
    }

    //CASE 2 - unexpected field in request
    if (Object.keys(extraFields).length > 0) {
      return res
        .status(400)
        .json({ message: "Bad Request - Unexpected fields in the request" });
    }

    //CASE 3 - user with this id doesn't exists
    const existingUserIndex: number = usersDatabase.findIndex(
      (user: User) => user.id === userId
    );

    if (existingUserIndex === -1) {
      return res.status(404).json({ message: "Not Found - User not found" });
    }

    //CASE 4 - user with this email exists
    const existingUser: User | undefined = usersDatabase.at(existingUserIndex)
    const usersWithThisEmail: User[] = usersDatabase.filter((user: User)=> {
      return user.email === email})


    if (existingUser && existingUser.email !== email && usersWithThisEmail.length > 0) {
      
      return res.status(409).json({ message: "This email is already in use" });
    }

    const editedUser = {
      id: userId,
      firstName: firstName || usersDatabase[existingUserIndex].firstName,
      lastName: lastName || usersDatabase[existingUserIndex].lastName,
      email: email || usersDatabase[existingUserIndex].email,
      password: password || usersDatabase[existingUserIndex].password,
      userType: usersDatabase[existingUserIndex].userType,
    };

    usersDatabase[existingUserIndex] = editedUser;

    res
      .status(200)
      .json(editedUser);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const existingUserIndex = usersDatabase.findIndex(
      (user) => user.id === userId
    );

    if (existingUserIndex === -1) {
      return res.status(404).json({ message: "Not Found - User not found" });
    }

    if (usersDatabase[existingUserIndex].userType === UserType.ADMIN) {
      return res.status(403).json({ message: "You cannot delete admin account!" });
    }

    const deletedUser = usersDatabase.splice(existingUserIndex, 1)[0];

    res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
