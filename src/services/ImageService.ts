import { fetchWithTimeout } from "../util/fetchWithTimeout";

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchAnimalImage(animalName: string): Promise<string | null> {
    try {
        const response = await fetchWithTimeout(`${API_URL}/wiki/image?animal=${animalName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.image) {
            return data.image;
        }

        return null;
    } catch(err) {
        console.error("Failed to fetch image:", err);
        return null;
    }
}