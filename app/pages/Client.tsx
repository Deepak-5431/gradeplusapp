"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ThumbsUp, ThumbsDown } from 'lucide-react';

interface ClientReview {
  id: number;
  name: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  badge?: string;
  likes: number;
  dislikes: number;
}

const clientReviews: ClientReview[] = [
  {
    id: 1,
    name: "Alex Thompson",
    company: "Tech Solutions Inc",
    image: "/avatars/alex.jpg",
    rating: 5,
    text: "GradePlus transformed how our team approaches learning. The AI insights are incredible and the dashboard is intuitive. Highly recommended!",
    badge: "Enterprise",
    likes: 342,
    dislikes: 2
  },
  {
    id: 2,
    name: "Jennifer Chen",
    company: "EduTech Ventures",
    image: "/avatars/jennifer.jpg",
    rating: 5,
    text: "The ROI we've seen from implementing GradePlus has been phenomenal. Our productivity increased by 40% in just 3 months.",
    badge: "Premium Partner",
    likes: 287,
    dislikes: 1
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    company: "Global Learning Corp",
    image: "/avatars/michael.jpg",
    rating: 5,
    text: "Excellent support team and seamless integration. GradePlus is now integral to our educational platform.",
    likes: 156,
    dislikes: 0
  },
  {
    id: 4,
    name: "Sarah Williams",
    company: "Future Academy",
    image: "/avatars/sarah.jpg",
    rating: 5,
    text: "The personalization features are outstanding. Our students love it and we've seen dramatic improvement in engagement.",
    badge: "Enterprise",
    likes: 298,
    dislikes: 3
  },
  {
    id: 5,
    name: "David Brown",
    company: "Innovation Hub",
    image: "/avatars/david.jpg",
    rating: 4,
    text: "Outstanding platform with great features. The AI tutoring capabilities really stand out. Looking forward to more updates!",
    likes: 201,
    dislikes: 2
  },
  {
    id: 6,
    name: "Emily Foster",
    company: "Smart Schools Network",
    image: "/avatars/emily.jpg",
    rating: 4,
    text: "Very impressed with the user experience and customer support. This tool has been a game-changer for our institution.",
    likes: 189,
    dislikes: 1
  },
  {
    id: 7,
    name: "Robert Martinez",
    company: "Education First",
    image: "/avatars/robert.jpg",
    rating: 5,
    text: "Industry-leading solution with top-notch customer service. GradePlus consistently exceeds our expectations.",
    badge: "Premium Partner",
    likes: 267,
    dislikes: 2
  },
  {
    id: 8,
    name: "Lisa Anderson",
    company: "Future Leaders",
    image: "/avatars/lisa.jpg",
    rating: 5,
    text: "Remarkable product! The analytics dashboard helps us make data-driven decisions about our curriculum.",
    likes: 213,
    dislikes: 0
  },
  {
    id: 9,
    name: "James Patterson",
    company: "Digital Education Hub",
    image: "/avatars/james.jpg",
    rating: 4,
    text: "A powerful tool that brings real value to our organization. The team is responsive and genuinely cares about customer success.",
    likes: 178,
    dislikes: 1
  }
];

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= clientReviews.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.floor(clientReviews.length / itemsPerPage) * itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index * itemsPerPage);
  };

  const totalSlides = Math.ceil(clientReviews.length / itemsPerPage);
  const currentSlide = Math.floor(currentIndex / itemsPerPage);

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="bg-linear-to-r from-[#016DAB] to-[#01CB89] bg-clip-text text-transparent">Leading Organizations</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what industry leaders say about their experience with GradePlus
          </p>
        </div>

        <div className="relative mb-12 px-4 py-6">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clientReviews.slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage).map((review) => (
                      <div 
                        key={review.id}
                        className="bg-linear-to-br from-[#016DAB] via-[#0189a0] to-[#01CB89] rounded-2xl p-0.5 hover:shadow-2xl hover:shadow-[#01CB89]/40 transition-all duration-300"
                      >
                        <div className="bg-white rounded-2xl p-6 h-full">
                          {/* User Info */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#016DAB] to-[#01CB89] flex items-center justify-center text-white font-semibold text-lg shadow-md">
                                {review.name.charAt(0)}{review.name.split(' ')[1]?.charAt(0) || ''}
                              </div>
                              <div>
                                <h3 className="text-gray-900 font-semibold text-base">{review.name}</h3>
                                <p className="text-gray-600 text-sm font-medium">{review.company}</p>
                              </div>
                            </div>
                            {review.badge && (
                              <span className="bg-linear-to-r from-[#016DAB]/10 to-[#01CB89]/10 text-[#016DAB] text-xs px-3 py-1 rounded-full border border-[#01CB89]/30 whitespace-nowrap ml-2">
                                {review.badge}
                              </span>
                            )}
                          </div>

                          {/* Rating */}
                          <div className="flex gap-1 mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 fill-current"
                                style={{
                                  background: `linear-linear(to right, #016DAB, #01CB89)`,
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text'
                                }}
                                viewBox="0 0 20 20"
                              >
                                <path 
                                  d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                  fill={i < review.rating ? '#FFD700' : '#E5E7EB'}
                                />
                              </svg>
                            ))}
                          </div>

                          {/* Review Text */}
                          <p className="text-gray-700 mb-6 leading-relaxed grow">
                            "{review.text}"
                          </p>

                          {/* Like/Dislike */}
                          <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                            <button className="flex items-center gap-2 text-gray-600 hover:text-[#01CB89] transition-colors group">
                              <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-medium">{review.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors group">
                              <ThumbsDown className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-medium">{review.dislikes}</span>
                            </button>
                          </div>
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
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-linear-to-br from-[#016DAB] to-[#01CB89] hover:shadow-lg hover:shadow-[#01CB89]/50 text-white border border-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-linear-to-br from-[#016DAB] to-[#01CB89] hover:shadow-lg hover:shadow-[#01CB89]/50 text-white border border-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Carousel Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mb-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-linear-to-r from-[#016DAB] to-[#01CB89] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* CTA Section */}
       </div>
    </section>
  );
};

export default Client;
