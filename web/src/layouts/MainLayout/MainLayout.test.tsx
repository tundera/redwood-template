import { render } from '@redwoodjs/testing'

import MainLayout from './MainLayout'

describe('TeamLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainLayout />)
    }).not.toThrow()
  })
})
