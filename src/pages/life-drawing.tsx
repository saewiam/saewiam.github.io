import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

function LifeDrawingPage() {
  return (
    <>
        <h2>figure drawing</h2>
    </>
  )
}

export const LifeDrawingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/life-drawing',
  component: LifeDrawingPage, 
});