import gmailSpamDetectionVideo from "../../assets/project-video/gmail-spam-detection-video.mp4";
import MovieRecommendedSystem from "../../assets/project-video/MovieRecommenderSystem.mp4";
import studyPal from "../../assets/project-apk/StudyPal.apk";
import studyPalVideo from "../../assets/project-video/StudyPal.mp4";
import TcConfession from "../../assets/project-video/TC-Confession.mp4";
import MoonStreet from "../../assets/project-video/MoonStreet.mp4";
import InventoryManagementSystem from "../../assets/project-video/InventoryManagementSystem.mp4";
import EventManagementSystem from "../../assets/project-video/EventManagementSystem.mp4";
import SunergyAdmin from "../../assets/project-video/SunergyAdmin.mp4";
import SunergyClient from "../../assets/project-video/SunergyClient.mp4";

const projectData = [
  {
    title: "Sunergy (Client Side) -- Renewable Energy Web Application",
    description:
      "Sunergy is company website to provide solar energy services and solutions. It's frontend is develop by using HTML CSS JavaScript and Bootstrap which consists pagination, animation, mobile friendly.",
    githubLink: "https://github.com/jason6356/8-bit",
    deployedLink: "https://8-bit-six.vercel.app/",
    videoSrc: SunergyClient,
  },
  {
    title: "Sunergy (Admin Side) -- Renewable Energy Web Application",
    description:
      "Sunergy Admin Side allow the company to visuallize their data, doing content management, and handle private email from client by Email JS API. ",
    githubLink: "https://github.com/jason6356/8-bit",
    deployedLink: "https://8-bit-six.vercel.app/html/sign_in.html",
    videoSrc: SunergyAdmin,
  },
  {
    title: "TC Confession -- Flutter Mobile Application",
    description:
      "TC Confession is a platform for student which allow students to share their thoughts, emotions and secrets anonymously. It developed by Flutter with Dart language, and Bootstrap as the frontend framework, Firebase as backend and database services.",
    githubLink: "https://github.com/junsheng526/socialmedia/tree/master",
    deployedLink: "https://github.com/junsheng526/socialmedia/tree/master.apk",
    videoSrc: TcConfession,
  },
  {
    title: "StudyPal -- Kotlin Mobile Application",
    description:
      "A simple mobile application that allow student to find their study buddy when facing problem on education. This application is developed by Kotlin and Firebase with MVVM architecture. I have integrated Google Map API to allow users add each other as friends on Google Map and chat.",
    githubLink: "https://github.com/junsheng526/StudyPal",
    deployedLink: studyPal,
    videoSrc: studyPalVideo,
  },
  {
    title: "Movie Recommender System -- Streamlit Python WebSite",
    description:
      "I have trained a few AI model with Content Based Model and i have export cosine similarity model as my showcase model and using streamlit as my simple website display. I use it to recommend some movies by entering some movie titles and implement IMDB API to fetch the movies image after recommended.",
    githubLink: "https://github.com/junsheng526/RecommenderSystem",
    deployedLink: "https://github.com/junsheng526/RecommenderSystem",
    videoSrc: MovieRecommendedSystem,
  },
  {
    title: "Gmail Spam Detection -- JavaScript Chrome Extention",
    description:
      "This is Chrome Extention which allow user to scan/detect their Gmail by AI Model predicting to get further action like detele or mark as spam. In this project, we use javascript to setup the frontend of the extention and python to build an AI model, and using flask creating an POST API as backend service of this project. For the AI model, after I have comparing a few model, I have chosen the highest accuracy model which is vectorizer. For trying to use this extention, you may download my project in GitHub and import it in your extention.",
    githubLink: "https://github.com/junsheng526/GmailSpamDetection",
    deployedLink: "https://github.com/junsheng526/GmailSpamDetection",
    videoSrc: gmailSpamDetectionVideo,
  },
  {
    title: "Event Management System -- Flask Python Website",
    description:
      "It developed with Flask Python as backend, HTML CSS as frontend technologies and it is using MySQL as database. Showcase a simple authentication function with encrypted password, CRUD of people and event, implemented GET and POST method, and database entity relationship design. ",
    githubLink: "https://github.com/junsheng526/EventManagementSystem",
    deployedLink: "https://github.com/junsheng526/EventManagementSystem",
    videoSrc: EventManagementSystem,
  },
  {
    title: "Warehouse Inventory Management System -- Python Tkinter Website",
    description:
      "It developed with Python Tkinter as frontend and using SQLite as database. Showcase a simple window application with three roles inventory managament system which is supervisor, worker and admin.",
    githubLink: "https://github.com/junsheng526/InventoryManagementSystem",
    deployedLink: "https://github.com/junsheng526/InventoryManagementSystem",
    videoSrc: InventoryManagementSystem,
  },
  {
    title: "MoonStreet -- Food Ordering Website",
    description:
      "Developed to showcase the ability to reengineering an existing web system to a new interface which increase the user experience and getting modern design.",
    githubLink: "https://github.com/junsheng526/SeamAssignment",
    deployedLink: "https://moonstreet-restaurant.vercel.app/",
    videoSrc: MoonStreet,
  },
  // Add more projects as needed
];

export default projectData;
