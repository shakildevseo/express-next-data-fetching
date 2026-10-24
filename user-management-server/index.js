import express from 'express';

const app = express();
const PORT = process.env.port || 5000;
app.get('/', (req, res)=>{
  res.send('users are comming soon')
})


const users = [
  {
    id: 1,
    name: "Shakil Hossain",
    age: 22,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    name: "Rahim Ahmed",
    age: 24,
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 3,
    name: "Karim Hasan",
    age: 21,
    skills: ["HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Sabbir Rahman",
    age: 25,
    skills: ["JavaScript", "TypeScript", "React"],
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    age: 23,
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: 6,
    name: "Tanvir Islam",
    age: 26,
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 7,
    name: "Fahim Ahmed",
    age: 22,
    skills: ["React", "Redux", "Tailwind CSS"],
  },
  {
    id: 8,
    name: "Sumaiya Akter",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    name: "Rakib Hasan",
    age: 27,
    skills: ["Node.js", "MongoDB", "Prisma"],
  },
  {
    id: 10,
    name: "Mehedi Hasan",
    age: 24,
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 11,
    name: "Ayesha Siddika",
    age: 23,
    skills: ["JavaScript", "React", "Firebase"],
  },
  {
    id: 12,
    name: "Imran Hossain",
    age: 28,
    skills: ["Java", "Spring Boot", "MySQL"],
  },
];



app.get('/users', (req, res)=>{
  res.send(users)
})





app.listen(PORT, ()=>{
    console.log(`server is listening on port http://localhost:${PORT}`)
})