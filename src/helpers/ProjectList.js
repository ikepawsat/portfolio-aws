import colab from "../assets/Colab.png";
import firstWebsite from "../assets/first-website.png";
import AITag from "../assets/AI-Intro.png";
import FirstAI from "../assets/FirstAI.png";
import playpred from "../assets/playpred.png";
import encrypt from "../assets/encrypt.png";
import this_web from "../assets/portfolio_pic.png";


export const ProjectList = [
    {
        name: "Encryption App (IP)",
        image: encrypt,
        desc: "*IN PROGRESS* Built a desktop app that applied my knowledge of video Encryption and SVD Compression",
        long_desc: "Disclaimer, this project is still in development, but I have a working front end so I do not mind showing it. I wanted to test some of the ideas of SVD Video Compression that I had learned in my Data Science class along with some of the encryption teachings I had received a semester prior.",
        github: "https://github.com/ikepawsat/EncryptionApp",
    },
    {
        name: "AI Tag Attempt",
        image: AITag,
        desc: "My attempt at an AI Tag game, if you only have a few moments look here please.",
        long_desc: "This is single handedly the most important project of my career so far. I learned the importance of backups (almost having my entire project deleted), how to create scalable neural networks and save them, how to train AI incrementally, and the patience required with these AI. The improvements that I want to make in the future are training the AI separately and then together. I have to do this project at home with my desktop computer because I run the simulations at high speed and I probably ran over 50 hours of training during this project.",
        github: "https://github.com/ikepawsat/AI-Tag",
    },
    {
        name: "My First AI",
        image: FirstAI,
        desc: "This summer I wanted to start advancing my AI skills so I decided to start with this simple AI.",
        long_desc: "Ultimately a failure in my eyes, this gave me a huge foundation to start more advanced projects as it reinforced how to use public information, libraries, and my complex problem solving skills.",
        github: "https://github.com/ikepawsat/Personal-Projects/tree/main/First%20ML%20AI%20Program",
    },
    {
        name: "Football Play Predictor",
        image: playpred,
        desc: "With how many trick plays there are I wondered how well a ML Program could read an Offense",
        long_desc: "I used Football Savant Datasets for this and even with an extremely small set of data (2 games, Chiefs vs Bills in the 2023 season), the ML Program was 5% better than just random guesses. How well an NFL Player could do remains to be seen, but I am curious how well they would compare with larger data sets.",
        github: "https://github.com/ikepawsat/Personal-Projects/tree/main/Football%20Play%20Predictor",
    },
    {
        name: "This Website",
        image: this_web,
        desc: "Hosted by AWS Amplify, powered with React, Tailwind and GitHub.",
        long_desc: "Firstly, I am choosing to keep this website's code private, if you would like to see/discuss it I am open to it (contact me in the contact page) but I just do not want it public.I knew I wanted to use AWS Services in one of my projects and I thought what better than to redo my old website and build a new, sleek website that advanced my coding skills. Learning how to setup complex folder interactions along with complex features really helped me push my programming skills. I am really happy with how the features turned out, except that I am not much of a designer.",
        github: "https://github.com/ikepawsat",
    },
    {
        name: "School Projects",
        image: colab,
        desc: "An assortment of my school projects which are cool to me and that I believe represent what I have been taught.",
        long_desc: "These are selected projects that encompass some fun things I have done in my BC Classes. A lot of these projects are not hard but give a brief representation of what I have done. I would invite you to look more thoroughly at my personal projects.",
        github: "https://github.com/ikepawsat/School-Projects",
    },
    {
        name: "Personal Projects",
        image: colab,
        desc: "These are smaller and mostly one day projects that I do for my own entertainment, some are fun to look at.",
        long_desc: "I have linked a couple of these already above that I selected to be some of my favorites; however, I am including this just show other examples of my work. I am a huge sports fan and a lot of these projects center around that or some problem I need a solution to like a Discord bot",
        github: "https://github.com/ikepawsat/Personal-Projects",
    },
    {
        name: "Previous Websites",
        image: firstWebsite,
        desc: "My old portfolio website and a fake website I made when I was first learning.",
        long_desc: "This links to how I used to have my portfolio, hosted on github, which was good, but it was honestly a horrible website and I thought using AWS Route 53 and Amplify I could make a much sleeker website with React and get a custom domain name to make it more professional. There is also an area to my first website I built, but it was more of a test run.",
        github: "https://github.com/ikepawsat/ikepawsat.github.io",
    }
]