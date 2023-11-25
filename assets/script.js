// Define array of topics
const topics = ["HTML", "CSS", "Git", "JavaScript"];

// Use math random to choose a random item from the topics array
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

// Log each topic from topics to the console
const listTopics = () => {
  topics.forEach((topic) => {
    console.log(topic);
  });
};

// Create the function for returning a selected topic
const selectedTopic = () =>
  !randomTopic ? `Please try again!` : `Let's study ${randomTopic}`;

// Display console messages
console.log("Here are the topics we learned through Prework:");
listTopics();

console.log("Which topic should we study first?");
console.log(selectedTopic());
