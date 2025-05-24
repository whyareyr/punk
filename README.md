# 🌟 Neon Pizza Dashboard - Futuristic Order Management

A sleek, cyberpunk-inspired Next.js dashboard for managing pizza orders with Google OAuth authentication. This project showcases modern web development with an unusual, neon-themed design that stands out from typical business dashboards.

## ✨ Features

- **🔐 Google OAuth Authentication** - Secure login with NextAuth.js
- **🎨 Cyberpunk UI Design** - Neon colors, glassmorphism effects, and floating animations
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **🍕 Pizza Order Management** - Interactive table with sorting and filtering
- **⚡ Real-time Updates** - Live clock and animated elements
- **🎭 Unique Visual Effects** - Custom animations, glowing elements, and cyber grid backgrounds

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Authentication**: NextAuth.js with Google Provider
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- Google Cloud Console account for OAuth setup

### 1. Clone the Repository

\`\`\`bash
git clone <your-repo-url>
cd neon-pizza-dashboard
npm install
\`\`\`

### 2. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)

### 3. Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-here
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
\`\`\`

**Important**: Never commit your actual OAuth credentials to the repository!

**Note**: NextAuth v5 uses `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` instead of the previous `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Project Structure

\`\`\`
├── app/
│   ├── api/auth/[...nextauth]/route.ts  # NextAuth configuration
│   ├── dashboard/                       # Protected dashboard pages
│   ├── globals.css                      # Global styles and animations
│   └── layout.tsx                       # Root layout
├── components/
│   ├── ui/                             # shadcn/ui components
│   ├── auth-provider.tsx               # Session provider wrapper
│   ├── dashboard-layout.tsx            # Dashboard navigation
│   ├── login-page.tsx                  # Landing/login page
│   ├── orders-section.tsx              # Pizza orders table
│   └── welcome-section.tsx             # Dashboard welcome screen
├── lib/
│   └── auth.ts                         # NextAuth options
└── hooks/
    └── use-toast.ts                    # Toast notifications
\`\`\`

## 🍕 Mock Data

The pizza orders use themed data inspired by The Matrix:

- **Customers**: Neo Anderson, Trinity, Morpheus, etc.
- **Pizza Types**: Matrix Margherita, Cyber Pepperoni, Red Pill Supreme
- **Statuses**: Pending, Preparing, Out for Delivery, Delivered, Cancelled

## 🎨 Design Features

- **Neon Color Scheme**: Purple, cyan, and pink gradients
- **Glassmorphism**: Transparent cards with backdrop blur
- **Floating Animations**: Subtle movement effects
- **Cyber Grid**: Matrix-inspired background pattern
- **Glow Effects**: Animated neon glows on interactive elements
- **Responsive Design**: Mobile-first approach

## 🔧 Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Railway

1. Connect your GitHub repository
2. Add environment variables
3. Deploy with one click

## 🎭 Unique Features

- **Floating Navigation**: Glassmorphism nav bar that floats at the top
- **Animated Background**: Moving gradient orbs and cyber grid
- **Interactive Elements**: Hover effects and smooth transitions
- **Real-time Clock**: Live time display in the welcome section
- **Custom Animations**: CSS keyframes for floating and glowing effects
- **Themed Content**: Matrix-inspired pizza names and customer data

## 🧪 Testing

The application includes:
- Protected route authentication
- Responsive design testing
- Error boundary handling
- Loading state management

## 📝 Assumptions & Challenges

### Assumptions Made:
- Users have Google accounts for authentication
- Modern browser support for CSS backdrop-filter
- JavaScript enabled for full functionality

### Challenges Faced:
- Creating unique visual effects while maintaining usability
- Balancing animation performance with visual appeal
- Ensuring accessibility with dark theme design
- Making glassmorphism work across different browsers

## 📦 Third-party Libraries

- `next-auth` - Authentication
- `@tailwindcss/forms` - Form styling
- `lucide-react` - Icons
- `class-variance-authority` - Component variants
- `@radix-ui/*` - Accessible UI primitives

## 🎯 Bonus Features Implemented

- ✅ Table sorting by Order ID, Customer Name, and Date
- ✅ Status filtering with visual indicators
- ✅ Search functionality across all fields
- ✅ TypeScript for type safety
- ✅ Custom animations and effects
- ✅ Exceptional UI/UX design
- ✅ Real-time elements (clock)

## 🤝 Contributing

This is a showcase project, but feel free to fork and experiment with the design!

## 📄 License

MIT License - feel free to use this code for your own projects.

---

**Created with 💜 for the future of pizza management**
