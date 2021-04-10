export const schema = gql`
  type Team {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    handle: String!
    name: String!
    slug: String!
    city: String!
    abbreviation: String!
    logo: String!
    logoSlug: String!
    wins: Int
    losses: Int
    winPercentage: Float
    conference: String!
    division: String!
    established: String!
    coaches: [Coach]!
    colorScheme: ColorScheme
    players: [Player]!
  }

  type Query {
    teams: [Team!]!
    team(id: String!): Team
  }

  input CreateTeamInput {
    handle: String!
    name: String!
    slug: String!
    city: String!
    abbreviation: String!
    logo: String!
    logoSlug: String!
    wins: Int
    losses: Int
    winPercentage: Float
    conference: String!
    division: String!
    established: String!
  }

  input UpdateTeamInput {
    handle: String
    name: String
    slug: String
    city: String
    abbreviation: String
    logo: String
    logoSlug: String
    wins: Int
    losses: Int
    winPercentage: Float
    conference: String
    division: String
    established: String
  }

  type Mutation {
    createTeam(input: CreateTeamInput!): Team!
    updateTeam(id: String!, input: UpdateTeamInput!): Team!
    deleteTeam(id: String!): Team!
  }
`
