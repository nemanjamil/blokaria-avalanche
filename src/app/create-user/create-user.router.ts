import { Router } from 'express';
export const router: Router = Router();
import { CREATE_USER_ENDPOINT, AVAX_HEALTH } from '../../constants/endpoint';
import { createUser } from "../../controllers/avax.user.controller";


router.route(CREATE_USER_ENDPOINT + "/").get(createUser)





