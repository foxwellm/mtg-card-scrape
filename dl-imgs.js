// https://aetherhub.b-cdn.net/images/cards/mtg-MKM/A%20Killer%20Among%20Us.167.jpg

import fs from "fs";
import { promisify } from "util";
import fetch from "node-fetch";

import cards from "./MKM/mythic-rare.json" assert { type: "json" };

const writeFileAsync = promisify(fs.writeFile);

async function downloadImage({name, img}) {
  try {
    // Make a GET request to fetch the image
    const response = await fetch(img);

    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    // Get the image data as a Buffer
    const imageDataBuffer = await response.arrayBuffer();

    const cardName = name.toLowerCase().replace(/\s+/g, '-')

    // Save the image data to a file
    await writeFileAsync(`./images/${cardName}.jpg`, Buffer.from(imageDataBuffer));

    console.log("Image downloaded successfully!");
  } catch (error) {
    console.log(name)
    console.log(img)
    console.error("Error downloading image:", error.message);
  }
}

// Call the function to start the download
// downloadImage();

cards.forEach(card => downloadImage(card));