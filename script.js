
// Define the async function to fetch data
async function getData() {
    const url = "https://helldiverstrainingmanual.com/api/v1/war/campaign";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json; // Return the JSON response
    } catch (error) {
        console.error(error.message);
    }
}

// Call the function and process the result
getData().then((data) => {
    if (!data) return; // Handle case if data is null or undefined due to an error

    const div = document.getElementById("div");

    // Ensure we handle the response correctly and it's an array or an object with an array
    if (Array.isArray(data)) {
        // Limit to 10 results and loop through the data
        data.slice(0, 10).forEach((datapoint) => {
            const p = document.createElement("p"); // Create a paragraph element
            p.textContent = JSON.stringify(datapoint); // Display the data as a string (can format this)
            div.appendChild(p); // Append each element to the div
        });
    } else {
        // If `data` is an object with a specific key containing an array, adjust this accordingly
        console.error(
            "Expected array but got an object. Adjust the code based on response structure."
        );
    }
});
