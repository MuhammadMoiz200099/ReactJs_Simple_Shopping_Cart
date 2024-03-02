import React from 'react';
import PrimaryButton from "../../components/buttons/primaryButton";

const Home = () => {
  return (
    <div className='w-full'>
      <div className='text-6xl uppercase font-bold tracking-widest mt-20'>
        Shop your Dreams
      </div>

      <div className="mt-5 text-lg font-serif tracking-widest">
        <p>
          Share Your Thought's With Us And We Will Acknowledge The World{" "}
          <br />
          Feel Free And Express Your Yourself To World
        </p>
      </div>

      <div className="flex justify-start items-center gap-4 mt-10">
        <PrimaryButton title="Get Started" />
        <PrimaryButton title="Contact Now" />
      </div>
    </div>
  )
}

export default Home