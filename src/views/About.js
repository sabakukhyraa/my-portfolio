import { useState } from "react";

export default function About() {
  const [activeSpeech, setActiveSpeech] = useState(0)

  const bilmemne = setInterval(() => {
    if (activeSpeech === contents.length - 1) {
      setActiveSpeech(0)
      clearInterval(bilmemne)
    } else {
      setActiveSpeech(activeSpeech + 1)
      clearInterval(bilmemne)
    }
  }, 3600)

  
  const contents = ["I'm 21.", "I'm from Istanbul, Turkey.", "I'm studying at Piri Reis University.", "I'm learning everything about web.", "I believe engineering is the perfect planning of solutions with foresight.", "My dream is to be a great engineer."]


  let speechLoop = contents.map((content, index) => 
    <p key={index} style={{opacity: activeSpeech === index && 100 + "%"}} className="absolute w-full transition-opacity duration-200 ease-in opacity-0">
      {content}
    </p>
  )

  return (
    <div className="background-css">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center pb-44 lg:pb-32 lg:px-0 px-8 gap-8 h-[100vh]">
            <img
              className="object-contain w-40 h-40 rounded-full shadow-lg aspect-square"
              src="/about-me.png"
              alt="about"
            />
            <div className="relative flex justify-center w-full text-4xl font-medium text-center text-gray speech">
              {speechLoop}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
