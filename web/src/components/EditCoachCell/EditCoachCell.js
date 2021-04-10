import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CoachForm from 'src/components/CoachForm'

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
const UPDATE_COACH_MUTATION = gql`
  mutation UpdateCoachMutation($id: String!, $input: UpdateCoachInput!) {
    updateCoach(id: $id, input: $input) {
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

export const Success = ({ coach }) => {
  const [updateCoach, { loading, error }] = useMutation(UPDATE_COACH_MUTATION, {
    onCompleted: () => {
      toast.success('Coach updated')
      navigate(routes.coaches())
    },
  })

  const onSave = (input, id) => {
    updateCoach({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Coach {coach.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CoachForm
          coach={coach}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
