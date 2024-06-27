import profileImg from './assets/profile-thumbnail.png';

function App() {
  return (
    <div className='grid min-h-screen'>
      <div className='bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] pt-[12.5rem] px-4'>

        {/* Testimonial Card */}
        <div className='max-w-[340px] bg-white shadow-md border-neutral-200 rounded-lg m-auto p-6'>
          <div className='flex gap-4'>
            <img className='size-12 overflow-hidden rounded-full' src={profileImg}/>

            <div>
              <h1 className='text-lg font-semibold'>Sarah Dole</h1>
              <p className='text-sm text-neutral-600'>@sarahdole</p>
            </div>
          </div>

          <p className='text-base shadow-sm mt-4'>
            I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!
          </p>
        </div>

      </div>
    </div>
  )
}

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

export default App
