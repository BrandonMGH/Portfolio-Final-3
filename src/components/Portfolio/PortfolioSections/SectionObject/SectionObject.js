import PsyButImg from "./Images/PsyButImg.jpg"
import Link from './Images/Link.jpg'
import MontyPythonHolyGrail from './Images/MontyPythonHolyGrail.png'
import DarthVader from './Images/DarthVader.jpg'
import train from './Images/train.jpg'
import GameofThronesWallpaper from './Images/GameofThronesWallpaper.jpg'
import botimage2 from './Images/botimage2.jpg'
import wordguesser from './Images/wordguesser.jpg'
import OnlineShoppingIcon from './Images/OnlineShoppingIcon.png'
import bestfriends from './Images/bestfriends.jpg'
import hamburger from './Images/hamburger.jpg'
import codespot from './Images/codespot.png'
import newspapers from './Images/newspapers.jpg'
import DragonBallZWallpaper from './Images/DragonBallZWallpaper.jpg'
import photographer from './Images/photographer.jpg'

const sectionObject = {
    Javascript: [
        {
            keyValue: 1,
            projectTitle: "Psychic Game",
            projectImg: PsyButImg,
            projectDescription: "A psychic guessing game where users will keystroke individual letters to try and guess the letter that the psychic chose, given a limtied number of lives.",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://brandonmgh.github.io/Psychic-Game/",
            githubButtonLink: "https://github.com/BrandonMGH/Psychic-Game",

        },
        {
            keyValue: 2,
            projectTitle: "Crystal Clicker Game",
            projectImg: Link,
            projectDescription: "Click on crystals to try and match the target score.  Each crystal has a hidden numerical value.",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://brandonmgh.github.io/unit-4-game/",
            githubButtonLink: "https://github.com/BrandonMGH/unit-4-game",
        },
        {
            keyValue: 3,
            projectTitle: "Trivia Game",
            projectImg: MontyPythonHolyGrail,
            projectDescription: "A trivia game app where users answer simple questions in order to gain passage accross a bridge.",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://brandonmgh.github.io/TriviaGame/",
            githubButtonLink: "https://github.com/BrandonMGH/TriviaGame"
        },
        {
            keyValue: 4,
            projectTitle: "Giftastic",
            projectImg: DarthVader,
            projectDescription: "an app that generates Star Wars themed gifs and renders them dynamically",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://brandonmgh.github.io/GifTastic/",
            githubButtonLink: "https://github.com/BrandonMGH/GifTastic"

        },
        {
            keyValue: 5,
            projectTitle: "Train Scheduler",
            projectImg: train,
            projectDescription: "An app that allows the user to enter a train, it's destination and its arrival time into the train arrival schedule",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://brandonmgh.github.io/Firebase-Assignment---Train-Scheduler/",
            githubButtonLink: "https://github.com/BrandonMGH/Firebase-Assignment---Train-Scheduler"
        },
        {
            keyValue: 6,
            projectTitle: "Choose your GOT House",
            projectImg: GameofThronesWallpaper,
            projectDescription: "An app that sorts users into a Game of Thrones house on the basis of the way they answer a series of questions.",
            projectType: "Group Project",
            projectResponsibility: "Worked on creating the questions and assisted in creating the logic that determined which question answers sorted the user into a given house",
            projectButtonLink: "https://santo092.github.io/Project-1/",
            githubButtonLink: "https://github.com/santo092/game-of-thrones-quiz"
        }
    ],
    Node: [
        {
            keyValue: 1,
            projectTitle: "Liri-bot",
            projectImg: botimage2,
            projectDescription: "a node command line app that allows users to type choose from a couple different options and make queries to APIs associated with the option chosen.  Data returned from the API will be shown in the terminal. ",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink:  "https://github.com/BrandonMGH/liri-node-ap",
            githubButtonLink: "https://github.com/BrandonMGH/liri-node-ap"

        },
        {
            keyValue: 2,
            projectTitle: "Constructor Word Guesser",
            projectImg: wordguesser,
            projectDescription: "a command line app that asks users to guess a sci movie by inputting letters into the terminal. ",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://github.com/BrandonMGH/Constructor-Word-Guess",
            githubButtonLink: "https://github.com/BrandonMGH/Constructor-Word-Guess",
        },
        {
            keyValue: 3,
            projectTitle: "Bamazon SQL Storefront",
            projectImg: OnlineShoppingIcon,
            projectDescription: "an app that allows users to operate a virtual storefront through node on the command line. ",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://github.com/BrandonMGH/MySQL_StoreFront_Database-",
            githubButtonLink: "https://github.com/BrandonMGH/MySQL_StoreFront_Database-",
        },
        {
            keyValue: 4,
            projectTitle: "Friend-Finder",
            projectImg: bestfriends,
            projectDescription: "An app designed to match you up with your ideal friend.",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://friend-finder-app-ucsd.herokuapp.com/home.html",
            githubButtonLink: "https://github.com/BrandonMGH/Friend-Finder"

        },
        {
            keyValue: 5,
            projectTitle: "WANT-A-BURGER?!",
            projectImg: hamburger,
            projectDescription: "an app that allows users to create create and eat their own burger.",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://want-a-burger.herokuapp.com/",
            githubButtonLink: "https://github.com/BrandonMGH/Burger"
        },
        {
            keyValue: 6,
            projectTitle: "CodeSpot",
            projectImg: codespot,
            projectDescription: "A MVC forum website designed for Web Developers who code using the MERN stack",
            projectType: "Group Project",
            projectResponsibility: "Primarily responsible, along with one other gentleman, with setting up our SQL/Node backend to set up the routes that handle user message inputs",
            projectButtonLink: "https://codespot.herokuapp.com/",
            githubButtonLink: "https://github.com/BrandonMGH/Project2"
        }
    ],
    React: [
        {
            keyValue: 1,
            projectTitle: "NewsScraper",
            projectImg: newspapers,
            projectDescription: "an app designed to scrape elements from the dom in order to present users with up to date news articles from the news website Quillette ",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://quillette-app-scrap.herokuapp.com/",
            githubButtonLink: "https://github.com/BrandonMGH/NewsScraper",

        },
        {
            keyValue: 2,
            projectTitle: "Clicky-Game",
            projectImg: DragonBallZWallpaper,
            projectDescription: "An app that allows users to click on character cards to earn points.  Users win when they click on all the unique character cards without click the same one twice.",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://clicky-game-reactjs-app.herokuapp.com/",
            githubButtonLink: "https://github.com/BrandonMGH/Clicky-Game",
        },
        {
            keyValue: 3,
            projectTitle: "SparkItechs",
            projectImg: photographer,
            projectDescription: "A personalized website designed to represent an individual's personal portfolio website",
            projectType: "Group Project",
            projectResponsibility: "Was primarily responsible for setting up the functionality of our MongoDB/node backend and creating our profile manager page",
            projectButtonLink: "https://spark-i-techs.herokuapp.com/",
            githubButtonLink: "https://github.com/avlegend/Project3",
        },
    ],
    All: [
        {
            keyValue: 1,
            projectTitle: "NewsScraper",
            projectImg: newspapers,
            projectDescription: "an app designed to scrape elements from the dom in order to present users with up to date news articles from the news website Quillette ",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://quillette-app-scrap.herokuapp.com/",
            githubButtonLink: "https://github.com/BrandonMGH/NewsScraper",

        },
        {
            keyValue: 2,
            projectTitle: "Clicky-Game",
            projectImg: DragonBallZWallpaper,
            projectDescription: "An app that allows users to click on character cards to earn points.  Users win when they click on all the unique character cards without click the same one twice.",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://clicky-game-reactjs-app.herokuapp.com/",
            githubButtonLink: "https://github.com/BrandonMGH/Clicky-Game",
        },
        {
            keyValue: 3,
            projectTitle: "SparkItechs",
            projectImg: photographer,
            projectDescription: "A personalized website designed to represent an individual's personal portfolio website",
            projectType: "Group Project",
            projectResponsibility: "Was primarily responsible for setting up the functionality of our MongoDB/node backend and creating our profile manager page",
            projectButtonLink: "https://spark-i-techs.herokuapp.com/",
            githubButtonLink: "https://github.com/avlegend/Project3",
        },
        {
            keyValue: 4,
            projectTitle: "CodeSpot",
            projectImg: codespot,
            projectDescription: "A MVC forum website designed for Web Developers who code using the MERN stack",
            projectType: "Group Project",
            projectResponsibility: "Primarily responsible, along with one other gentleman, with setting up our SQL/Node backend to set up the routes that handle user message inputs",
            projectButtonLink: "https://codespot.herokuapp.com/",
            githubButtonLink: "https://github.com/BrandonMGH/Project2"

        },
        {
            keyValue: 5,
            projectTitle: "Friend-Finder",
            projectImg: bestfriends,
            projectDescription: "An app designed to match you up with your ideal friend.",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://friend-finder-app-ucsd.herokuapp.com/home.html",
            githubButtonLink: "https://github.com/BrandonMGH/Friend-Finder"
        },
        {
            keyValue: 6,
            projectTitle: "Train Scheduler",
            projectImg: train,
            projectDescription: "An app that allows the user to enter a train, it's destination and its arrival time into the train arrival schedule",
            projectType: "Solo Project",
            projectResponsibility: "Built the project in its entirety",
            projectButtonLink: "https://brandonmgh.github.io/Firebase-Assignment---Train-Scheduler/",
            githubButtonLink: "https://github.com/BrandonMGH/Firebase-Assignment---Train-Scheduler"
        }
    ]



}

export default sectionObject