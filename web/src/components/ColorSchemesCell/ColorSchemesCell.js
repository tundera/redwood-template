import { Link, routes } from '@redwoodjs/router'

import ColorSchemes from 'src/components/ColorSchemes'

export const QUERY = gql`
  query COLOR_SCHEMES {
    colorSchemes {
      id
      createdAt
      updatedAt
      primary
      secondary
      teamId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No colorSchemes yet. '}
      <Link to={routes.newColorScheme()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ colorSchemes }) => {
  return <ColorSchemes colorSchemes={colorSchemes} />
}
