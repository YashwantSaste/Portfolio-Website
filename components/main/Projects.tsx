import React from 'react'
import ProjectCard from '../Core/ProjectCard'

const Projects = () => {
  return (
    <div id='projects'
     className='flex flex-col justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
            src='/NextWebsite.png'
            title='Modern Next.JS portfolio'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam suscipit illo sit dolores aliquid commodi beatae nobis exercitationem necessitatibus? Perferendis sunt aut alias, impedit ducimus consectetur animi nisi ab laborum.
            Voluptate dolorum quisquam id esse. Delectus provident possimus ea magni voluptatem ipsa minima earum harum hic optio modi cupiditate voluptates nulla, eveniet explicabo? Eius quos inventore necessitatibus rem dicta totam.'
            />
            <ProjectCard
            src='/CardImage.png'
            title='Modern Next.JS portfolio'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam suscipit illo sit dolores aliquid commodi beatae nobis exercitationem necessitatibus? Perferendis sunt aut alias, impedit ducimus consectetur animi nisi ab laborum.
            Voluptate dolorum quisquam id esse. Delectus provident possimus ea magni voluptatem ipsa minima earum harum hic optio modi cupiditate voluptates nulla, eveniet explicabo? Eius quos inventore necessitatibus rem dicta totam.'
            />
            <ProjectCard
            src='/SpaceWebsite.png'
            title='Modern Next.JS portfolio'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam suscipit illo sit dolores aliquid commodi beatae nobis exercitationem necessitatibus? Perferendis sunt aut alias, impedit ducimus consectetur animi nisi ab laborum.
            Voluptate dolorum quisquam id esse. Delectus provident possimus ea magni voluptatem ipsa minima earum harum hic optio modi cupiditate voluptates nulla, eveniet explicabo? Eius quos inventore necessitatibus rem dicta totam.'
            />
        </div>
    </div>
  )
}

export default Projects