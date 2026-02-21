'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const galleryImages = [
    { id: 1, src: '/crowsel/1.png', alt: 'Dashboard Overview' },
    { id: 2, src: '/crowsel/2.png', alt: 'Analytics Page' },
    { id: 3, src: '/crowsel/3.png', alt: 'User Management' },
    { id: 4, src: '/crowsel/4.png', alt: 'Reports Section' },
    { id: 5, src: '/crowsel/5.png', alt: 'Settings Panel' },
    { id: 6, src: '/crowsel/6.png', alt: 'Performance Metrics' },
    { id: 7, src: '/crowsel/7.png', alt: 'Data Visualization' },
    { id: 8, src: '/crowsel/8.png', alt: 'Mobile Interface' },
    { id: 9, src: '/crowsel/9.jpg', alt: 'Integration Features' },
    { id: 10, src: '/crowsel/10.jpg', alt: 'Advanced Dashboard' },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Platform <span className="bg-gradient-to-r from-[#016DAB] to-[#01CB89] bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore screenshots and app visuals. Click on any image to zoom in.
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex -ml-4 items-center h-[36rem]"> {/* Fixed height container to prevent jumping */}
              {galleryImages.map((image, index) => {
                const isActive = index === selectedIndex;
                
                return (
                  <div
                    key={image.id}
                    className="min-w-0 pl-4 flex-[0_0_60%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_22%] flex justify-center py-12"
                  >
                    {/* Container scaling applied here for pure 3D effect */}
                    <div
                      className={`relative group cursor-pointer w-full max-w-[260px] transition-all duration-700 ease-out ${
                        isActive ? 'scale-[1.15] opacity-100 z-20' : 'scale-90 opacity-40 z-0'
                      }`}
                      onClick={() => {
                        if (isActive) {
                          setSelectedImage(image.id);
                        } else {
                          scrollTo(index);
                        }
                      }}
                    >
                      {/* Dynamic Frame: Black phone bezel when active, clean screenshot when inactive */}
                      <div className={`rounded-[2rem] relative transition-all duration-500 overflow-hidden ${
                        isActive ? 'bg-black p-2 shadow-[0_20px_50px_rgba(1,203,137,0.2)]' : 'bg-transparent p-0 shadow-lg'
                      }`}>
                        
                        {/* Notch - only visible on active */}
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                        {/* Screen */}
                        <div className="relative bg-white rounded-2xl overflow-hidden aspect-[9/19]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 60vw, (max-width: 1024px) 30vw, 22vw"
                          />

                          {/* Zoom Overlay (Only on active slide) */}
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                              <div>
                                <p className="text-white font-semibold text-sm">{image.alt}</p>
                              </div>
                              <div className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-all">
                                <ZoomIn className="w-5 h-5 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          {canScrollPrev && (
            <button
              onClick={scrollPrev}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow-lg text-gray-800 p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {canScrollNext && (
            <button
              onClick={scrollNext}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow-lg text-gray-800 p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full border-2 border-[#016DAB] ${
                index === selectedIndex
                  ? 'bg-[#01CB89] w-3 h-3 border-transparent' 
                  : 'bg-transparent w-2.5 h-2.5 hover:bg-[#016DAB]/20' 
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Lightbox Modal (Unchanged) */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 z-[51]"
              aria-label="Close zoom"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={galleryImages[selectedImage - 1].src}
                  alt={galleryImages[selectedImage - 1].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {selectedImage > 1 && (
                <button
                  onClick={() => setSelectedImage(selectedImage - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {selectedImage < galleryImages.length && (
                <button
                  onClick={() => setSelectedImage(selectedImage + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;