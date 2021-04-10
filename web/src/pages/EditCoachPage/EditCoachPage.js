import CoachesLayout from 'src/layouts/CoachesLayout'
import EditCoachCell from 'src/components/EditCoachCell'

const EditCoachPage = ({ id }) => {
  return (
    <CoachesLayout>
      <EditCoachCell id={id} />
    </CoachesLayout>
  )
}

export default EditCoachPage
