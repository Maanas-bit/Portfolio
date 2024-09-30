import Link from 'next/link'

export default function NotFound() {
  return <div>
      <h1 className='text-center mt-20 text-[50px] text'>This page is not covered</h1>
      <h1 className='text-[400px] text-center text-purple'>404.</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
  </div>
}