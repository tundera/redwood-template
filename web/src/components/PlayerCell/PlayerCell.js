import Player from 'src/components/Player'

export const QUERY = gql`
  query FIND_PLAYER_BY_ID($id: String!) {
    player: player(id: $id) {
      id
      createdAt
      updatedAt
      handle
      name
      slug
      height
      weight
      number
      position
      teamId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Player not found</div>

export const Success = ({ player }) => {
  return <Player player={player} />
}
