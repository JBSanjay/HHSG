import express from "express";
import { signup } from "../Controllers/Signup";

const Route=express.Router();

Route.post("/signup",signup);

export default Route;

