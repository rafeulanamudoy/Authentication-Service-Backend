import express from "express";

import { AuthValidation } from "../shared/users.validation";
import validateRequest from "../../../middlewares/validateRequest";
import { AdminController } from "./admin.controller";

import roleCheck from "../../../middlewares/roleCheck";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

export const AdminRoutes = router;
router.post(
  "/signUp",
  roleCheck(ENUM_USER_ROLE.ADMIN),
  validateRequest(AuthValidation.signUpZodSchema),

  AdminController.createUser
);