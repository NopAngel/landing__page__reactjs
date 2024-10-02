
import captureTwo from "../../public/icon/capture_image.png"

function Interface() {

    return (
      <section className="flex justify-center items-center h-screen mt-[800px]">
        <section className="text-center">
            <h1 className="text-5xl font-semibold">Intuitive interface</h1>
            <p className="opacity-50 text-xl w-[500px] mx-auto my-5">Celebrate the joy of accomplishment with an
app designed to track your progress, motivate
your efforts, and celebrate your success.
</p>
            <img src={captureTwo} alt="Capture - Note App" className="rounded-lg" />
        </section>
      </section>
    )
}
export default Interface