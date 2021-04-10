import PlayersLayout from 'src/layouts/PlayersLayout'
import PlayerCell from 'src/components/PlayerCell'

const PlayerPage = ({ id }) => {
  return (
    <PlayersLayout>
      <PlayerCell id={id} />
    </PlayersLayout>
  )
}

export default PlayerPage
