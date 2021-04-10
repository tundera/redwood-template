import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ColorSchemeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.colorScheme?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="primary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Primary
        </Label>
        <TextField
          name="primary"
          defaultValue={props.colorScheme?.primary}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="primary" className="rw-field-error" />

        <Label
          name="secondary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Secondary
        </Label>
        <TextField
          name="secondary"
          defaultValue={props.colorScheme?.secondary}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="secondary" className="rw-field-error" />

        <Label
          name="teamId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Team id
        </Label>
        <TextField
          name="teamId"
          defaultValue={props.colorScheme?.teamId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="teamId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ColorSchemeForm
