import { InputType } from "./types/type";

export async function NewCluster(input: InputType, type: string) {
  try {
    const response = await fetch(`http://localhost:8000/api/${type}`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch data");
    }

    const resData = await response.json();

    return resData.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
}
