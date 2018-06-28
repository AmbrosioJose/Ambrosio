export const seedData = [
    {
        id: 1,
        name: 'Web',
        description: 'Web projects I have created myself or with a team',
        projects: [
          { name:'Character Reanking',description: 'A web app that ranks video game characters based on popularity. Characters are obtained from API',
            members:['Gabriel Garcia', 'Christian Soltero'], pictures:[], link:'' },
          { name:'Chuck Jokes',description: 'A web app that provides random chuck norris apps. Jokes are obtained from API',
            members:[], pictures:[], link:'' },
        ],
        active: false,
        slides: true
      },
      {
      id: 2,
      name: 'Robotics',
      description: 'Robotics project with a team',
      projects: [
        { name:'Swarmathon',description: 'A NASA competition',
        members:[], pictures:[], link:'' }
      ],
      active: true,
      slides: false
    },
    {
        id: 3,
        name: 'Android',
        description: 'Android app created with a team.',
        projects: [
          { name:'Elotero Man',description: 'An app similar to yelp but focused on mobile restaurants.',
            members:['Benjamin Valadez', 'Johnson Truong'], pictures:['src/assets/mainScreen.png','src/assets/mapCarts.png','src/assets/userProfile.png','src/assets/cart.png'], link:'' }
        ],
        active: false,
        slides: true
      },
      {
        id: 4,
        name: 'Machine Learning',
        description: '',
        projects: [
          { name:'License Plate Reader',description: 'Using Python, scikit learn, and Opencv we attempted to read a license plate.',
            members:[], pictures:[], link:'/src/assets/ReadLetters.html' }
        ],
        active: false,
        slides: false
      },
      {
        id: 5,
        name: 'Extra',
        total: 0,
        projects: [
          { name:'CLI video game database',description: 'A cli app that uses an api to get information about video games',
            members:['Gabriel Garcia', 'Christian Soltero'], pictures:[], link:'' }
        ],
        active: false,
        slides: false
      }
  ]
  