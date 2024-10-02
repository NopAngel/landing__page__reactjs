import { FaFeather} from "react-icons/fa"
import { CardDemo, Skeleton } from "./ui/card-skeleton"
import Button from "./button"

function FeatherButton() {
    return <Button className="w-fit py-5 px-5 rounded-full"><FaFeather /></Button>
}

function Card() {
  return (
    <div className="grid grid-cols-3 mx-auto w-[80%]">
    <CardDemo Description="Exactly, we can use AI for the notes, so you will have auto-correction, automatic saving, and many more things!! This option is totally free." Title="Synchronization with AI." Icon={Skeleton} />
    <CardDemo Description="Our application allows you to save your notes encrypted so that no one can hack and read your information" Title="Secure and encrypted." Icon={FeatherButton} />
    <CardDemo Description="This option allows you to translate your notes from several languages. It is very useful if you work in other countries. This all uses AI." Title="AI Translator." Icon={FeatherButton} />

    </div>
  )
}

export default Card