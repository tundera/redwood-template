export const schema = gql`
  type Coach {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    handle: String!
    name: String!
    type: String
    isAssistant: String
    teamId: String
    team: Team
  }

  type Query {
    coaches: [Coach!]!
    coach(id: String!): Coach
  }

  input CreateCoachInput {
    handle: String!
    name: String!
    type: String
    isAssistant: String
    teamId: String
  }

  input UpdateCoachInput {
    handle: String
    name: String
    type: String
    isAssistant: String
    teamId: String
  }

  type Mutation {
    createCoach(input: CreateCoachInput!): Coach!
    updateCoach(id: String!, input: UpdateCoachInput!): Coach!
    deleteCoach(id: String!): Coach!
  }
`
