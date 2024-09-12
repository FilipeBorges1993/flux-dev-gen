# Replicate API Guide for black-forest-labs/flux-dev

- Replicate is a platform for running AI models on a cloud server.
- Flux-dev is a model for generating images based on a given prompt.

## Setup

1. Install the library:

   ```
   npm install replicate
   ```

2. Set API token:

   - The user will need to set an REPLICATE_API_TOKEN on a .env file in the backend folder.

3. Import and initialize:
   ```javascript
   import Replicate from "replicate";
   const replicate = new Replicate({
     auth: process.env.REPLICATE_API_TOKEN,
   });
   ```

## Options and Prompt

```javascript
const input = {
  prompt:
    'black forest gateau cake spelling out the words "FLUX DEV", tasty, food photography, dynamic shot',
  guidance: 3.5,
  num_outputs: 1,
  aspect_ratio: "1:1",
  output_format: "webp",
  output_quality: 80,
  prompt_strength: 0.8,
  num_inference_steps: 28,
};
```

## Usage

```javascript
const output = await replicate.run("black-forest-labs/flux-dev", { input });
console.log(output);
```
