export const schema = gql`
  type ColorScheme {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    primary: String!
    secondary: String!
    teamId: String
    team: Team
  }

  type Query {
    colorSchemes: [ColorScheme!]!
    colorScheme(id: String!): ColorScheme
  }

  input CreateColorSchemeInput {
    primary: String!
    secondary: String!
    teamId: String
  }

  input UpdateColorSchemeInput {
    primary: String
    secondary: String
    teamId: String
  }

  type Mutation {
    createColorScheme(input: CreateColorSchemeInput!): ColorScheme!
    updateColorScheme(id: String!, input: UpdateColorSchemeInput!): ColorScheme!
    deleteColorScheme(id: String!): ColorScheme!
  }
`
