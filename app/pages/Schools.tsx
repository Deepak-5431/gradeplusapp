'use client';

import { useState, useEffect, useCallback } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

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
    name: "Rahul Singh",
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
    name: "Abhishek Yadav",
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
    name: "Priyanshu Mishra",
    company: "Global Learning Corp",
    image: "/avatars/michael.jpg",
    rating: 5,
    text: "Excellent support team and seamless integration. GradePlus is now integral to our educational platform.",
    likes: 156,
    dislikes: 0
  },
  {
    id: 4,
    name: "Pawani Singh",
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
    name: "David Shukla",
    company: "Innovation Hub",
    image: "/avatars/david.jpg",
    rating: 4,
    text: "Outstanding platform with great features. The AI tutoring capabilities really stand out. Looking forward to more updates!",
    likes: 201,
    dislikes: 2
  },
  {
    id: 6,
    name: "Khusi Shukla",
    company: "Smart Schools Network",
    image: "/avatars/emily.jpg",
    rating: 4,
    text: "Very impressed with the user experience and customer support. This tool has been a game-changer for our institution.",
    likes: 189,
    dislikes: 1
  },
  {
    id: 7,
    name: "Juhi Jain",
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
    name: "Rahul Singh",
    company: "Future Leaders",
    image: "/avatars/lisa.jpg",
    rating: 5,
    text: "Remarkable product! The analytics dashboard helps us make data-driven decisions about our curriculum.",
    likes: 213,
    dislikes: 0
  },
  {
    id: 9,
    name: "Varun Kuamar",
    company: "Digital Education Hub",
    image: "/avatars/james.jpg",
    rating: 4,
    text: "A powerful tool that brings real value to our organization. The team is responsive and genuinely cares about customer success.",
    likes: 178,
    dislikes: 1
  }
];

const Schools = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [autoPlay, setAutoPlay] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('reInit', () => setScrollSnaps(emblaApi.scrollSnapList()));
  }, [emblaApi, onSelect]);

  // Autoplay Effect (3 seconds)
  useEffect(() => {
    if (!emblaApi || !autoPlay) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [emblaApi, autoPlay]);

  const scrollTo = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    setAutoPlay(false);
  };

  return (
    <section className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-linear-to-r from-[#4A7BA7] to-[#016DAB] bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl px-4">
            Here What our Users Say...
          </p>
        </div>

        {/* Embla Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          onTouchStart={() => setAutoPlay(false)}
          onTouchEnd={() => setAutoPlay(true)}
        >
          {/* Using -mx-4 and px-4 padding tricks to prevent hover clipping */}
          <div className="overflow-hidden px-4 -mx-4" ref={emblaRef}>
            <div className="flex -ml-4 py-6"> {/* py-6 added for hover expansion space */}
              {clientReviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
                >
                  <div className="bg-linear-to-br from-[#016DAB] via-[#0189a0] to-[#01CB89] rounded-2xl p-0.5 hover:shadow-2xl hover:shadow-[#01CB89]/40 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                    <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#016DAB] to-[#01CB89] flex items-center justify-center text-white font-semibold text-lg shadow-md shrink-0">
                            {review.name.charAt(0)}{review.name.split(' ')[1]?.charAt(0) || ''}
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-semibold text-base">{review.name}</h3>
                            <p className="text-gray-600 text-sm font-medium">{review.company}</p>
                          </div>
                        </div>
                        {review.badge && (
                          <span className="bg-linear-to-r from-[#016DAB]/10 to-[#01CB89]/10 text-[#016DAB] text-xs px-3 py-1 rounded-full border border-[#01CB89]/30 whitespace-nowrap ml-2 hidden sm:block">
                            {review.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 fill-current"
                            style={{
                              background: `linear-gradient(to right, #016DAB, #01CB89)`,
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

                      <p className="text-gray-700 mb-6 leading-relaxed grow">
                        "{review.text}"
                      </p>

                      <div className="flex items-center gap-6 pt-4 border-t border-gray-200 mt-auto">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex
                  ? 'bg-[#016DAB] w-3 h-3'
                  : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;