Step 1: Create a new project
Create a new directory for your project and navigate into it

Step 2: Initialize a new npm project
Initialize a new npm project in your project directory:
npm init -y


Step 3: Install Tailwind CSS
Install Tailwind CSS and its dependencies:
npm install tailwindcss postcss autoprefixer

Step 4: Create a Tailwind configuration file
Create a Tailwind configuration file using the following command:
npx tailwindcss init (This will generate a tailwind.config.js file in your project directory.)

Step 5: Create your CSS file
Create a CSS file where you will write your styles using Tailwind CSS:
touch styles.css

Step 6: Add Tailwind CSS to your CSS file
In your styles.css file, import Tailwind CSS:
@tailwind base;
@tailwind components;
@tailwind utilities;


Step 7: Add build scripts to your package.json
Open your package.json file and add the following scripts:
"scripts": {
  "build": "tailwindcss build styles.css -o output.css",
  "watch": "tailwindcss build styles.css -o output.css --watch"
}

Step 8: Build your CSS
Run the build script to generate your CSS file with Tailwind styles:
npm run build (This will generate an output.css file in your project directory.)

Step 9: Start watching for changes (optional)
If you want Tailwind CSS to watch for changes and automatically rebuild your CSS file, you can run the watch script:
npm run watch

Step 10: Add the paths to all of your template files in your tailwind.config.js file.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

Step 11: Link to your HTML
Link the generated CSS file to your HTML file:
<link href="output.css" rel="stylesheet">










