import Team from 'src/components/Team'

export const QUERY = gql`
  query FIND_TEAM_BY_ID($id: String!) {
    team: team(id: $id) {
      id
      createdAt
      updatedAt
      handle
      name
      slug
      city
      abbreviation
      logo
      logoSlug
      wins
      losses
      winPercentage
      conference
      division
      established
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Team not found</div>

export const Success = ({ team }) => {
  return <Team team={team} />
}
