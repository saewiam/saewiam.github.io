import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

function IllustrationPage() {
  return (
    <>
        <h2>grid of illustrations will be here</h2>
    </>
  )
}

export const IllustrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/illustration',
  component: IllustrationPage, 
});