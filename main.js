import readline from "readline"

const stories = [
    `A vacation is when you take a trip to some <adjective> place with your <adjective> family. Usually you go to some place that is near a/an <noun> OR up on a/an <noun>. A good vacation place is one where you can ride <plural-noun> or play <game> or go hunting for <plural-noun> . I like to spend my time <verb(ending-in-"ing")> or <verb(ending-in-"ing")>. When parents go on a vacation, they spend their time eating three <plural-noun> a day, and fathers play golf, and mothers sit around <verb(ending-in-"ing")>. Last summer, my little brother fell in a/an <noun> and got poison <plant> all over <part-of-the-body>. My family is going to go to (the) <a-place>, and I will practice <verb(ending-in-"ing")>. Parents need vacations more than kids because parents are always very <adjective> and because they have to <nubmer> hours every day all year making enough <plural-noun> to pay for the vacation.`,
    `This weekend I am going camping with <proper-noun(persons-name)>. I packed my lantern, sleeping bag, and <noun>. I am so <adjective(feeling)> to <verb> in a tent. I am <adjective(feeling)> we might see a <animal>, they are kind of dangerous. We are going to hike, fish, and <verb>. I have heard that the <color> lake is great for <verb(ending-in-"ing")>. Then we will <adverb(ending-in-"ly")>hike through the forest for <number> <measure-of-time>. If I see a <color> <animal> while hiking, I am going to bring it home as a pet! At night we will tell <number> <silly-word> stories and roast <noun> around the campfire!!`,
    `It was about <number> <measure-of-time> ago when I came to the hospital in a <mode-of-transportaion>. The hospital is a/an <adjective> place, there are a lot of <adjective> <noun>. There are nurses here who have <color> <part-of-the-body>. If someone wants to come into my room I told them that they have to <verb> first. I have decorated my room with <number> <noun>. Today a doctor came into my room and they were wearing a <noun> on their <part-of-the-body>. I heard that all doctors <verb> <noun> every day for breakfast. The most <adjective> thing about being in the hospital is the <silly-word> <noun>!`,
]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// Pick random story.
const story = stories[Math.floor(Math.random() * stories.length)]

// Loop over the story's words.
let result = []
for (let word of story.split(" ")) {

    // Check if the word is a placeholder.
    if (word[0] === "<") {

        // Get the placeholder's description.
        const placeholder = word.slice(1, word.indexOf(">"))

        // Ask user for new word.
        await new Promise(resolve => rl.question(`${placeholder}: `, (inp) => {

            // Save the response with the placeholder's suffix.
            const suffix = word.slice(word.indexOf(">") + 1)
            result.push(inp + suffix)
            resolve()
        }))
    } else result.push(word)
}

console.log(`\n${result.join(" ")}`)
rl.close()
