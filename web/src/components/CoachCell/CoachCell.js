import Coach from 'src/components/Coach'

export const QUERY = gql`
  query FIND_COACH_BY_ID($id: String!) {
    coach: coach(id: $id) {
      id
      createdAt
      updatedAt
      handle
      name
      type
      isAssistant
      teamId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Coach not found</div>

export const Success = ({ coach }) => {
  return <Coach coach={coach} />
}
