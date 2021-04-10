import ColorScheme from 'src/components/ColorScheme'

export const QUERY = gql`
  query FIND_COLOR_SCHEME_BY_ID($id: String!) {
    colorScheme: colorScheme(id: $id) {
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

export const Empty = () => <div>ColorScheme not found</div>

export const Success = ({ colorScheme }) => {
  return <ColorScheme colorScheme={colorScheme} />
}
