import gokhanOzdemir from "../assets/gokhanozdemir.jpeg";
import emreSahiner from "../assets/emrehoca.jpeg";
import ademKutlu from "../assets/Ben.png";
import aylinMercan from "../assets/Aylin.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Gökhan Özdemir",
    role: "Project Manager",
    description: "Guides the team and manages the project.",
    image: gokhanOzdemir,
  },
  {
    id: 2,
    name: "Emre Şahiner",
    role: "Software Development Instructor",
    description: "Supports the team during the development process.",
    image: emreSahiner,
  },
  {
    id: 3,
    name: "Adem Kutlu",
    role: "Full Stack Developer",
    description: "Creates responsive pages and application features.",
    image: ademKutlu,
  },
  {
    id: 4,
    name: "Aylin Mercan",
    role: "Full Stack Developer",
    description: "Develops application features and improves the user experience.",
    image: aylinMercan,
  },
];
function TeamPage() {
  return (
    <section className="bg-[#F7F9FC] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1050px]">
            <div className="mx-auto max-w-[600px] text-center">
                <p className="text-sm font-bold text-[#23A6F0]">OUR TEAM</p>
                <h1 className="mt-3 text-4xl font-bold text-[#252B42] md:text-5xl">
                    Meet Our Team
                </h1>
                <p className="mt-5 text-sm leading-6 text-[#737373]">
                    Our team is made up of passionate individuals who are dedicated to providing the best products and services to our customers.
                </p>
            </div> 
            <div className="mt-14 flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center">
  {teamMembers.map((member) => (
    <div
      key={member.id}
      className="flex w-full max-w-[230px] flex-col items-center text-center"
    >
      <img
        src={member.image}
        alt={member.name}
        className="size-40 rounded-full object-cover object-top"
      />

      <p className="mt-5 text-sm font-bold text-[#23A6F0]">
        {member.role}
      </p>

      <h2 className="mt-2 text-lg font-bold text-[#252B42]">
        {member.name}
      </h2>

      <p className="mt-3 text-sm leading-5 text-[#737373]">
        {member.description}
      </p>
    </div>
  ))}
</div>
                  </div>
      </section>
  );
}

export default TeamPage;
