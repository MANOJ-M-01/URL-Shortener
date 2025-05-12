import { Request, Response } from "express";
import { prisma } from "../prismaClient";
import { generateCode } from "../utils/generateCode";

export const createShortUrl = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { original } = req.body;
  const shortCode = generateCode();

  const url = await prisma.shortURL.create({
    data: { original, shortCode },
  });

  res.json({ short: `${process.env.BASE_URL}/${url.shortCode}` });
};

export const redirectToOriginal = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { code } = req.params;

  const found = await prisma.shortURL.findUnique({
    where: { shortCode: code },
  });

  if (!found) return res.status(404).send("URL not found");

  return res.redirect(found.original);
};
