import Google from "../assets/logos/google";
import Axure from "../assets/logos/axure";
import Trustpilot from "../assets/logos/trustpilot";
import React from "react";
import Card from "../components/card";

function Features() {
  const sponsorList: Array<{name: string, logo: React.ElementType}> = [{
    name: "Trustpilot",
    logo: Trustpilot
  },{
    name: "Axure",
    logo: Axure
  },{
    name: "Google",
    logo: Google
  }];
  return (
    <section className='w-full h-fit relative'>
      <div className="w-[70%] h-[500px] bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[700px] rounded-t-full  mt-8">

      </div>
      <section className="z-50 text-center translate-y-1/2">
      <h1 className="text-2xl font-bold text-neutral-500">Trusted by the world's most innovative companies teams</h1> 
      <div>
        <ul className="w-full mx-auto flex justify-center gap-10">
          {sponsorList.map((sponsor) => (
            <li>
              <sponsor.logo width={200} height={200} />
            </li>
          ))}
        </ul>
      </div> 
      </section>
      <section className="z-50 text-center translate-y-1/2 flex justify-center h-[80vh] flex-col gap-2">
        <h1 className="text-5xl font-bold z-50 text-center">Everything you need</h1>
        <p className="w-fit mx-auto text-left p-2 opacity-50">Enjoy customizable lists, team work tools, and smart tracking<br/>
        all in one place. Set tasks, get reminders, and see your <br/>
        progress simply and quickly.</p>
        <div>
          <Card />
        </div>
      </section>
    </section>
  )
}

export default Features