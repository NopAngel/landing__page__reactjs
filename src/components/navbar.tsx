import logo from "../../public/icon/logo.png"
import Button from "./button"

function Navbar() {
  return (
   <header className="py-5 p-3 bg-transparent">
    <nav className="flex justify-around items-center gap-5">
        <section> 
           <h1 className="text-2xl font-bold">Logo</h1>
        </section>
        <section className="flex gap-5 items-center text-neutral-300">
            <a href="">Home</a>
            <a href="">Features</a>
            <a href="">Customers</a>
            <a href="">Updates</a>
            <a href="">Help</a>
            <Button className="text-black">Get for free</Button>
        </section>
    </nav>
   </header>
  )
}

export default Navbar