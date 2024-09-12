'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Textarea } from "../components/ui/textarea"
import { Slider } from "../components/ui/slider"
import { Checkbox } from "../components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import Image from 'next/image';

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [quality, setQuality] = useState(50)
  const [promptStrength, setPromptStrength] = useState(0.5)
  const [aspectRatio, setAspectRatio] = useState("16:9")
  const [imageFormat, setImageFormat] = useState("png")
  const [disableSafetyCheck, setDisableSafetyCheck] = useState(false)
  const [generatedImageUrl, setGeneratedImageUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateImage = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:4000/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          guidance: 3.5, // You can make this configurable if needed
          aspectRatio,
          outputFormat: imageFormat,
          outputQuality: quality,
          promptStrength,
          numInferenceSteps: 28, // You can make this configurable if needed
          disableSafetyCheck
        }),
      })
      const data = await response.json()
      setGeneratedImageUrl(data.imageUrl)
    } catch (error) {
      console.error('Error generating image:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white space-y-12 p-8">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-400">Fux AI Prototype</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore the future of AI with our cutting-edge prototype.
        </p>
      </section>

      {/* Prompt Input Section */}
      <section className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-blue-400">Try Our AI</h2>
        <Textarea 
          placeholder="Enter your prompt"
          className="min-h-[100px] bg-gray-800 border-gray-700 text-white placeholder-gray-400"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        
        {/* Aspect Ratio Dropdown */}
        <div className="space-y-4">
          <label htmlFor="aspect-ratio" className="block text-sm font-medium text-gray-300">
            Aspect Ratio
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {aspectRatio}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem onClick={() => setAspectRatio("16:9")}>
                16:9
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAspectRatio("9:16")}>
                9:16
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAspectRatio("1:1")}>
                1:1
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Image Format Dropdown */}
        <div className="space-y-4">
          <label htmlFor="image-format" className="block text-sm font-medium text-gray-300">
            Select Image Format
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {imageFormat}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem onClick={() => setImageFormat("png")}>
                png
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setImageFormat("jpg")}>
                jpg
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setImageFormat("webp")}>
                webp
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Disable Safety Check Checkbox */}
        <div className="flex items-center space-x-2 !mt-6">
          <Checkbox
            id="disable-safety"
            checked={disableSafetyCheck}
            onCheckedChange={(checked) => setDisableSafetyCheck(checked as boolean)}
          />
          <label
            htmlFor="disable-safety"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disable Safety Check
          </label>
        </div>

        {/* Quality Slider */}
        <div className="space-y-4 !mt-20">
          <label htmlFor="quality-slider" className="block text-sm font-medium text-gray-300">
            Quality
          </label>
          <Slider
            id="quality-slider"
            min={0}
            max={100}
            step={1}
            value={[quality]}
            onValueChange={(value) => setQuality(value[0])}
            className="w-full"
          />
          <div className="pt-7">
            <p className="text-center text-white">
              Quality: {quality}%
            </p>
          </div>
        </div>

        {/* Prompt Strength Slider */}
        <div className="space-y-4 pb-8">
          <label htmlFor="prompt-strength-slider" className="block text-sm font-medium text-gray-300">
            Prompt Strength
          </label>
          <Slider
            id="prompt-strength-slider"
            min={0}
            max={1}
            step={0.01}
            value={[promptStrength]}
            onValueChange={(value) => setPromptStrength(value[0])}
            className="w-full"
          />
          <div className="pt-7">
            <p className="text-center text-white">
              Prompt Strength: {promptStrength.toFixed(2)}
            </p>
          </div>
        </div>

        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={handleGenerateImage}
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Image'}
        </Button>
      </section>

      {/* Generated Image Display */}
      {generatedImageUrl && (
        <section className="max-w-2xl mx-auto mt-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Generated Image</h2>
          <Image 
            src={generatedImageUrl} 
            alt="Generated" 
            width={1024} 
            height={1024} 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>
      )}
    </div>
  )
}
