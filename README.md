# 🎵 TunaTunes



TunaTunes is a dynamic web application that leverages the power of Spotify's API to bring users a personalized and interactive music experience. Users can view their top tracks and artists, control the volume, and play track previews with smooth transitions and responsive design.



## 🌟 Features



- **Top Tracks & Artists:** View your top tracks and artists, dynamically fetched from Spotify.

- **Interactive Volume Control:** Enhance your listening experience with an integrated volume controller.

- **Real-time Track Preview:** Play and pause track previews with smooth transitions.

- **Dynamic Album Art Colors:** Extract and display album art colors to enhance the visual appeal.

- **Hover Details:** Get detailed information about tracks and artists by hovering over album covers.



## 🚀 Getting Started



Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.



### Prerequisites



- Node.js (v12.x or higher)

- npm or yarn



### Installation



1. **Clone the repository:**



\`\`\`bash

git clone https://github.com/Exploser/tunatunes.git

cd tunatunes

\`\`\`



2. **Install dependencies:**



Using npm:



\`\`\`bash

npm install

\`\`\`



Or using yarn:



\`\`\`bash

yarn install

\`\`\`



### Environment Variables



Create a \`.env\` file in the root directory and add the following environment variables:



\`\`\`env

SPOTIFY_CLIENT_ID=your_spotify_client_id

SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback

NEXT_PUBLIC_SPOTIFY_SCOPE=user-top-read user-read-recently-played

\`\`\`



Replace \`your_spotify_client_id\` and \`your_spotify_client_secret\` with your actual Spotify API credentials. Make sure the redirect URI matches the one configured in your Spotify Developer Dashboard.



### Running the Application



1. **Start the development server:**



Using npm:



\`\`\`bash

npm run dev

\`\`\`



Or using yarn:



\`\`\`bash

yarn dev

\`\`\`



2. **Open your browser and navigate to:**



\`\`\`

http://localhost:3000

\`\`\`



You should now see the TunaTunes application running locally.



### Building for Production



To create an optimized production build, run:



Using npm:



\`\`\`bash

npm run build

\`\`\`



Or using yarn:



\`\`\`bash

yarn build

\`\`\`



This will generate a production-ready build of the application in the \`.next\` directory.



### Starting the Production Server



After building the application, you can start the production server with:



Using npm:



\`\`\`bash

npm start

\`\`\`



Or using yarn:



\`\`\`bash

yarn start

\`\`\`



## 🔗 Access the Project



You can also check out the live version of TunaTunes [here](https://exploser.info/tunatunes).
