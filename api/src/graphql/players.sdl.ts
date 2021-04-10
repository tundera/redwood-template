export const schema = gql`
  type Player {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    handle: String!
    name: String!
    slug: String!
    height: String!
    weight: String!
    number: String
    position: String
    teamId: String
    team: Team
  }

  type Query {
    players: [Player!]!
    player(id: String!): Player
  }

  input CreatePlayerInput {
    handle: String!
    name: String!
    slug: String!
    height: String!
    weight: String!
    number: String
    position: String
    teamId: String
  }

  input UpdatePlayerInput {
    handle: String
    name: String
    slug: String
    height: String
    weight: String
    number: String
    position: String
    teamId: String
  }

  type Mutation {
    createPlayer(input: CreatePlayerInput!): Player!
    updatePlayer(id: String!, input: UpdatePlayerInput!): Player!
    deletePlayer(id: String!): Player!
  }
`
