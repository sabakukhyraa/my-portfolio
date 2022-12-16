export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center gap-8 h-[100vh] pb-60 background-css backdrop-opacity-70">
        <img
          className="object-contain w-40 h-40 rounded-full aspect-square"
          src="/profile.png"
          alt="profile"
        />
        <h1 className="text-5xl font-bold text-gray">Ali Kerem Ata</h1>
        <div className="text-center">
          <p className="text-xl font-semibold text-gray">
            Hi! You can find my personal information, projects and career
            history in this website.
          </p>
          <p className="text-xl font-semibold text-gray">
            If you desire to work with me please contact me.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 h-[100vh] background-css backdrop-blur-md">
        <h1 className="text-5xl font-bold text-gray">Tech I Use:</h1>
        <div className="flex w-full gap-12 px-60">
          <h2>Frontend</h2>  
          <ul className="grid w-full grid-cols-2 gap-12">
            <li>
              <h3>Javascript</h3>
            </li>
            <li>
              <h3>React.js</h3>
            </li>
            <li>
              <h3>Vue.js</h3>
            </li>
            <li>
              <h3>CSS</h3>
            </li>
            <li>
              <h3>Tailwind CSS</h3>
            </li>
            <li>
              <h3>Bootstrap</h3>
            </li>
          </ul>
        </div>
        <div className="flex w-full gap-12 px-60">
          <h2>Backend</h2>  
          <ul className="grid w-full grid-cols-2 gap-12">
            <li>
              <h3>Node.js</h3>
            </li>
            <li>
              <h3>MongoDB</h3>
            </li>
            <li>
              <h3>GraphQL</h3>
            </li>
            <li>
              <h3>PHP/Laravel</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 h-[100vh] pb-60 background-css backdrop-blur-md"></div>
    </div>
  );
}
