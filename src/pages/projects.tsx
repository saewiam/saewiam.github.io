import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

import classes from './projects.module.css'
import Image from '../components/art-display/image'

import makeda from '../../assets/images/makeda sketch1.png'
import vien from '../../assets/images/vien sketch1.png'

function ProjectsPage() {
  return (
    <>
        <h2>prawjects</h2>
        <div className={classes.projects_display}>
            <Image src={makeda} caption ='sketches'/>
            <Image src={vien} caption='sketches 2'/>
        </div>
    </>
  )
}

export const ProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsPage, 
});