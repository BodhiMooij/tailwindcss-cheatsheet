export interface iProfile {
    name: string;
    email: string;
    username: string;
    role: "Frontend Developer" | "Backend Developer" | "Fullstack Developer";
}

export const data: iProfile[] = [];

const RandomNames = [
    "Spacing",
    "Black",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Henry",
    "Ivy",
    "Jack",
    "Kate",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Peter",
    "Quinn",
    "Rose",
    "Sam",
    "Tina",
    "Uma",
    "Victor",
    "Wendy",
    "Xander",
    "Yara",
    "Zane",
    "Abigail",
    "Benjamin",
    "Chloe",
    "Daniel",
    "Emily",
    "Fiona",
    "George",
    "Hannah",
    "Isaac",
    "Julia",
    "Kevin",
    "Lily",
    "Mason",
    "Nora",
    "Oscar",
    "Penelope",
    "Quentin",
    "Rachel",
    "Simon",
    "Tiffany",
    "Ulysses",
    "Violet",
    "William",
    "Xavier",
    "Yasmine",
    "Zoey",
    "Stephen",
    "Gerrard",
    "Adewale",
    "Chukwudi",
    "Fatima",
    "Mohammed",
    "Sofia",
    "Rajesh",
    "Anjali",
    "Carlos",
    "Lucia",
    "Miguel",
    "Isabella",
    "Javier",
    "Camila",
    "Diego",
    "Santiago",
    "Elena",
];

for (let i = 0; i <= RandomNames.length; i++) {
    if (RandomNames[i]) {
        const profile: iProfile = {
            name: RandomNames[i],
            role:
                i % 3 === 0
                    ? "Backend Developer"
                    : i % 2 === 0
                        ? "Frontend Developer"
                        : "Fullstack Developer",
            email: `${RandomNames[i].toLowerCase()}@example.com`,
            username: `user${RandomNames[i].toLowerCase()}_username`,
        };
        data.push(profile);
    }
}
