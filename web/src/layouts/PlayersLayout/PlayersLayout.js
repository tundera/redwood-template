import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const PlayersLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.players()} className="rw-link">
            Players
          </Link>
        </h1>
        <Link to={routes.newPlayer()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Player
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default PlayersLayout
