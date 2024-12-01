import { useState } from 'react'
import Image from 'next/image'

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  { id: 1, title: 'Project One', description: 'Description for Project One', imageUrl: '/images/project1.jpg' },
  { id: 2, title: 'Project Two', description: 'Description for Project Two', imageUrl: '/images/project2.jpg' },
  { id: 3, title: 'Project Three', description: 'Description for Project Three', imageUrl: '/images/project3.jpg' },
]

const Gallery = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="cursor-pointer border rounded-lg shadow-lg overflow-hidden"
          onClick={() => toggleItem(project.id)}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}  // Set appropriate width and height
            height={300}
            layout="responsive"  // Makes the image responsive
            objectFit="cover"  // Keeps image aspect ratio and fills container
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            {expandedId === project.id && (
              <p className="text-gray-700">{project.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
