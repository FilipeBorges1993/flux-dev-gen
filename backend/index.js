const express = require("express");
const cors = require("cors");
const Replicate = require("replicate");

const app = express();
const PORT = 4000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to handle CORS (allow requests from your frontend)
app.use(cors());

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Example route
app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

// Endpoint to generate an image
app.post("/generate-image", async (req, res) => {
  try {
    const {
      prompt,
      guidance,
      aspectRatio,
      outputFormat,
      outputQuality,
      promptStrength,
      numInferenceSteps,
      disableSafetyCheck,
    } = req.body;

    const input = {
      prompt,
      guidance: parseFloat(guidance),
      num_outputs: 1,
      aspect_ratio: aspectRatio,
      output_format: outputFormat,
      output_quality: parseInt(outputQuality),
      prompt_strength: parseFloat(promptStrength),
      num_inference_steps: parseInt(numInferenceSteps),
      disable_safety_check: disableSafetyCheck,
    };

    const output = await replicate.run("black-forest-labs/flux-dev", { input });
    res.json({ imageUrl: output[0] });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
