import TeamsLayout from 'src/layouts/TeamsLayout'
import TeamCell from 'src/components/TeamCell'

const TeamPage = ({ id }) => {
  return (
    <TeamsLayout>
      <TeamCell id={id} />
    </TeamsLayout>
  )
}

export default TeamPage
