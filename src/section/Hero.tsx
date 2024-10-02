import Button from '../components/button';
import Badges from '../components/tags'

function Hero() {
  const wordsArray:Array<String> = ["Version ", "2.0", " is ", "here"];
  const arrayColors:Array<String> = ["#ca71de","#cf9b7f", "#497786", "#4a8ba4"]
  // →
  return (
    <section>
      <main className='flex flex-col gap-2 justify-center items-center h-screen text-center bg-gradient-to-t from-[#5442a2] to-black'>
      <Badges className="bg-[#090315] flex gap-5 border-[2px] border-[#332c40]">
        <h1>
          {wordsArray.map((a, index)=> {
            return (
              <span key={index} style={{color: `${arrayColors[index]}`}}>{a}</span>
            )
          })}
        </h1>
      </Badges>
       <div>
          <h1 className="text-9xl font-semibold text-center z-50">One Task<br /> at a Time</h1>
          <p className='text-xl pt-2 text-left w-fit mx-auto text-neutral-300 z-50'>Celebrate the joy of accomplishment with an<br />
          app designed to track your progress, motivate<br />
          your efforts, and celebrate your success.</p>
          <Button className="mt-10 font-semibold z-50">Get for free</Button>
          
       </div>
      </main>
    </section>
  )
}

export default Hero