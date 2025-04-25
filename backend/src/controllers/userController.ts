// userController.ts
import { Request, Response } from "express";

import prisma from "../prisma";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

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
