"use server";

import { adminDb } from "@/lib/firebase-admin";

export async function getTeamMemberTrainings(uid) {
	try {
		const trainingsRef = adminDb.collection("team_members").doc(uid).collection("trainings");
		const snapshot = await trainingsRef.get();

		if (snapshot.empty) {
			return { error: "No trainings found for this team member" };
		}

		const trainings = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		return trainings;
	} catch (error) {
		return { error: error.message };
	}
}

export async function saveTeamMemberTrainings(uid, data) {
	try {
		const trainingRef = adminDb.collection("team_members").doc(uid).collection("trainings").doc();
		await trainingRef.set(data, { merge: true });
		return true;
	} catch (error) {
		return { error: error.message };
	}
}
