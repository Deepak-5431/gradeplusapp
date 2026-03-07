"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ThumbsUp, ThumbsDown } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  badge?: string;
  likes: number;
  dislikes: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah J.",
    role: "High School Junior",
    image: "/avatars/sarah.jpg",
    rating: 5,
    text: "GradePlus AI explained calculus better than my textbook. Truly a game changer for my AP exams.",
    badge: "Top Rated",
    likes: 124,
    dislikes: 3
  },
  {
    id: 2,
    name: "Mark D.",
    role: "College Freshman",
    image: "/avatars/mark.jpg",
    rating: 5,
    text: "The essay grading tool helped me refine my writing instantly. I finally understand structure.",
    likes: 98,
    dislikes: 2
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Grad Student",
    image: "/avatars/emily.jpg",
    rating: 5,
    text: "Great for quick concept checks and generating study guides from my notes.",
    badge: "Top Rated",
    likes: 156,
    dislikes: 5
  },
  {
    id: 4,
    name: "James K.",
    role: "High School Senior",
    image: "/avatars/james.jpg",
    rating: 5,
    text: "This app saved my grades! The AI tutor is available 24/7 and explains things in a way I actually understand.",
    likes: 203,
    dislikes: 4
  },
  {
    id: 5,
    name: "Lisa M.",
    role: "College Sophomore",
    image: "/avatars/lisa.jpg",
    rating: 5,
    text: "Perfect for late-night study sessions. The instant feedback helps me learn from my mistakes right away.",
    likes: 87,
    dislikes: 1
  },
  {
    id: 6,
    name: "David P.",
    role: "Graduate Student",
    image: "/avatars/david.jpg",
    rating: 5,
    text: "GradePlus has been instrumental in helping me manage my research papers and citations efficiently.",
    badge: "Top Rated",
    likes: 145,
    dislikes: 2
  }
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Adjust items per page based on screen size
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= reviews.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.floor(reviews.length / itemsPerPage) * itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index * itemsPerPage);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    // Add your subscription logic here
    setEmail('');
  };

  const totalSlides = Math.ceil(reviews.length / itemsPerPage);
  const currentSlide = Math.floor(currentIndex / itemsPerPage);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span className="text-[#016DAB]">10,000+</span> Students
          </h2>
          <p className="text-gray-600 text-lg">
            See how GradePlus is changing the way students learn.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full shrink-0">
                  <div className={`grid gap-6 px-4 ${
                    itemsPerPage === 1 ? 'grid-cols-1' : 
                    itemsPerPage === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {reviews.slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage).map((review) => (
                      <div 
                        key={review.id}
                        className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#01CB89] transition-all duration-300 hover:shadow-xl hover:shadow-[#01CB89]/20"
                      >
                        {/* User Info */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#016DAB] to-[#01CB89] flex items-center justify-center text-white font-semibold text-lg">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="text-gray-900 font-semibold">{review.name}</h3>
                              <p className="text-gray-600 text-sm">{review.role}</p>
                            </div>
                          </div>
                          {review.badge && (
                            <span className="bg-[#016DAB]/10 text-[#016DAB] text-xs px-3 py-1 rounded-full border border-[#016DAB]/30">
                              {review.badge}
                            </span>
                          )}
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          "{review.text}"
                        </p>

                        {/* Like/Dislike */}
                        <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                          <button className="flex items-center gap-2 text-gray-600 hover:text-[#01CB89] transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span className="text-sm">{review.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                            <ThumbsDown className="w-4 h-4" />
                            <span className="text-sm">{review.dislikes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-[#016DAB] text-[#016DAB] hover:text-white border border-gray-200 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-[#01CB89] text-[#01CB89] hover:text-white border border-gray-200 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Carousel Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mb-16">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#016DAB] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Newsletter Section */}
        <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200 max-w-3xl mx-auto shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Join our newsletter
            </h3>
            <p className="text-gray-600">
              Get study tips and AI updates in your inbox.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#016DAB] focus:ring-2 focus:ring-[#016DAB]/20 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#01CB89] hover:bg-[#01CB89]/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#01CB89]/50 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;
