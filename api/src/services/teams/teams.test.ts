import { teams, team, createTeam, updateTeam, deleteTeam } from './teams'

describe('teams', () => {
  scenario('returns all teams', async (scenario) => {
    const result = await teams()

    expect(result.length).toEqual(Object.keys(scenario.team).length)
  })

  scenario('returns a single team', async (scenario) => {
    const result = await team({ id: scenario.team.one.id })

    expect(result).toEqual(scenario.team.one)
  })

  scenario('creates a team', async (scenario) => {
    const result = await createTeam({
      input: {
        id: 'String',
        updatedAt: '2021-04-10T01:33:48Z',
        handle: 'String4050773',
        name: 'String8322489',
        slug: 'String5878633',
        city: 'String',
        abbreviation: 'String6051558',
        logo: 'String659814',
        logoSlug: 'String919960',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.updatedAt).toEqual('2021-04-10T01:33:48Z')
    expect(result.handle).toEqual('String4050773')
    expect(result.name).toEqual('String8322489')
    expect(result.slug).toEqual('String5878633')
    expect(result.city).toEqual('String')
    expect(result.abbreviation).toEqual('String6051558')
    expect(result.logo).toEqual('String659814')
    expect(result.logoSlug).toEqual('String919960')
    expect(result.conference).toEqual('String')
    expect(result.division).toEqual('String')
    expect(result.established).toEqual('String')
  })

  scenario('updates a team', async (scenario) => {
    const original = await team({ id: scenario.team.one.id })
    const result = await updateTeam({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a team', async (scenario) => {
    const original = await deleteTeam({ id: scenario.team.one.id })
    const result = await team({ id: original.id })

    expect(result).toEqual(null)
  })
})
