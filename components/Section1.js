import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/Author'

const Section1 = () => {

    const bg = {
        background: "url('/images/img1.jpeg')no-repeat",
        backgroundPosition: "right"
    }
  return (
    <>
    <section className='py-16' style={bg}>
        <div className='container mx-auto md:px-20'>
            <h1 className='font-bold text-4xl text-center pb-12'>Trending</h1>
            {Slide()}
        </div> 
    </section>
    </>
  )
}

export default Section1


function Slide() {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href="/">
                     <Image src={"/images/img1.jpeg"} width={600} height={600} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href="/" className='text-orange-600 hover:text-orange-800'>Business, Travel</Link>
                    <Link href="/" className='text-gray-600 hover:text-gray-800'> - Feb 19, 2023</Link>
                </div>
                <div className="title">
                    <Link href="/" className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, consequatur.</Link>
                </div>
                <p className='text-gray-500 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt amet corrupti architecto molestias! At repellat porro atque tempore ipsam consectetur vitae sequi nulla eveniet, pariatur magni labore officiis? Quo, consectetur.</p>
                <Author />
            </div>
        </div>
    )
}