import SectionHead from "@/components/SectionHead";
import { TEAM_SECTION } from "../constants";
import TeamCard from "./TeamCard";
import Button from "@/components/Button";

export default function Team() {
  return (
    <section className="container-padding margin-y-2xl ">
      <div className=" margin-y-xl ">
        <SectionHead description={TEAM_SECTION.description} head={TEAM_SECTION.title} />
      </div>
      <ul className="flex flex-wrap gap-10 items-center justify-center">
        {TEAM_SECTION.members.map((person) => (
          <TeamCard experience={person.experience} expertise={person.expertise} img={person.pfp} name={person.name} role={person.role} key={person.name} />
        ))}
      </ul>
      <div className="margin-t-xl justify-end flex">
        <Button variant="btn-dark" classes="w-full sm:w-[269px] justify-center " label="See all team"/>
      </div>
    </section>
  );
}
