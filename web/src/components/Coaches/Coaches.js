import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/CoachesCell'

const DELETE_COACH_MUTATION = gql`
  mutation DeleteCoachMutation($id: String!) {
    deleteCoach(id: $id) {
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

const CoachesList = ({ coaches }) => {
  const [deleteCoach] = useMutation(DELETE_COACH_MUTATION, {
    onCompleted: () => {
      toast.success('Coach deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete coach ' + id + '?')) {
      deleteCoach({ variables: { id } })
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
            <th>Handle</th>
            <th>Name</th>
            <th>Type</th>
            <th>Is assistant</th>
            <th>Team id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {coaches.map((coach) => (
            <tr key={coach.id}>
              <td>{truncate(coach.id)}</td>
              <td>{timeTag(coach.createdAt)}</td>
              <td>{timeTag(coach.updatedAt)}</td>
              <td>{truncate(coach.handle)}</td>
              <td>{truncate(coach.name)}</td>
              <td>{truncate(coach.type)}</td>
              <td>{truncate(coach.isAssistant)}</td>
              <td>{truncate(coach.teamId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.coach({ id: coach.id })}
                    title={'Show coach ' + coach.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCoach({ id: coach.id })}
                    title={'Edit coach ' + coach.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete coach ' + coach.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(coach.id)}
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

export default CoachesList
