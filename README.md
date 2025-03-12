# TechGuru - AI-Powered Mock Interview Platform

## Description
TechGuru is an advanced and interactive AI-powered mock interview platform designed to help job seekers practice and improve their interview skills. Built with Next.js, Tailwind CSS, and Gemini API, it provides users with a realistic interview experience to enhance their chances of landing their dream job.

## Features
- AI-driven Mock Interviews: Experience realistic interview scenarios with questions powered by AI
- Personalized Interview Sessions: Tailor interview sessions based on job roles and experience level
- Real-time Video Recording: Practice with webcam support to simulate real interview environments
- Instant AI Feedback: Receive immediate, personalized feedback on your responses
- Voice-to-Text Conversion: Automatically transcribe your spoken answers for review
- Comprehensive Performance Reports: Get detailed insights into your strengths and areas for improvement
- Interview History: Access and review your past interview sessions

## Getting Started
To get started with TechGuru, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/TechGuru.git
   ```

2. Navigate to the project directory:
   ```bash
   cd TechGuru
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file with the following variables:
   - NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   - DATABASE_URL=your_database_url
   - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   - CLERK_SECRET_KEY=your_clerk_secret

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Access the application at http://localhost:3000

## Technologies Used
- Next.js 14: React framework for building the web application
- Tailwind CSS: Utility-first CSS framework for styling
- Gemini API: Google's AI model for generating interview questions and feedback
- PostgreSQL: Database for storing user data and interview sessions
- Drizzle ORM: Modern TypeScript ORM for database interactions
- Clerk: Authentication and user management
- React Webcam: For video interview functionality

## Usage
1. Sign up or sign in to your account
2. Create a new interview session by specifying:
   - Job position
   - Required technical skills
   - Years of experience
3. Enable your webcam (optional)
4. Start the interview and answer the AI-generated questions
5. Receive instant feedback on your performance
6. Review your interview history and track your progress

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a pull request

## Support
Show your support by giving the project a ⭐!

## License
This project is licensed under the MIT License.
