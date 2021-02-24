
const breweryList = [
  {
    id: 1,
    title: 'Saldens'
  },
  {
    id: 2,
    title: 'Rewort'
  },
  {
    id: 3,
    title: 'Jaws'
  }
]

const craftCart = [
  {
    id: 1,
    brewery: 'Saldens',
    name: 'IPA',
    coverImage: 'https://lh3.googleusercontent.com/proxy/sbYYpWYpbAtvleXvVlkOEopuLE9Y6XQN0eTY5rizoN4YJnRlbK15Pt2A3z3qa_UrGoryTLUKNwsiTfOzKQ97'
  },
  {
    id: 2,
    brewery: 'Saldens',
    name: 'AIPA',
    coverImage: 'https://lh3.googleusercontent.com/proxy/sbYYpWYpbAtvleXvVlkOEopuLE9Y6XQN0eTY5rizoN4YJnRlbK15Pt2A3z3qa_UrGoryTLUKNwsiTfOzKQ97'
  },
  {
    id: 3,
    brewery: 'Saldens',
    name: 'AIPA',
    coverImage: 'https://lh3.googleusercontent.com/proxy/sbYYpWYpbAtvleXvVlkOEopuLE9Y6XQN0eTY5rizoN4YJnRlbK15Pt2A3z3qa_UrGoryTLUKNwsiTfOzKQ97'
  },
  {
    id: 4,
    brewery: 'Rewort',
    name: 'AIPA',
    coverImage: 'https://lh3.googleusercontent.com/proxy/sbYYpWYpbAtvleXvVlkOEopuLE9Y6XQN0eTY5rizoN4YJnRlbK15Pt2A3z3qa_UrGoryTLUKNwsiTfOzKQ97'
  },
  {
    id: 5,
    brewery: 'Rewort',
    name: 'AIPA',
    coverImage: 'https://lh3.googleusercontent.com/proxy/sbYYpWYpbAtvleXvVlkOEopuLE9Y6XQN0eTY5rizoN4YJnRlbK15Pt2A3z3qa_UrGoryTLUKNwsiTfOzKQ97'
  },
  {
    id: 6,
    brewery: 'Rewort',
    name: 'AIPA',
    coverImage: 'https://lh3.googleusercontent.com/proxy/sbYYpWYpbAtvleXvVlkOEopuLE9Y6XQN0eTY5rizoN4YJnRlbK15Pt2A3z3qa_UrGoryTLUKNwsiTfOzKQ97'
  },
  {
    id: 7,
    brewery: 'Rewort',
    name: 'AIPA',
    coverImage: 'https://lh3.googleusercontent.com/proxy/sbYYpWYpbAtvleXvVlkOEopuLE9Y6XQN0eTY5rizoN4YJnRlbK15Pt2A3z3qa_UrGoryTLUKNwsiTfOzKQ97'
  }
]
export default class CraftService {
  getBrewerys(){
    return breweryList
  }
  getCrafts(){
    return craftCart
  }
}
