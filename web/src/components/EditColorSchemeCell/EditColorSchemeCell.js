import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ColorSchemeForm from 'src/components/ColorSchemeForm'

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
const UPDATE_COLOR_SCHEME_MUTATION = gql`
  mutation UpdateColorSchemeMutation(
    $id: String!
    $input: UpdateColorSchemeInput!
  ) {
    updateColorScheme(id: $id, input: $input) {
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

export const Success = ({ colorScheme }) => {
  const [updateColorScheme, { loading, error }] = useMutation(
    UPDATE_COLOR_SCHEME_MUTATION,
    {
      onCompleted: () => {
        toast.success('ColorScheme updated')
        navigate(routes.colorSchemes())
      },
    }
  )

  const onSave = (input, id) => {
    updateColorScheme({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ColorScheme {colorScheme.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ColorSchemeForm
          colorScheme={colorScheme}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
