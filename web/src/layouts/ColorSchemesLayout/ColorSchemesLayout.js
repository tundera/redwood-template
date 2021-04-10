import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ColorSchemesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.colorSchemes()} className="rw-link">
            ColorSchemes
          </Link>
        </h1>
        <Link
          to={routes.newColorScheme()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New ColorScheme
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default ColorSchemesLayout
