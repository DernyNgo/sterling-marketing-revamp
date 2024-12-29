import React, { useState } from "react"
import Image from "next/legacy/image"
import data from "../projects.json"
import Modal from "./Modal"

const Gallery: React.FC = () => {
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const handleOpenModal = (project: any) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 px-11 py-12">
      {data.map((project) => (
        <div 
        key={project.id} 
        className="flex justify-center p-6"
        onClick={() => handleOpenModal(project)}
        >
          <div className="relative w-[430px] h-[340px]">
            <Image
              src={project.thumbnail}
              alt={project.title}
              layout="intrinsic"
              width={430}
              height={340}
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 transform hover:scale-150 cursor-pointer"
            />
          </div>
        </div>
      ))}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={selectedProject} />
    </div>
  )
}

export default Gallery
