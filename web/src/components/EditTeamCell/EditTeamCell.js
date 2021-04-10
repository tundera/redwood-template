import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TeamForm from 'src/components/TeamForm'

export const QUERY = gql`
  query FIND_TEAM_BY_ID($id: String!) {
    team: team(id: $id) {
      id
      createdAt
      updatedAt
      handle
      name
      slug
      city
      abbreviation
      logo
      logoSlug
      wins
      losses
      winPercentage
      conference
      division
      established
    }
  }
`
const UPDATE_TEAM_MUTATION = gql`
  mutation UpdateTeamMutation($id: String!, $input: UpdateTeamInput!) {
    updateTeam(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      handle
      name
      slug
      city
      abbreviation
      logo
      logoSlug
      wins
      losses
      winPercentage
      conference
      division
      established
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ team }) => {
  const [updateTeam, { loading, error }] = useMutation(UPDATE_TEAM_MUTATION, {
    onCompleted: () => {
      toast.success('Team updated')
      navigate(routes.teams())
    },
  })

  const onSave = (input, id) => {
    updateTeam({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Team {team.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TeamForm team={team} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
