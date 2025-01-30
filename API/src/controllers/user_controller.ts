import express, { Express, Request, Response } from "express";
import {getAllUsers, getUser, createUser} from "@/src/services/user_service";

const app = express();
const router = express.Router();

// Get all users
router.get("/", async (req: Request, res: Response) => {
	const users = await getAllUsers();
	res.send(users);
});

// Create User
router.post("/", async (req: Request, res: Response) => {
	const user_data = req.body;
	const createdUser = await createUser(user_data);
	res.send(createdUser);
});

// Get a user
router.get("/:username", async (req: Request, res: Response) => {
    const username = req.params.username;
    const user = await getUser(username);
	res.send(user);
});

router.delete("/:username", (req: Request, res: Response) => {
	const username = req.params.username;
	res.send(`Fetching user with username: ${username}`);
});

// Update a user
router.put("/:username", (req: Request, res: Response) => {
    const username = req.params.username;
    res.send(`Fetching user with username: ${username}`);
  });

export default router;
