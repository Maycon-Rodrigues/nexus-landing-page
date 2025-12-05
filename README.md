# Nexus Landing Page

This is the landing page for the **Nexus Engine**, an AI-powered RPG Narrative Engine. It showcases the features, pricing, and vision of the Nexus Engine with a cinematic and immersive user interface.

## 🌟 Features

*   **Cinematic UI**: Immersive design with ambient lighting, noise overlays, and smooth animations.
*   **Responsive Design**: Fully responsive layout that works seamlessly on desktop and mobile devices.
*   **Internationalization (i18n)**: Built-in support for English (EN) and Portuguese (PT-BR) languages.
*   **State Management**: Uses `zustand` for efficient global state management (language toggling, visibility).
*   **Modern Tech Stack**: Built with Next.js 15, React 19, and Tailwind CSS 4.

## 🚀 Technologies

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
*   **Fonts**: Inter, JetBrains Mono, Merriweather (via `next/font`)

## 🛠️ Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/nexus-landing-page.git
    cd nexus-landing-page
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
nexus-landing-page/
├── app/                # Next.js App Router pages and layouts
│   ├── globals.css     # Global styles and Tailwind configuration
│   ├── layout.tsx      # Root layout with font configurations
│   └── page.tsx        # Main Landing Page component
├── stores/             # Zustand state stores
│   └── useGameStore.ts # Game state (language, visibility)
├── translations/       # Translation files
│   └── index.ts        # EN and PT-BR translations
├── public/             # Static assets
└── package.json        # Project dependencies and scripts
```

## 🎨 Customization

You can customize the content by editing the `translations/index.ts` file. The UI components are located in `app/page.tsx` and can be modified to fit different branding needs.

## 📄 License

This project is licensed under the MIT License.
