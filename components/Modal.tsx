import React, { useState } from "react"
import Image from "next/legacy/image"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void
  content: {
    title: string
    description?: string
    keywords?: string[]
    images: string[]
  } | null
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  if (!isOpen || !content) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-8 rounded-lg relative w-[90%] max-w-4xl h-[80%] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-2xl mb-4 text-center font-sans">{content.title}</h2>
        <p className="text-lg mb-4 text-center">{content.description}</p>
        {content.keywords && (
          <div className="space-y-2 text-center">
            {content.keywords.map((keyword, index) => (
              <p key={index} className="text-md font-medium">{keyword}</p>
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {content.images && content.images.length > 0 ? (
            content.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-48 cursor-pointer"
                onClick={() => setLightboxImage(image)}
              >
                <Image
                  src={image}
                  alt={`${content.title} image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))
          ) : (
            <p>No images available for this project.</p>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-60"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative">
            <Image
              src={lightboxImage}
              alt="Lightbox Image"
              layout="intrinsic" 
              width={1920} 
              height={820}
              className="rounded-lg max-w-[90vw] max-h-[90vh]"
            />
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-400 text-xl"
              onClick={() => setLightboxImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal

