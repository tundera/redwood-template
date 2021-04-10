import { Router, Route, Set } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/color-schemes/new" page={NewColorSchemePage} name="newColorScheme" />
      <Route path="/color-schemes/{id}/edit" page={EditColorSchemePage} name="editColorScheme" />
      <Route path="/color-schemes/{id}" page={ColorSchemePage} name="colorScheme" />
      <Route path="/color-schemes" page={ColorSchemesPage} name="colorSchemes" />
      <Route path="/coaches/new" page={NewCoachPage} name="newCoach" />
      <Route path="/coaches/{id}/edit" page={EditCoachPage} name="editCoach" />
      <Route path="/coaches/{id}" page={CoachPage} name="coach" />
      <Route path="/coaches" page={CoachesPage} name="coaches" />
      <Route path="/players/new" page={NewPlayerPage} name="newPlayer" />
      <Route path="/players/{id}/edit" page={EditPlayerPage} name="editPlayer" />
      <Route path="/players/{id}" page={PlayerPage} name="player" />
      <Route path="/players" page={PlayersPage} name="players" />
      <Route path="/teams/new" page={NewTeamPage} name="newTeam" />
      <Route path="/teams/{id}/edit" page={EditTeamPage} name="editTeam" />
      <Route path="/teams/{id}" page={TeamPage} name="team" />
      <Route path="/teams" page={TeamsPage} name="teams" />
      <Set wrap={MainLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
