let cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for(let i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i])
}

let intrests = ["Dungeons and Dragons", "Crochet", "Cooking", "Traveling", "Watching movies"]


for(let i = 0; i < intrests.length; i++){
    if (intrests[i] === "Dungeons and Dragons") {
        console.log(`My absolute favorite interest is: ${intrests[i]}.`);
    
} else {
    console.log(`One of my interests is: ${intrests[i]}.`);
}}