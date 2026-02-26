'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const Details = () => {
  const features = [
    {
      id: 1,
      title: 'Comprehensive Study Material',
      description: 'Gain an expansive Online CBSE-ICSE & all state board subjects materials in one place.',
      image: '/school/comprehensive.png',
      points: [
        'Conceptualized Reports on MCQs/Case Studies',
        'Homework & Assignments Integration with Dedicated Performance Analysis',
        'Generated/Cancelled Certificates'
      ],
    },
    {
      id: 2,
      title: 'Examination System',
      description: 'Manage Exams with our integrated Examination Management System',
      image: '/school/Asset 22-8.png',
      points: [
        'MCQs & Subjective Questions Feature',
        'Online and Schedule Exams',
        'Get Progress Graphical Certificate',
        'Secured Performance Marks'
      ],
    },
    {
      id: 3,
      title: 'School Fee Management System',
      description: 'Streamline Fee collection with School Login & Payment Details',
      image: '/school/Asset 5-8.png',
      points: [
        'Automated Fee Invoice with School Logo & Payment Details',
        'Integrated Payment Invoice Generation',
        'Comprehensive M/S Reports (Integration with Machine School Ledger)',
        'Evaluate payment Activity & Detailed Attendance facility'
      ],
    },
    {
      id: 4,
      title: 'TimeTable Management System',
      description: 'Set Your Subject Wise and Class Wise Timetable Respectively',
      image: '/school/timetable.png',
      points: [
        'Fully Customizable Period & Timetable',
        'Teacher Practice List Records',
        'Hourly, Classwise & Individual TimetTable View',
        'Substitute Teacher Report for Availability'
      ],
    },
    // Commented out the 5th item to make a perfect 2x2 (4 card) grid
    /*
    {
      id: 5,
      title: 'Attendance Management',
      description: 'Track student Attendance & manage online from a user-generated platform with auto-generated status',
      image: '/school/details-3.png',
      points: [
        'Manage students and staff attendance record',
        'Daily, generate attendance statistics report criteria wise attendance',
        'Automated SMS and mobile app alerts system',
        'Online leave Applications'
      ],
    }
    */
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-linear-to-r from-[#016DAB] to-[#01CB89] bg-clip-text text-transparent">Key Features</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover powerful tools designed to transform the educational experience
          </p>
        </div>

        {/* Feature Cards - 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col bg-linear-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${
                index % 2 === 0 ? 'hover:border-[#01CB89]' : 'hover:border-[#016DAB]'
              }`}
            >
              <div className="w-full flex justify-center mb-8">
                {/* Updated: max-w-70 */}
                <div className="relative w-full max-w-70 aspect-square">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content Area */}
              {/* Updated: grow instead of flex-grow */}
              <div className="w-full flex flex-col grow">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed text-center md:text-left">
                  {feature.description}
                </p>

                {/* Feature Points - Pushed to bottom using mt-auto if needed */}
                <ul className="space-y-4 mt-auto">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-1 ${
                        index % 2 === 0 ? 'text-[#01CB89]' : 'text-[#016DAB]'
                      }`} />
                      <span className="text-gray-700 leading-relaxed text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section Placeholder */}
        
      </div>
    </section>
  );
};

export default Details;