"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion() {
  connectToDatabase();
}
 