// api/food.js
// http://127.0.0.1:8005/api/foodlist/
const Main_url = "http://127.0.0.1:8005/"
const BASE_URL = "http://127.0.0.1:8005/api/foodlist/"; // 🔹 replace with your backend or mock API

// Fetch all food items
export async function getFoods() {
  try {
    const response = await fetch(`${Main_url}/api/foodlist/`);
    if (!response.ok) throw new Error("Failed to fetch foods");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("getFoods Error:", error);
    throw error;
  }
}

// Fetch a single food item by ID
export async function getFoodById(id) {
  try {
    const response = await fetch(`${Main_url}/api/foodlist/${id}/`);
    if (!response.ok) throw new Error(`Failed to fetch food with ID: ${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("getFoodById Error:", error);
    throw error;
  }
}

// Optional: Create a new food item (POST)
export async function createFood(foodData) {
  try {
    const response = await fetch(`${BASE_URL}/foods`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodData),
    });
    if (!response.ok) throw new Error("Failed to create food item");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("createFood Error:", error);
    throw error;
  }
}
