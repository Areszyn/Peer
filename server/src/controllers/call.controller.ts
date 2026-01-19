import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
import { sendResponse } from "../utils/response";
import { verifyJWT } from "../utils/jwt.utils";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../utils/db";

// Get call history for a user:
export const getCallHistoryController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // Get token from cookies:
    const token = req.cookies?.token;
    if (!token) {
      return next(new AppError(401, "Authentication required"));
    }

    // Verify token:
    const { id } = verifyJWT(token as string) as JwtPayload;
    if (!id) {
      return next(new AppError(401, "Invalid authentication token"));
    }

    // Get user's call history:
    const calls = await prisma.call.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    sendResponse(res, 200, { calls });
  }
);
