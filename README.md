# Life Value Calculator - Was Your Life Worth It?

Calculate and evaluate your life's value through achievements, daily activities, and personal milestones!

![screenshot](./assets/Screenshot-LifeZuoGuoHuaDiao.png)

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fktwu01.github.io%2FZuoGuoHuaDiao%2F)](https://ktwu01.github.io/ZuoGuoHuaDiao/) [![GitHub stars](https://img.shields.io/github/stars/ktwu01/ZuoGuoHuaDiao)](https://github.com/ktwu01/ZuoGuoHuaDiao) [![GitHub forks](https://img.shields.io/github/forks/ktwu01/ZuoGuoHuaDiao)](https://github.com/ktwu01/ZuoGuoHuaDiao/fork) ![License](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)

[![Build Status](https://img.shields.io/travis/com/ktwu01/ZuoGuoHuaDiao.svg)](https://travis-ci.com/ktwu01/ZuoGuoHuaDiao) [![Coverage Status](https://coveralls.io/repos/github/ktwu01/ZuoGuoHuaDiao/badge.svg?branch=main)](https://coveralls.io/github/ktwu01/ZuoGuoHuaDiao?branch=main) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![Twitter Follow](https://img.shields.io/twitter/follow/ktwu01?style=social)](https://twitter.com/ktwu01)

[中文文档](./README.CN.md) | English

## ✨ Features

- 📊 **Comprehensive Life Evaluation** - Multi-dimensional assessment of your life achievements
- 🎯 **Achievement Tracking** - Track major and minor accomplishments
- 📅 **Date-based Calculation** - Set your evaluation period (originally designed for summer vacation)
- 🎨 **Beautiful UI** - Modern, responsive design built with React and Tailwind CSS
- 💾 **Local Storage** - Your data is saved automatically in your browser
- 🎉 **Shareable Results** - Share your life value score with friends
- 🌐 **Live Demo** - Try it now at [ktwu01.github.io/ZuoGuoHuaDiao](https://ktwu01.github.io/ZuoGuoHuaDiao/)

## 🎮 How to Use

1. Set your summer vacation start and end dates
2. Check off the achievements you've completed
3. Add your summer activities
4. View your summer vacation value score and evaluation
5. Share with your friends to play together

## 💯 Scoring Rules

### Base Score (up to 29 points)
- Have summer homework: calculated based on completion (0-29 points)
- No summer homework: get 29 points directly

### Major Achievements (10 points each)
- Found an internship
- Went traveling
- Got into a relationship
- Got accepted into a graduate program
- Studying abroad
- Found a job
- Won the lottery
- Learned a new skill
- Made new friends

### Minor Achievements (3 points each)
Get 3 points for each small daily task completed, including:
- Playing games, watching TikTok, zoning out
- Eating and drinking (good food, coffee, movies, etc.)
- Chores (charging devices, fixing things, cycling, etc.)
- Social activities (liking posts, posting on social media, arguing online, etc.)
- Emotional experiences (happy, sad, bored, etc.)

### Custom Activities (10 points each)
- You can add your own summer activities, each adding 10 points

## 🏆 Scoring Standard

- 0 points: Suggest dropping out
- 1-28 points: Summer vacation was not worth it
- 29-38 points: Need to work harder
- 39-48 points: Barely passing
- 49-58 points: Not bad, not wasted
- 59-68 points: Pretty good
- 69-78 points: Summer vacation master
- 79-88 points: Are you trying to ascend to the heavens?
- 89-98 points: A deity descended to the mortal realm
- 99+ points: You're a damn genius!

Remember: Every little thing in life is important. Don't think that things like watching TikTok or zoning out are meaningless. Summer vacation is for relaxing and enjoying yourself. Doing what you love is what's most worthwhile!

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **React Router** - Client-side routing with HashRouter
- **Lucide React** - Icon library

## 🚀 Development

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ktwu01/ZuoGuoHuaDiao.git
cd ZuoGuoHuaDiao

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Local Testing (GitHub Pages Simulation)

```bash
# Build the project
npm run build

# Test locally on port 9999 (simulates GitHub Pages structure)
./test-github-pages.sh
```

Then visit: http://localhost:9999/ZuoGuoHuaDiao/

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch triggers automatic deployment
2. GitHub Actions builds the project using Vite
3. Deploys the `dist/` directory to GitHub Pages
4. Site is live at: https://ktwu01.github.io/ZuoGuoHuaDiao/

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📄 License

This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC BY-NC-ND 4.0).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ktwu01/ZuoGuoHuaDiao/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!
