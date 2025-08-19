export default function AboutPage() {
  const team = [
    {
      name: "Maria Perera",
      role: "Founder & CEO - CBC Cosmetics",
      email: "maria1@gmail.com",
      img: "https://cdn4.iconfinder.com/data/icons/people-avatars-8/256/PEOPLE_ICON-32-1024.png",
    },
    {
      name: "Sarah Fernando",
      role: "Head of Product - CBC Cosmetics",
      email: "sarahf@gmail.com",
      img: "https://cdn4.iconfinder.com/data/icons/people-avatars-8/256/PEOPLE_ICON-38-1024.png",
    },
    {
      name: "Richard Silva",
      role: "Marketing Director - CBC Cosmetics",
      email: "richardsilva@gmail.com",
      img: "https://cdn4.iconfinder.com/data/icons/people-avatars-8/256/PEOPLE_ICON-03-1024.png",
    },
  ];

  return (
    <section className="about-business px-6 md:px-20 py-16 text-gray-800">
      {/* Vision & Mission */}
      <h2 className="text-4xl font-bold text-center mb-12 text-pink-700">Our Vision & Mission</h2>

      <div className="vision-mission grid md:grid-cols-2 gap-10 mb-20">
        <div className="vision bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-pink-600 mb-4">Our Vision</h3>
          <p className="text-lg leading-relaxed">
            To redefine beauty by empowering every individual to express their
            natural radiance through clean, ethical, and innovative cosmetics.
          </p>
        </div>

        <div className="mission bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-pink-600 mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            We commit to crafting sustainable and cruelty-free products,
            sourcing premium natural ingredients, and fostering transparency
            that inspires self-love and confidence.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-4xl font-bold text-center mb-12 text-pink-700">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full border-4 border-pink-200 mb-6 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
            <p className="text-pink-600 font-medium">{member.role}</p>
            <p className="text-gray-500 mt-2">Contact via - {member.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
