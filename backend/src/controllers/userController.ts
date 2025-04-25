// userController.ts
import { Request, Response } from "express";

import prisma from "../prisma";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, uid, displayName, photoURL, providerId } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    let newUser;
    if (!existingUser) {
      newUser = await prisma.user.create({
        data: {
          email,
          uid,
          displayName,
          photoURL,
          providerId,
        },
      });
    }

    res.status(201).json(newUser);
  } catch (error) {
    console.log("Failed to create user", error);

    res.status(500).json({ error: "Failed to create user" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
