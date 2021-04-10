import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/CoachesCell'

const DELETE_COACH_MUTATION = gql`
  mutation DeleteCoachMutation($id: String!) {
    deleteCoach(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Coach = ({ coach }) => {
  const [deleteCoach] = useMutation(DELETE_COACH_MUTATION, {
    onCompleted: () => {
      toast.success('Coach deleted')
      navigate(routes.coaches())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete coach ' + id + '?')) {
      deleteCoach({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Coach {coach.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{coach.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(coach.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(coach.updatedAt)}</td>
            </tr>
            <tr>
              <th>Handle</th>
              <td>{coach.handle}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{coach.name}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{coach.type}</td>
            </tr>
            <tr>
              <th>Is assistant</th>
              <td>{coach.isAssistant}</td>
            </tr>
            <tr>
              <th>Team id</th>
              <td>{coach.teamId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCoach({ id: coach.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(coach.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Coach
