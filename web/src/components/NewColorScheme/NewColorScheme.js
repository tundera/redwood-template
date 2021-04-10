import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ColorSchemeForm from 'src/components/ColorSchemeForm'

import { QUERY } from 'src/components/ColorSchemesCell'

const CREATE_COLOR_SCHEME_MUTATION = gql`
  mutation CreateColorSchemeMutation($input: CreateColorSchemeInput!) {
    createColorScheme(input: $input) {
      id
    }
  }
`

const NewColorScheme = () => {
  const [createColorScheme, { loading, error }] = useMutation(
    CREATE_COLOR_SCHEME_MUTATION,
    {
      onCompleted: () => {
        toast.success('ColorScheme created')
        navigate(routes.colorSchemes())
      },
    }
  )

  const onSave = (input) => {
    createColorScheme({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ColorScheme</h2>
      </header>
      <div className="rw-segment-main">
        <ColorSchemeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewColorScheme
