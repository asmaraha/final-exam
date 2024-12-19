Joke API React App Documentation
Project Overview
This is a React application that interacts with the Joke API to display random jokes and allow users to:

. Search jokes across multiple categories.
. Browse jokes by type (e.g., General or Programming).
. View jokes with a responsive design using Bootstrap.

Features
1. Search Functionality: Users can search for jokes globally across the entire API.
2. Category Selection: Browse jokes by category (e.g., General, Programming).
3. Responsive Design: Styled using Bootstrap for mobile and desktop compatibility.
4. Dynamic UI Updates: React state management ensures real-time updates to the UI.

Installation and Setup
1. Clone the repository:

bash
git clone <repository-url>
cd <repository-folder>

2. Install dependencies:

bash
npm install

3. Run the development server:

bash
npm start

4. Open the app in your browser at http://localhost:3000.

File Structure
. src/components:
 . Header.js: Displays the app's header.
 . Footer.js: Displays the app's footer.
 . JokeDisplay.js: Component to display jokes.
 . SearchBar.js: Search functionality.
. src/pages:
 . Home.js: Main page for joke browsing.
. src/services:
 . api.js: Manages API calls for jokes.
. App.js: Main app component with routing.
. index.js: Entry point for React.

API Integration
. Base API: Official Joke API
. Endpoints Used:
 . /random_joke: Fetch a random joke.
 . /jokes/<type>/ten: Fetch ten jokes of a specific type (e.g., General or Programming).
 
Deployment
1. Build the app for production:

bash
npm run build

2. Deploy using platform:

. Netlify

Future Enhancements
. Add more joke categories.
. Include user authentication to save favorite jokes.
. Enable sharing jokes on social media.
