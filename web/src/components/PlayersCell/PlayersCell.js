import { Link, routes } from '@redwoodjs/router'

import Players from 'src/components/Players'

export const QUERY = gql`
  query PLAYERS {
    players {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No players yet. '}
      <Link to={routes.newPlayer()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ players }) => {
  return <Players players={players} />
}
