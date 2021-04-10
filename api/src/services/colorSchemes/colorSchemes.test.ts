import {
  colorSchemes,
  colorScheme,
  createColorScheme,
  updateColorScheme,
  deleteColorScheme,
} from './colorSchemes'

describe('colorSchemes', () => {
  scenario('returns all colorSchemes', async (scenario) => {
    const result = await colorSchemes()

    expect(result.length).toEqual(Object.keys(scenario.colorScheme).length)
  })

  scenario('returns a single colorScheme', async (scenario) => {
    const result = await colorScheme({ id: scenario.colorScheme.one.id })

    expect(result).toEqual(scenario.colorScheme.one)
  })

  scenario('creates a colorScheme', async (scenario) => {
    const result = await createColorScheme({
      input: {
        id: 'String',
        updatedAt: '2021-04-10T01:36:35Z',
        primary: 'String',
        secondary: 'String',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.updatedAt).toEqual('2021-04-10T01:36:35Z')
    expect(result.primary).toEqual('String')
    expect(result.secondary).toEqual('String')
  })

  scenario('updates a colorScheme', async (scenario) => {
    const original = await colorScheme({ id: scenario.colorScheme.one.id })
    const result = await updateColorScheme({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a colorScheme', async (scenario) => {
    const original = await deleteColorScheme({
      id: scenario.colorScheme.one.id,
    })
    const result = await colorScheme({ id: original.id })

    expect(result).toEqual(null)
  })
})
