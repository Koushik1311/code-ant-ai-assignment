# Frontend Developer Assignment - CodeAnt AI

This project is a frontend implementation for CodeAnt AI's product, built according to the provided Figma design. The implementation features a responsive and user-friendly interface developed using modern web technologies.

**Note:** A landing page has been added for better navigation, featuring the company logo and two buttons (Sign in & Dashboard).

## Demo

Live demo: [CodeAnt AI Demo](https://code-ant-ai-assignment-nu.vercel.app/)

<video width="640" height="360" controls>
  <source src="./public/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Features

- Responsive design optimized for all devices
- Interactive dashboard interface
- Smooth animations and transitions
- Modern UI components
- Dark/Light mode support
- Real-time data visualization

## Technologies Used

- NextJS(ReactJS)
- Tailwind CSS
- Framer Motion (for animation)
- Lucide React (for icons)
- Figma (for design reference)

## Installation

To get the project running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Koushik1311/code-ant-ai-assignment.git
   ```
2. Navigate to the project folder:
   ```bash
   cd code-ant-ai-assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   #or
   yarn
   #or
   pnpm install
   #or
   bun install
   ```
4. Start the project locally:
   ````bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
   The application will be available at `http://localhost:3000`
   ````

## Project Structure

```bash
code-ant-ai/
├── app/              # Next.js pages and routes
│   ├── auth/        # Authentication related pages
│   ├── dashboard/   # Dashboard components
│   └── settings/    # Settings pages
├── components/       # Reusable React components
│   ├── ui/          # UI components (buttons, inputs)
│   ├── layout/      # Layout components
│   └── shared/      # Shared components
├── data/            # Static data and TypeScript types
├── font/            # Custom typography files
├── lib/             # Core utilities and shared logic
├── public/          # Static assets (images, icons)
└── utils/           # Feature-specific utilities
```
