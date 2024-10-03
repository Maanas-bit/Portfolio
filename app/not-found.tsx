"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const pathname = usePathname();

  const notify = () => toast("Cool!");

  return (
    <div className='overflow-hidden h-screen'>
        <h1 className='text-center mt-20 text-[50px] text'>Looks like someone messed up</h1>
        <h1 className='text-center text-[40px] text-indigo-600'>The URL "{pathname}" does not exist.</h1>
        <h1 className='text-violet-700 text-[400px] text-center' >404</h1>
          <div className='w-screen text-center h-screen'>
            <Button onClick={goBack} variant="extra" className='text-center p-8 m-2 text-xl font-bold' >Go back</Button>
            <Button onClick={notify} variant="extra" className='text-center p-8 m-2 text-xl font-bold' >NO!</Button>
        <ToastContainer />
        </div> 
       </div>
      )
}