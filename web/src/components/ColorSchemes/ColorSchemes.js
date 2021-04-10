import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/ColorSchemesCell'

const DELETE_COLOR_SCHEME_MUTATION = gql`
  mutation DeleteColorSchemeMutation($id: String!) {
    deleteColorScheme(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ColorSchemesList = ({ colorSchemes }) => {
  const [deleteColorScheme] = useMutation(DELETE_COLOR_SCHEME_MUTATION, {
    onCompleted: () => {
      toast.success('ColorScheme deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete colorScheme ' + id + '?')) {
      deleteColorScheme({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Primary</th>
            <th>Secondary</th>
            <th>Team id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {colorSchemes.map((colorScheme) => (
            <tr key={colorScheme.id}>
              <td>{truncate(colorScheme.id)}</td>
              <td>{timeTag(colorScheme.createdAt)}</td>
              <td>{timeTag(colorScheme.updatedAt)}</td>
              <td>{truncate(colorScheme.primary)}</td>
              <td>{truncate(colorScheme.secondary)}</td>
              <td>{truncate(colorScheme.teamId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.colorScheme({ id: colorScheme.id })}
                    title={'Show colorScheme ' + colorScheme.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editColorScheme({ id: colorScheme.id })}
                    title={'Edit colorScheme ' + colorScheme.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete colorScheme ' + colorScheme.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(colorScheme.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ColorSchemesList
