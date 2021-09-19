import { screen, render } from '@testing-library/react'

import Main from './index'

describe('<Main>React avançado</Main>', () => {
  it('should render a header', () => {
    render(<Main>React avançado</Main>)
    expect(
      screen.getByRole('heading', { name: 'React avançado' })
    ).toBeInTheDocument()
  })
})
