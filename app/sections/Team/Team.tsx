import SectionHead from "@/components/SectionHead";
import { TEAM_SECTION } from "../constants";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <section className="container-padding margin-y-2xl">
      <div className=" margin-y-xl">
        <SectionHead description={TEAM_SECTION.description} head={TEAM_SECTION.title} />
      </div>
      <ul className="flex flex-wrap gap-10">
        {TEAM_SECTION.members.map((person) => (
          <TeamCard experience={person.experience} expertise={person.expertise} img={person.pfp} name={person.name} role={person.role} key={person.name} />
        ))}
      </ul>
    </section>
  );
}
