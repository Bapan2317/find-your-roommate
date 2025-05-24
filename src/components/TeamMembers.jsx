// import { useState } from "react";

// const teamMembers = [
//     {
//         name: "Savannah Nguyen",
//         role: "Property Expert",
//         image: "https://randomuser.me/api/portraits/women/79.jpg",
//     },
//     {
//         name: "Annette Black",
//         role: "Property Expert",
//         image: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//         name: "Kathryn Murphy",
//         role: "Property Expert",
//         image: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//         name: "Ronald Richards",
//         role: "Property Expert",
//         image: "https://randomuser.me/api/portraits/men/45.jpg",
//     },
// ];

// export default function TeamCarousel() {
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Get next 3 members starting from activeIndex, with wrapping
//     const getVisibleMembers = () => {
//         const visible = [];
//         for (let i = 0; i < 3; i++) {
//             visible.push(teamMembers[(activeIndex + i) % teamMembers.length]);
//         }
//         return visible;
//     };

//     return (
//         <div className="w-full max-w-6xl mx-auto px-4">
//             <h3 className="text-center text-orange-600 text-sm font-medium mt-10 mb-2">
//                 Our Expert
//             </h3>
//             <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
//                 Meet Our Real Estate Team
//             </h2>

//             {/* Outer wrapper for animation */}
//             <div className="overflow-hidden">
//                 <div className="flex gap-4 transition-transform duration-700 ease-in-out">
//                     {getVisibleMembers().map((member, index) => (
//                         <div
//                             key={index}
//                             className="w-[300px] flex-shrink-0 bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
//                         >
//                             <img
//                                 src={member.image}
//                                 alt={member.name}
//                                 className="w-24 h-24 rounded-full object-cover mb-4"
//                             />
//                             <h3 className="text-lg font-semibold">{member.name}</h3>
//                             <p className="text-gray-500">{member.role}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Dot buttons */}
//             <div className="flex justify-center mt-6 space-x-3">
//                 {teamMembers.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setActiveIndex(index)}
//                         className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-orange-500 w-6" : "bg-gray-300 w-3"
//                             }`}
//                     ></button>
//                 ))}
//             </div>
//         </div>
//     );
// }




import React from 'react';
import { Fade } from 'react-awesome-reveal';
import CEO from '../assets/CEO.jpg';
import GM from '../assets/GM.jpg';

const team = [
    {
        name: "Bapan Modak",
        role: "CEO of Find Roommates",
        image: "https://i.ibb.co/7JqJQKSk/CEO.jpg"
    },
    {
        name: "Tanvir Hossain",
        role: "General Manager",
        image: "https://i.ibb.co/Lz6ZyvGQ/GM.jpg"
    },
    {
        name: "Sadia Jahan",
        role: "Client Handler ",
        image: "https://i.ibb.co/6JbjhN8J/AS.jpg"
    }
];

const TeamMembers = () => {
    return (
        <div className="bg-secondary py-12 text-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <Fade cascade damping={0.2} direction="up">
                    <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
                    <p className="mb-10 text-lg text-gray-200">Passionate, skilled, and dedicated to building something impactful.</p>
                </Fade>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <Fade cascade damping={0.2} direction="up">
                        {team.map((member, idx) => (
                            <div key={idx} className="bg-white text-black rounded-lg shadow-lg p-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
