import React from "react"
import Image from "next/legacy/image"
import data from "../projects.json"

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 px-11 py-12">
      {data.map((project) => (
        <div key={project.id} className="flex justify-center p-6">
          <div className="relative w-[430px] h-[340px]">
            <Image
              src={project.thumbnail}
              alt={project.title}
              layout="intrinsic"
              width={430}
              height={340}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
