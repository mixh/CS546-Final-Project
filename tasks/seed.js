// seed the database

import * as users from "../data/users.js";
import { dbConnection, closeConnection } from "../config/mongoConnection.js";

const u = [
  {
    name: "Alice Smith",
    email: "alice@example.com",
    password: "Password1234$",
    age: 26,
    gender: "female",
    zip: 10010,
    bio: "I'm a foodie and love trying out new restaurants. I'm also a big fan of yoga.",
    image_destination: "public/uploads/",
    image_filename: "1.jpg",
    image_path: "public/uploads/1.jpg",
    university: "New York University",
    work: "Google",
    gym: "Planet Fitness",
    bucketlist: "Niagara Falls",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    password: "Password1234$",
    age: 30,
    gender: "male",
    zip: 10009,
    bio: "I'm a huge fan of the outdoors and love hiking and camping. I also enjoy playing basketball.",
    image_destination: "public/uploads/",
    image_filename: "2.jpg",
    image_path: "public/uploads/2.jpg",
    university: "Northeastern University",
    work: "Amazon",
    gym: "Gold's Gym",
    bucketlist: "Statue of Liberty",
  },
  {
    name: "Charlie Lee",
    email: "charlie@example.com",
    password: "Password1234$",
    age: 28,
    gender: "male",
    zip: 10011,
    bio: "I'm a big fan of music and enjoy going to concerts and music festivals. I also love trying out new coffee shops.",
    image_destination: "public/uploads/",
    image_filename: "3.jpg",
    image_path: "public/uploads/3.jpg",
    university: "Stevens Institute of Technology",
    work: "Microsoft",
    gym: "Anytime Fitness",
    bucketlist: "Hollywood Sign",
  },
  {
    name: "Emily Kim",
    email: "emily@example.com",
    password: "Password1234$",
    age: 27,
    gender: "female",
    zip: 10012,
    bio: "I'm a traveler at heart and love exploring new places. I also enjoy cooking and trying out new recipes.",
    image_destination: "public/uploads/",
    image_filename: "4.jpg",
    image_path: "public/uploads/4.jpg",
    university: "New York University",
    work: "Google",
    gym: "24 Hour Fitness",
    bucketlist: "Walt Disney World",
  },
  {
    name: "David Lee",
    email: "david@example.com",
    password: "Password1234$",
    age: 29,
    gender: "male",
    zip: 10013,
    bio: "I'm a sports fan and love watching football and basketball games. I also enjoy playing golf.",
    image_destination: "public/uploads/",
    image_filename: "5.jpg",
    image_path: "public/uploads/5.jpg",
    university: "Northeastern University",
    work: "Amazon",
    gym: "Gold's Gym",
    bucketlist: "Niagara Falls",
  },  {
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    password: "Password1234$",
    age: 28,
    gender: "female",
    zip: 10005,
    bio: "I am a music lover and a foodie!",
    image_destination: "public/uploads/",
    image_filename: "6.jpg",
    image_path: "public/uploads/6.jpg",
    university: "New York University",
    work: "Google",
    gym: "Planet Fitness",
    bucketlist: "Niagara Falls"
  },
  {
    name: "David Smith",
    email: "davidsmith@example.com",
    password: "Password1234$",
    age: 32,
    gender: "male",
    zip: 10010,
    bio: "I am an adventurous person and always looking for new challenges!",
    image_destination: "public/uploads/",
    image_filename: "7.jpg",
    image_path: "public/uploads/7.jpg",
    university: "Northeastern University",
    work: "Amazon",
    gym: "Anytime Fitness",
    bucketlist: "Hollywood Sign"
  },
  {
    name: "Emily Lee",
    email: "emilylee@example.com",
    password: "Password1234$",
    age: 24,
    gender: "female",
    zip: 10016,
    bio: "I love nature and outdoor activities!",
    image_destination: "public/uploads/",
    image_filename: "8.jpg",
    image_path: "public/uploads/8.jpg",
    university: "Stevens Institute of Technology",
    work: "Microsoft",
    gym: "Gold's Gym",
    bucketlist: "Walt Disney World"
  },
  {
    name: "Mark Brown",
    email: "mark@example.com",
    password: "Password1234$",
    age: 30,
    gender: "male",
    zip: 10003,
    bio: "I am a movie buff and love to watch films from all over the world!",
    image_destination: "public/uploads/",
    image_filename: "9.jpg",
    image_path: "public/uploads/9.jpg",
    university: "New York University",
    work: "Google",
    gym: "24 Hour Fitness",
    bucketlist: "Statue of Liberty"
  },
  {
    name: "Samantha Jones",
    email: "samantha@example.com",
    password: "Password1234$",
    age: 27,
    gender: "female",
    zip: 10014,
    bio: "I am a sports enthusiast and love to play basketball!",
    image_destination: "public/uploads/",
    image_filename: "10.jpg",
    image_path: "public/uploads/10.jpg",
    university: "Northeastern University",
    work: "Amazon",
    gym: "Planet Fitness",
    bucketlist: "Niagara Falls"
  },
  {
    name: "Michael Chen",
    email: "michael@example.com",
    password: "Password1234$",
    age: 26,
    gender: "male",
    zip: 10036,
    bio: "I am a tech geek and love to tinker with new gadgets!",
    image_destination: "public/uploads/",
    image_filename: "11.jpg",
    image_path: "public/uploads/11.jpg",
    university: "Stevens Institute of Technology",
    work: "Microsoft",
    gym: "Anytime Fitness",
    bucketlist: "Hollywood Sign"
  }, {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    password: "Password1234$",
    age: 26,
    gender: "female",
    zip: 10010,
    bio: "I'm a software engineer who loves hiking and traveling",
    image_destination: "public/uploads/",
    image_filename: "1.jpg",
    image_path: "public/uploads/1.jpg",
    university: "Northeastern University",
    work: "google",
    gym: "Anytime Fitness",
    bucketlist: "Niagara Falls"
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    password: "Password1234$",
    age: 29,
    gender: "male",
    zip: 10003,
    bio: "I'm a musician and I love playing guitar and going to concerts",
    image_destination: "public/uploads/",
    image_filename: "2.jpg",
    image_path: "public/uploads/2.jpg",
    university: "New York University",
    work: "amazon",
    gym: "Gold's Gym",
    bucketlist: "Statue of Liberty"
  },
  {
    name: "Emma Davis",
    email: "emma.davis@example.com",
    password: "Password1234$",
    age: 24,
    gender: "female",
    zip: 10011,
    bio: "I'm a foodie and I love trying new restaurants and cooking",
    image_destination: "public/uploads/",
    image_filename: "3.jpg",
    image_path: "public/uploads/3.jpg",
    university: "Stevens Institute of Technology",
    work: "microsoft",
    gym: "Planet Fitness",
    bucketlist: "Hollywood Sign"
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    password: "Password1234$",
    age: 27,
    gender: "male",
    zip: 10009,
    bio: "I'm a bookworm and I love reading and writing",
    image_destination: "public/uploads/",
    image_filename: "4.jpg",
    image_path: "public/uploads/4.jpg",
    university: "Northeastern University",
    work: "google",
    gym: "24 Hour Fitness",
    bucketlist: "Walt Disney World"
  },
  {
    name: "Linda Kim",
    email: "linda.kim@example.com",
    password: "Password1234$",
    age: 25,
    gender: "female",
    zip: 10002,
    bio: "I'm a traveler and I love exploring new cultures and learning languages",
    image_destination: "public/uploads/",
    image_filename: "5.jpg",
    image_path: "public/uploads/5.jpg",
    university: "New York University",
    work: "amazon",
    gym: "Anytime Fitness",
    bucketlist: "Niagara Falls"
  },  {
    name: "Karen Smith",
    email: "karen.smith@example.com",
    password: "Password1234$",
    age: 28,
    gender: "female",
    zip: 10023,
    bio: "I am a yoga enthusiast and love to travel.",
    image_destination: "public/uploads/",
    image_filename: "6.jpg",
    image_path: "public/uploads/6.jpg",
    university: "New York University",
    work: "microsoft",
    gym: "Planet Fitness",
    bucketlist: "Statue of Liberty",
  },
  {
    name: "Tom Brady",
    email: "tom.brady@example.com",
    password: "Password1234$",
    age: 39,
    gender: "male",
    zip: 10010,
    bio: "I love playing football and spending time with my family.",
    image_destination: "public/uploads/",
    image_filename: "7.jpg",
    image_path: "public/uploads/7.jpg",
    university: "University of Michigan",
    work: "amazon",
    gym: "Gold's Gym",
    bucketlist: "Niagara Falls",
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    password: "Password1234$",
    age: 24,
    gender: "female",
    zip: 10010,
    bio: "I am a software engineer who enjoys hiking and reading books.",
    image_destination: "public/uploads/",
    image_filename: "8.jpg",
    image_path: "public/uploads/8.jpg",
    university: "Stevens Institute of Technology",
    work: "google",
    gym: "24 Hour Fitness",
    bucketlist: "Hollywood Sign",
  },
  {
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    password: "Password1234$",
    age: 32,
    gender: "male",
    zip: 10021,
    bio: "I am a graphic designer who loves to draw and paint.",
    image_destination: "public/uploads/",
    image_filename: "9.jpg",
    image_path: "public/uploads/9.jpg",
    university: "Northeastern University",
    work: "microsoft",
    gym: "Anytime Fitness",
    bucketlist: "Walt Disney World",
  },
  {
    name: "Sarah Smith",
    email: "sarah.smith@example.com",
    password: "Password1234$",
    age: 29,
    gender: "female",
    zip: 10019,
    bio: "I am a nurse who enjoys traveling and trying new food.",
    image_destination: "public/uploads/",
    image_filename: "10.jpg",
    image_path: "public/uploads/10.jpg",
    university: "Columbia University",
    work: "amazon",
    gym: "Planet Fitness",
    bucketlist: "Statue of Liberty",
  },{
    name: "Alex Smith",
    email: "alexsmith@example.com",
    password: "Password1234$",
    age: 27,
    gender: "male",
    zip: 10007,
    bio: "I enjoy cooking and hiking on weekends",
    image_destination: "public/uploads/",
    image_filename: "2.jpg",
    image_path: "public/uploads/2.jpg",
    university: "Stevens Institute of Technology",
    work: "amazon",
    gym: "Gold's Gym",
    bucketlist: "Statue of Liberty"
  },
  {
    name: "Emily Jones",
    email: "emilyjones@example.com",
    password: "Password1234$",
    age: 30,
    gender: "female",
    zip: 10011,
    bio: "I'm a foodie and love to explore new restaurants",
    image_destination: "public/uploads/",
    image_filename: "3.jpg",
    image_path: "public/uploads/3.jpg",
    university: "New York University",
    work: "google",
    gym: "Anytime Fitness",
    bucketlist: "Hollywood Sign"
  },
  {
    name: "David Kim",
    email: "davidkim@example.com",
    password: "Password1234$",
    age: 24,
    gender: "male",
    zip: 10005,
    bio: "I enjoy playing basketball and video games",
    image_destination: "public/uploads/",
    image_filename: "4.jpg",
    image_path: "public/uploads/4.jpg",
    university: "Stevens Institute of Technology",
    work: "microsoft",
    gym: "Planet Fitness",
    bucketlist: "Walt Disney World"
  },
  {
    name: "Sophia Lee",
    email: "sophialee@example.com",
    password: "Password1234$",
    age: 29,
    gender: "female",
    zip: 10016,
    bio: "I love hiking and visiting art galleries",
    image_destination: "public/uploads/",
    image_filename: "5.jpg",
    image_path: "public/uploads/5.jpg",
    university: "Northeastern University",
    work: "amazon",
    gym: "24 Hour Fitness",
    bucketlist: "Niagara Falls"
  },
  {
    name: "Daniel Park",
    email: "danielpark@example.com",
    password: "Password1234$",
    age: 26,
    gender: "male",
    zip: 10003,
    bio: "I'm a big fan of board games and craft beers",
    image_destination: "public/uploads/",
    image_filename: "1.jpg",
    image_path: "public/uploads/1.jpg",
    university: "New York University",
    work: "google",
    gym: "Gold's Gym",
    bucketlist: "Statue of Liberty"
  },
  {
    name: "Anna Lee",
    email: "annalee@example.com",
    password: "Password1234$",
    age: 24,
    gender: "female",
    zip: 10005,
    bio: "I love reading and trying new restaurants.",
    image_destination: "public/uploads/",
    image_filename: "1.jpg",
    image_path: "public/uploads/1.jpg",
    university: "Northeastern University",
    work: "amazon",
    gym: "Gold's Gym",
    bucketlist: "Hollywood Sign"
  },
  {
    name: "Max Brown",
    email: "maxbrown@example.com",
    password: "Password1234$",
    age: 28,
    gender: "male",
    zip: 10002,
    bio: "I am a big fan of Marvel movies and enjoy playing basketball.",
    image_destination: "public/uploads/",
    image_filename: "2.jpg",
    image_path: "public/uploads/2.jpg",
    university: "Stevens Institute of Technology",
    work: "google",
    gym: "Planet Fitness",
    bucketlist: "Niagara Falls"
  },
  {
    name: "Emily Park",
    email: "emilypark@example.com",
    password: "Password1234$",
    age: 23,
    gender: "female",
    zip: 10005,
    bio: "I am a nature lover and enjoy hiking and camping.",
    image_destination: "public/uploads/",
    image_filename: "3.jpg",
    image_path: "public/uploads/3.jpg",
    university: "New York University",
    work: "amazon",
    gym: "Anytime Fitness",
    bucketlist: "Statue of Liberty"
  },
  {
    name: "Michael Chen",
    email: "michaelchen@example.com",
    password: "Password1234$",
    age: 27,
    gender: "male",
    zip: 10003,
    bio: "I enjoy playing video games and traveling.",
    image_destination: "public/uploads/",
    image_filename: "4.jpg",
    image_path: "public/uploads/4.jpg",
    university: "Northeastern University",
    work: "microsoft",
    gym: "Gold's Gym",
    bucketlist: "Walt Disney World"
  },
  {
    name: "Isabella Davis",
    email: "isabelladavis@example.com",
    password: "Password1234$",
    age: 26,
    gender: "female",
    zip: 10005,
    bio: "I am an artist and love painting and visiting art galleries.",
    image_destination: "public/uploads/",
    image_filename: "5.jpg",
    image_path: "public/uploads/5.jpg",
    university: "Stevens Institute of Technology",
    work: "google",
    gym: "24 Hour Fitness",
    bucketlist: "Niagara Falls"
  }, {
    name: "Alice Smith",
    email: "alicesmith@example.com",
    password: "Password1234$",
    age: 28,
    gender: "female",
    zip: 10003,
    bio: "I love reading books and traveling to new places",
    image_destination: "public/uploads/",
    image_filename: "1.jpg",
    image_path: "public/uploads/1.jpg",
    university: "New York University",
    work: "microsoft",
    gym: "Anytime Fitness",
    bucketlist: "Statue of Liberty"
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    password: "Password1234$",
    age: 31,
    gender: "male",
    zip: 10009,
    bio: "I'm a foodie and love to try out new restaurants in the city",
    image_destination: "public/uploads/",
    image_filename: "2.jpg",
    image_path: "public/uploads/2.jpg",
    university: "Stevens Institute of Technology",
    work: "google",
    gym: "24 Hour Fitness",
    bucketlist: "Walt Disney World"
  },
  {
    name: "Karen Lee",
    email: "karenlee@example.com",
    password: "Password1234$",
    age: 24,
    gender: "female",
    zip: 10011,
    bio: "I'm an aspiring artist and love to paint and draw",
    image_destination: "public/uploads/",
    image_filename: "3.jpg",
    image_path: "public/uploads/3.jpg",
    university: "Northeastern University",
    work: "amazon",
    gym: "Planet Fitness",
    bucketlist: "Hollywood Sign"
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    password: "Password1234$",
    age: 35,
    gender: "male",
    zip: 10004,
    bio: "I enjoy playing basketball and love watching movies",
    image_destination: "public/uploads/",
    image_filename: "4.jpg",
    image_path: "public/uploads/4.jpg",
    university: "New York University",
    work: "google",
    gym: "Gold's Gym",
    bucketlist: "Niagara Falls"
  },
  {
    name: "Emily Chen",
    email: "emily.chen@example.com",
    password: "Password1234$",
    age: 27,
    gender: "female",
    zip: 10016,
    bio: "I'm a nature lover and enjoy going on hikes and camping trips",
    image_destination: "public/uploads/",
    image_filename: "5.jpg",
    image_path: "public/uploads/5.jpg",
    university: "Stevens Institute of Technology",
    work: "microsoft",
    gym: "Anytime Fitness",
    bucketlist: "Statue of Liberty"
  },{
    name: "David Kim",
    email: "david.kim@example.com",
    password: "Password1234$",
    age: 29,
    gender: "male",
    zip: 10001,
    bio: "I'm a software engineer and love to code in my free time",
    image_destination: "public/uploads/",
    image_filename: "1.jpg",
    image_path: "public/uploads/1.jpg",
    university: "Columbia University",
    work: "google",
    gym: "Planet Fitness",
    bucketlist: "Hollywood Sign"
  },
  {
    name: "Olivia Wong",
    email: "olivia.wong@example.com",
    password: "Password1234$",
    age: 26,
    gender: "female",
    zip: 10002,
    bio: "I love dancing and practicing yoga",
    image_destination: "public/uploads/",
    image_filename: "2.jpg",
    image_path: "public/uploads/2.jpg",
    university: "New York University",
    work: "amazon",
    gym: "24 Hour Fitness",
    bucketlist: "Walt Disney World"
  },
  {
    name: "John Davis",
    email: "john.davis@example.com",
    password: "Password1234$",
    age: 33,
    gender: "male",
    zip: 10003,
    bio: "I'm a music lover and enjoy going to concerts and festivals",
    image_destination: "public/uploads/",
    image_filename: "3.jpg",
    image_path: "public/uploads/3.jpg",
    university: "Columbia University",
    work: "microsoft",
    gym: "Gold's Gym",
    bucketlist: "Niagara Falls"
  },
  {
    name: "Emma Rodriguez",
    email: "emma.rodriguez@example.com",
    password: "Password1234$",
    age: 28,
    gender: "female",
    zip: 10005,
    bio: "I enjoy running and doing outdoor workouts",
    image_destination: "public/uploads/",
    image_filename: "4.jpg",
    image_path: "public/uploads/4.jpg",
    university: "New York University",
    work: "google",
    gym: "Anytime Fitness",
    bucketlist: "Statue of Liberty"
  },
  {
    name: "Peter Lee",
    email: "peter.lee@example.com",
    password: "Password1234$",
    age: 30,
    gender: "male",
    zip: 10007,
    bio: "I love to cook and try out new recipes",
    image_destination: "public/uploads/",
    image_filename: "5.jpg",
    image_path: "public/uploads/5.jpg",
    university: "Stevens Institute of Technology",
    work: "amazon",
    gym: "Planet Fitness",
    bucketlist: "Hollywood Sign"
  }

];

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();

  for (let user of u) {
    try {
      await users.create(
        user.name,
        user.email,
        user.password,
        user.age,
        user.gender,
        user.zip,
        user.bio,
        user.image_destination,
        user.image_filename,
        user.image_path,
        user.university,
        user.work.toLowerCase(),
        user.gym,
        user.bucketlist
      );
      console.log(`User ${user.name} created`);
    } catch (error) {
      console.error(`Error creating user ${user.name}: ${error.message}`);
    }
  }

    await closeConnection();
}


main();