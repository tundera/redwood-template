import TeamsLayout from 'src/layouts/TeamsLayout'
import EditTeamCell from 'src/components/EditTeamCell'

const EditTeamPage = ({ id }) => {
  return (
    <TeamsLayout>
      <EditTeamCell id={id} />
    </TeamsLayout>
  )
}

export default EditTeamPage
