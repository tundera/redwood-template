import ColorSchemesLayout from 'src/layouts/ColorSchemesLayout'
import EditColorSchemeCell from 'src/components/EditColorSchemeCell'

const EditColorSchemePage = ({ id }) => {
  return (
    <ColorSchemesLayout>
      <EditColorSchemeCell id={id} />
    </ColorSchemesLayout>
  )
}

export default EditColorSchemePage
