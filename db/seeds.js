const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const User = require('../models/user');
const Chat = require('../models/chat');

User.collection.drop();
Chat.collection.drop();

let users;

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
    genre: 'Neo-Soul',
    type: 'Singer',
    skillLevel: 'Beginner',
    socialLinks: '@Zaclenoire',
    stars: 3
  }, {
    firstName: 'Iggy',
    lastName: 'London',
    username: 'Iggy Ldn',
    email: 'iggy@ldn.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://i0.wp.com/www.gal-dem.com/wp-content/uploads/2017/05/IGGYLDN.jpg?w=2400',
    image: 'https://i0.wp.com/www.gal-dem.com/wp-content/uploads/2017/05/IGGYLDN.jpg?w=2400',
    bio: 'Aspiring UK based artist looking to break into the industry. Looking for producers to make an EP ',
    location: 'London',
    genre: 'Rnb',
    type: 'Singer',
    skillLevel: 'Beginner',
    socialLinks: '@IggyLdn',
    stars: 3
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
    genre: 'House',
    type: 'Singer',
    skillLevel: 'Intermediate',
    socialLinks: '@sophHol',
    stars: 4
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
    genre: 'Alternative',
    type: 'Songwriter',
    skillLevel: 'Intermediate',
    socialLinks: '@amazingGrace',
    stars: 4
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
    genre: 'Soul',
    type: 'Singer',
    skillLevel: 'Intermediate',
    socialLinks: '@justRae',
    stars: 5
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
    genre: 'Alternative',
    type: 'Producer',
    skillLevel: 'Pro',
    socialLinks: '@MattRyan',
    stars: 5
  }, {
    firstName: 'Jake',
    lastName: 'Simmons',
    username: 'JakeSimmons',
    email: 'jake@simmons.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'http://2ctptqj9vf3lafyt2rkh1qto.wpengine.netdna-cdn.com/wp-content/uploads/2017/09/jake.jpg',
    image: 'http://2ctptqj9vf3lafyt2rkh1qto.wpengine.netdna-cdn.com/wp-content/uploads/2017/09/jake.jpg',
    bio: 'Toronto based singer looking to collabarate with artists across all genres.',
    location: 'Austraila',
    genre: 'Rock',
    type: 'Singer',
    skillLevel: 'Intermediate',
    socialLinks: '@JustJake',
    stars: 5
  }, {
    firstName: 'Amelia',
    lastName: 'Lily',
    username: 'Amelia Lily',
    email: 'amelia@lily.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://i.pinimg.com/736x/4b/78/34/4b78340a779228ec3411d7d8cd5bb569--writing-inspiration-character-inspiration.jpg',
    image: 'https://i.pinimg.com/736x/4b/78/34/4b78340a779228ec3411d7d8cd5bb569--writing-inspiration-character-inspiration.jpg',
    bio: 'Aspiring songwriter looking to collabarate with singers who have a unique sound.',
    location: 'Austraila',
    genre: 'House',
    type: 'Songwriter',
    skillLevel: 'Beginner',
    socialLinks: '@AmeliaLily',
    stars: 4
  }, {
    firstName: 'Hayley',
    lastName: 'Roads',
    username: 'Hayley Roads',
    email: 'hayley@roads.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiv3_TR2fXXAhWCxxQKHaOTAEwQjRwIBw&url=http%3A%2F%2Funited-pop.com%2Fen%2Fmusic-producer&psig=AOvVaw2Y1XEj2tdL4GTBX4e-g_AC&ust=1512660240913478',
    image: 'https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiv3_TR2fXXAhWCxxQKHaOTAEwQjRwIBw&url=http%3A%2F%2Funited-pop.com%2Fen%2Fmusic-producer&psig=AOvVaw2Y1XEj2tdL4GTBX4e-g_AC&ust=1512660240913478',
    bio: 'London based producer looking to collabarate with artists across all genres.',
    location: 'London',
    genre: 'Rnb',
    type: 'Singer',
    skillLevel: 'Intermediate',
    socialLinks: '@BeatsbyJay',
    stars: 4
  }, {
    firstName: 'Camille',
    lastName: 'Rowe',
    username: 'Camille Berlin',
    email: 'camille@berlin.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'http://www.designscene.net/wp-content/uploads/2014/12/Camille-Rowe-Glamour-France-We-Are-The-Rhoads-03.jpg',
    image: 'http://www.designscene.net/wp-content/uploads/2014/12/Camille-Rowe-Glamour-France-We-Are-The-Rhoads-03.jpg',
    bio: 'Berlin Singer/Songwriter interested in recording an album with a producer in September, if you\'re interested in collaborating, send me a request.',
    location: 'New York',
    genre: 'Rnb',
    type: 'Singer',
    skillLevel: 'Pro',
    socialLinks: '@CamilleRowe',
    stars: 5
  }, {
    firstName: 'Kay',
    lastName: 'Reece',
    username: 'Kay Beats',
    email: 'kay@beats.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://www.musicproductionglossary.com/wp-content/uploads/2016/07/music-producer.jpg',
    image: 'https://www.musicproductionglossary.com/wp-content/uploads/2016/07/music-producer.jpg',
    bio: 'LA based producer looking to collabarate with artists across all genres.',
    location: 'LA',
    genre: 'Hiphop',
    type: 'Producer',
    skillLevel: 'Intermediate',
    socialLinks: '@KayBeats',
    stars: 4
  }, {
    firstName: 'Miles',
    lastName: 'Wyatt',
    username: 'Miles Wyatt',
    email: 'miles@wyatt.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'http://myprogear.net/wp-content/uploads/2016/08/expert.jpg',
    image: 'http://myprogear.net/wp-content/uploads/2016/08/expert.jpg',
    bio: 'LA based producer looking to collabarate with artists across all genres.',
    location: 'LA',
    genre: 'Rnb',
    type: 'Producer',
    skillLevel: 'Intermediate',
    socialLinks: '@MilesWyatt',
    stars: 4
  }, {
    firstName: 'Jacob',
    lastName: 'Banks',
    username: 'Jacob Banks',
    email: 'jacob@banks.com',
    password: 'password',
    passwordConfirmation: 'password',
    avatar: 'https://yt3.ggpht.com/-BMZKcmxJY90/AAAAAAAAAAI/AAAAAAAAAAA/rdk-LlZMaFg/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
    image: 'https://yt3.ggpht.com/-BMZKcmxJY90/AAAAAAAAAAI/AAAAAAAAAAA/rdk-LlZMaFg/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
    bio: 'London based artist looking to collabarate with artists across all genres.',
    location: 'London',
    genre: 'Neo-Soul',
    type: 'Artist',
    skillLevel: 'Pro',
    socialLinks: '@JacobBanks',
    stars: 5
  }])
  .then((data) => {
    users = data;
    console.log(`${users.length} users created`);

    return Chat
      .create([{
        users: [users[0].id, users[1].id],
        messages: [
          {
            sender: users[0],
            content: 'Yo'
          },
          {
            sender: users[1],
            content: 'Whatsup?'
          },
          {
            sender: users[0],
            content: 'Not much'
          }
        ]
      }]);
  })
  .then(chats => {
    console.log(`${chats.length} chats created`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
