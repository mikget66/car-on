import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });

const page = () => {
  return (
    <div>
        <div className="Container flex flex-col items-center gap-8">
        <span className='bg-brandColor p-2 rounded-3xl' >7+ YEARS EXPERIENCED IN FIELD</span>
        <h1 className='text-6xl text-center max-w-[1200px]'>
        ListOn was founded in 2023 by Alexander with a <span className={`${caveat.className}`}>vision to your original</span> or inspiration.
        </h1>
        </div>
    </div>
  )
}

export default page