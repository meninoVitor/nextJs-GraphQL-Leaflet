import { screen, render } from '@testing-library/react'

import Main from './index'

describe('<Main/>', () => {
  it('should render a header', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: 'React avançado' })
    ).toBeInTheDocument()
  })
})
