const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const User = require('../models/user');

User.collection.drop();

User
  .create([{
    firstName: 'Zac',
    lastName: 'Lenoire',
    username: 'Zaclenoire',
    email: 'zac@zac.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://pbs.twimg.com/profile_images/598654759386652673/wzlzCpLg.jpg',
    image: 'https://pbs.twimg.com/profile_images/598654759386652673/wzlzCpLg.jpg',
    bio: 'Aspiring UK based artist looking to break into the industry. Looking for producers to make an EP ',
    location: 'London',
    genre: {
      name: 'Neo-Soul'
    },
    type: {
      name: 'Singer'
    },
    skillLevel: {
      name: 'Beginner'
    },
    socialLinks: '@Zaclenoire',
    stars: 3,
    messages: [{
      sentBy: '',
      content: ''
    }]
  }, {
    firstName: 'Iggy',
    lastName: 'London',
    username: 'Iggy Ldn',
    email: 'iggy@ldn.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://i0.wp.com/www.gal-dem.com/wp-content/uploads/2017/05/IGGYLDN.jpg?w=2400',
    image: 'https://pbs.twimg.com/profile_images/598654759386652673/wzlzCpLg.jpg',
    bio: 'Aspiring UK based artist looking to break into the industry. Looking for producers to make an EP ',
    location: 'London',
    genre: {
      name: 'Rnb'
    },
    type: {
      name: 'Singer'
    },
    skillLevel: {
      name: 'Beginner'
    },
    socialLinks: '@IggyLdn',
    stars: 3,
    messages: [{
      sentBy: '',
      content: ''
    }]
  }, {
    firstName: 'Sophie',
    lastName: 'Hollow',
    username: 'Sophie Hollow',
    email: 'sophie@hollow.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://a.playmoss.com//uploads/images/s/o/p/sophie-turner.png',
    image: 'https://a.playmoss.com//uploads/images/s/o/p/sophie-turner.png',
    bio: 'Aspiring singer looking to collaborate with a dubstep producer. I have a distinct sound, i\'m currently influenced by Sia. ',
    location: 'Berlin',
    genre: {
      name: 'House'
    },
    type: {
      name: 'Singer'
    },
    skillLevel: {
      name: 'Intermediate'
    },
    socialLinks: '@sophHol',
    stars: 4,
    messages: [{
      sentBy: '',
      content: ''
    }]
  }, {
    firstName: 'Grace',
    lastName: 'Halsie',
    username: 'Halsie',
    email: 'grace@halsie.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=7aFWC9S%2BeO%2FsiyfyxUC5h9vaF%2Fg%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oISIfYC2G8G2f1spyfNT-tdoDSerKlsgUbfCgBhlI_IfnwEXO5H8vmLc-ZAL030PeYbeLtUF8sTVlkp2VItMUPGgB08MeCQ-TiYXMfl757bAmfEI3RY1kNBzUQ0b6FO7btD38h6BPebsDAL9hEC7AvoLMMmlZ0v_iXNucrkKA86Tw50WHqzbHVBRE86bf4JAKdL2IlGD3KHNZilfau-BmLqkXZpR3zr7q_IvyaQ_UR3FuEsPL-VVHUvWpZ',
    image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=7aFWC9S%2BeO%2FsiyfyxUC5h9vaF%2Fg%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oISIfYC2G8G2f1spyfNT-tdoDSerKlsgUbfCgBhlI_IfnwEXO5H8vmLc-ZAL030PeYbeLtUF8sTVlkp2VItMUPGgB08MeCQ-TiYXMfl757bAmfEI3RY1kNBzUQ0b6FO7btD38h6BPebsDAL9hEC7AvoLMMmlZ0v_iXNucrkKA86Tw50WHqzbHVBRE86bf4JAKdL2IlGD3KHNZilfau-BmLqkXZpR3zr7q_IvyaQ_UR3FuEsPL-VVHUvWpZ',
    bio: 'Aspiring UK based artist looking to break into the industry. Looking for producers to make an EP ',
    location: 'London',
    genre: {
      name: 'Alternative'
    },
    type: {
      name: 'Songwriter'
    },
    skillLevel: {
      name: 'Intermediate'
    },
    socialLinks: '@amazingGrace',
    stars: 4,
    messages: [{
      sentBy: '',
      content: ''
    }]
  }, {
    firstName: 'Rae',
    lastName: 'Simone',
    username: 'Rae',
    email: 'rae@rae.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://pbs.twimg.com/media/CaJ4S-nWQAAkrXi.jpg:large',
    image: 'https://pbs.twimg.com/media/CaJ4S-nWQAAkrXi.jpg:large',
    bio: 'Aspiring UK based artist looking to break into the industry. Influenced by Etta James and SZA ',
    location: 'LA',
    genre: {
      name: 'Soul'
    },
    type: {
      name: 'Singer'
    } ,
    skillLevel: {
      name: 'Intermediate'
    },
    socialLinks: '@justRae',
    stars: 5,
    messages: [{
      sentBy: '',
      content: ''
    }]
  }, {
    firstName: 'Matt',
    lastName: 'Ryan',
    username: 'Matt',
    email: 'matt@ryan.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'http://the-drawingroom.co.uk/wp-content/uploads/2013/01/dan-wilde-uk.jpg',
    image: 'http://the-drawingroom.co.uk/wp-content/uploads/2013/01/dan-wilde-uk.jpg',
    bio: 'Amsterdam based producer looking to collabarate with artists across all genres.',
    location: 'Amsterdam',
    genre: {
      name: 'Alternative'
    },
    type: {
      name: 'Producer'
    },
    skillLevel: {
      name: 'Pro'
    },
    socialLinks: '@MattRyan',
    stars: 5,
    messages: [{
      sentBy: '',
      content: ''
    }]
  }, {
    firstName: 'Jay',
    lastName: 'Hughes',
    username: 'Beats by Jay',
    email: 'jay@hughes.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiv3_TR2fXXAhWCxxQKHaOTAEwQjRwIBw&url=http%3A%2F%2Funited-pop.com%2Fen%2Fmusic-producer&psig=AOvVaw2Y1XEj2tdL4GTBX4e-g_AC&ust=1512660240913478',
    image: 'https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiv3_TR2fXXAhWCxxQKHaOTAEwQjRwIBw&url=http%3A%2F%2Funited-pop.com%2Fen%2Fmusic-producer&psig=AOvVaw2Y1XEj2tdL4GTBX4e-g_AC&ust=1512660240913478',
    bio: 'London based producer looking to collabarate with artists across all genres.',
    location: 'London',
    genre: {
      name: 'Rnb'
    },
    type: {
      name: 'Producer'
    },
    skillLevel: {
      name: 'Intermediate'
    },
    socialLinks: '@BeatsbyJay',
    stars: 4,
    messages: [{
      sentBy: '',
      content: ''
    }]
  }])

  .then((users) => console.log(`${users.length} users created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
