import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      indexedUser: 0,
      users: [
        {
          name: 'Nume curs 1',
          img: '/curs1.jpg',
          location: 'San Francisco',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum vestibulum augue non placerat. Aenean nec efficitur mi.',
          following: 789,
          followers: 2748,
          photos: 94,
          days: 32,
          trips: ['Honolulu', 'Burmuda', 'Los Cabos', 'San Antonio'],
          module: [
            {
              id: 0,
              name: 'Modul 1',
              stars: 4,
              rating: 8.9,
              img: '/honolulu.jpg',
              description:
                'Ocean breezes rustle palm trees along the harborfront, while in the cool, mist-shrouded Koʻolau Range, forested hiking trails offer postcard city views. At sunset, cool off with an amble around Magic Island or splash in the ocean at Ala Moana Beach.'
            },
            {
              id: 1,
              name: 'Modul 2',
              stars: 4,
              rating: 7.8,
              img: '/santorini.jpg',
              description:
                'With multicoloured cliffs soaring above a sea-drowned caldera, Santorini looks like a giant slab of layered cake. The main island of Thira will take your breath away with its snow-drift of white Cycladic houses lining the cliff tops and, in module, spilling like icy cornices down the terraced rock.'
            },
            {
              id: 2,
              name: 'Modul 3',
              stars: 3,
              rating: 7.4,
              img: '/peru.jpg',
              description:
                'Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants.'
            },
            {
              id: 3,
              name: 'Modul 4',
              stars: 3,
              rating: 7.4,
              img: '/peru.jpg',
              description:
                'Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants.'
            },
            {
              id: 4,
              name: 'Modul 5',
              stars: 3,
              rating: 7.4,
              img: '/peru.jpg',
              description:
                'Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants.'
            }
          ]
        },
        {
          name: 'Nume curs 2',
          img: '/curs2.jpg',
          location: 'Boston',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum vestibulum augue non placerat. Aenean nec efficitur mi.',
          following: 140,
          followers: 789,
          photos: 32,
          days: 5,
          trips: ['Honolulu', 'Peru', 'San Francisco'],
          module: [
            {
              id: 0,
              name: 'Modul 1',
              stars: 4,
              rating: 8.9,
              img: '/honolulu.jpg',
              description:
                'Ocean breezes rustle palm trees along the harborfront, while in the cool, mist-shrouded Koʻolau Range, forested hiking trails offer postcard city views. At sunset, cool off with an amble around Magic Island or splash in the ocean at Ala Moana Beach.'
            },
            {
              id: 1,
              name: 'Modul 2',
              stars: 4,
              rating: 7.8,
              img: '/santorini.jpg',
              description:
                'With multicoloured cliffs soaring above a sea-drowned caldera, Santorini looks like a giant slab of layered cake. The main island of Thira will take your breath away with its snow-drift of white Cycladic houses lining the cliff tops and, in module, spilling like icy cornices down the terraced rock.'
            },
            {
              id: 2,
              name: 'Modul 3',
              stars: 3,
              rating: 7.4,
              img: '/peru.jpg',
              description:
                'Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants.'
            }
          ]
        },
        {
          name: 'Nume curs 3',
          img: '/curs3.jpg',
          location: 'Seattle',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum vestibulum augue non placerat. Aenean nec efficitur mi.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka'],
          module: [
            {
              id: 0,
              name: 'Modul 1',
              stars: 4,
              rating: 8.9,
              img: '/honolulu.jpg',
              description:
                'Ocean breezes rustle palm trees along the harborfront, while in the cool, mist-shrouded Koʻolau Range, forested hiking trails offer postcard city views. At sunset, cool off with an amble around Magic Island or splash in the ocean at Ala Moana Beach.'
            },
            {
              id: 1,
              name: 'Modul 2',
              stars: 4,
              rating: 7.8,
              img: '/santorini.jpg',
              description:
                'With multicoloured cliffs soaring above a sea-drowned caldera, Santorini looks like a giant slab of layered cake. The main island of Thira will take your breath away with its snow-drift of white Cycladic houses lining the cliff tops and, in module, spilling like icy cornices down the terraced rock.'
            },
            {
              id: 2,
              name: 'Modul 3',
              stars: 3,
              rating: 7.4,
              img: '/peru.jpg',
              description:
                'Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants.'
            }
          ]
        },
        {
          name: 'Nume curs 4',
          img: '/curs4.jpg',
          location: 'Kentucky',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum vestibulum augue non placerat. Aenean nec efficitur mi.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka'],
          module: [
            {
              id: 0,
              name: 'Modul 1',
              stars: 4,
              rating: 8.9,
              img: '/honolulu.jpg',
              description:
                'Ocean breezes rustle palm trees along the harborfront, while in the cool, mist-shrouded Koʻolau Range, forested hiking trails offer postcard city views. At sunset, cool off with an amble around Magic Island or splash in the ocean at Ala Moana Beach.'
            },
            {
              id: 1,
              name: 'Modul 2',
              stars: 4,
              rating: 7.8,
              img: '/santorini.jpg',
              description:
                'With multicoloured cliffs soaring above a sea-drowned caldera, Santorini looks like a giant slab of layered cake. The main island of Thira will take your breath away with its snow-drift of white Cycladic houses lining the cliff tops and, in module, spilling like icy cornices down the terraced rock.'
            },
            {
              id: 2,
              name: 'Modul 3',
              stars: 3,
              rating: 7.4,
              img: '/peru.jpg',
              description:
                'Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants.'
            }
          ]
        }
      ]
    },
    getters: {
      selectedUser: state => {
        return state.users[state.indexedUser]
      }
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      },
      addFollower(state) {
        state.users[state.indexedUser].followers++
      },
      removeFollower(state) {
        state.users[state.indexedUser].followers--
      },
      changeUser(state, i) {
        state.indexedUser = i
      }
    }
  })
}

export default createStore
