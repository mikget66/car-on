import Link from 'next/link'


export default function NotFound() {
  return <div className='flex flex-col justify-center items-center h-[100vh] gap-5'>
      <h1 className='font-caveatRegular text-[20rem] text-brandColor'>404</h1>
      <h3>Page Not Found</h3>
      <p className='max-w-[500px] text-textlight'>The server encountered something unexpected that didn&apos;t allow it to complete the request. We apologize. You can go back to main page:</p>
      <div>
        <Link href="/" className='bg-brandColor p-4 rounded-lg'>Go back to Home</Link>
      </div>
  </div>
}