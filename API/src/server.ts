import express, { Express, Request, Response } from "express";
import userController from "@/src/controllers/user_controller";
import noteController from "@/src/controllers/note_controller";
import tagController from "@/src/controllers/tag_controller";
import verseController from "@/src/controllers/verse_controller";

const app: Express = express();
const port = 3000;

app.use("/user", userController);
app.use("/notes", noteController);
app.use("/tag", tagController);
app.use("/verse", verseController);

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});