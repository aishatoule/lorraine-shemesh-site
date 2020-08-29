import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

const trackingId = "UA-18894428-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})
