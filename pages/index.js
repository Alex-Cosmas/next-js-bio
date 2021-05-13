import Head from "next/head"

export default () => (


  <div className="hero bg-gray-900 h-3">

    <Head>
      <title>Alex Cosmas: Product Designer + Full Stack Web Developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="py-1 bg-primary"></div>
    <div className="container mx-auto px-4 md:px-32">
      <div className="flex mt-8 space-y-5 justify-between">
        <div className="w-full md:w-3/5">
          <h1 className="font-bold text-2xl my-5">Hello! My name is Alex Cosmas</h1>

         
          <div className="text-gray-600 mb-3 text-sm">
           I am product designer/frontend developer based born and raised in Nairobi, Kenya. I am a curious soul who loves to think, research and solve problems through design and code. 

          </div>

          <h1 className="text-gray-600 mb-3 font-medium">
            Where am I currently working? 
          </h1>

          <div className="text-gray-600 mb-3 text-sm">
            I am at Sokoplace Group as a contracted consultant refactoring the exising designs and building internal tools. I as well manage my own Consultancy WabiSabi Technologies.
          </div>

          <h1 className="text-gray-600 mb-3 font-medium">
           Skills & Tools
          </h1>

          <div className="text-gray-600 mb-3 text-sm">
            My day to day tools and languages includes: 
              
              <strong>
                <span>Old Fashioned Pen and Paper(Occasionally Sticky Notes & Whiteboard), </span>
              </strong>

              <strong>
                <span>InVision,</span>
              </strong>

              <strong>
                <span>Whimiscal,</span>
              </strong>

              <strong>
                <span>Illustrator,</span>
              </strong>

              <strong>
                <span>Figma,</span>
              </strong>

              <strong>
                <span>Git</span>
              </strong>

               <strong>
                <span>Notion</span>
              </strong>

              
          </div>

          <h1 className="text-gray-600 mb-3 font-medium">
           Skills & Tools
          </h1>

          <div className="text-gray-600 mb-3 text-sm">
          
           Languages & Technologies: 
             <strong>
                <span>Nuxt / React / NextJS, TailwindCSS, Apollo, GraphQL</span>
              </strong>

          </div>

          <h1 className="text-gray-600 mb-3 font-medium">
           Deployment
          </h1>

          <div className="text-gray-600 mb-3 text-sm">
           I have experience working with Docker, Heroku, Digital Ocean. Currently, I am working with Vercel/Netlify and on occasion I switch back. 
          </div>

          <h1 className="text-gray-600 mb-3 font-medium">
           Novice
          </h1>

          <div className="text-gray-600 mb-3 text-sm">
          Currently experimenting on Typescript, Ruby on Rails and Elixir/Phoenix/Live view. 
          </div>

          <p className="text-gray-600 mb-3 text-sm">
            You can reach me through the contacts below. <strong>I am open to new opportunities. </strong>
          </p>

        </div>
        <div className="hidden md:inline-block">
          <img
            src="https://res.cloudinary.com/alexoc/image/upload/v1559398286/Alex%20Cosmas%20Otieno.jpg" alt=""
            className="rounded-full w-32 h-32 object-cover invisible md:visible" />
        </div>
      </div>

      <h2 className="font-bold text-2xl mt-8 mb-3">Featured Projects</h2>


      <div className="grid sm:grid-cols-3  grid-cols-1 gap-3">

        <a href="" target="_blank"
          className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-lg"
          style={{ filter: 'grayscale(0%)', transform: 'none', opacity: 1 }}>
          <div className="h-32 w-full flex justify-center items-center transition-all duration-200 transform"
            style={{ backgroundColor: '#FFF0D3' }}>

            <svg className=" w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2">
              </path>
            </svg>
          </div>
          <div className=" p-4">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800">Safety Administrate</h3>

              <img className="text-red-200 ml-auto opacity-0 transform duration-200 group-hover:opacity-100 h-3"
                src="/" />


            </div>
            <div className="mt-3 text-sm text-gray-700">Safety Administrate is an API based enterprise training
            management web application manages delegate bookings and automates checkouts, invoices and receipts </div>
            <div className="mt-2">
              <span
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">Case Study</span>

            </div>
          </div>
        </a>

        {/* Component 2 */}

        <a href="" target="_blank"
          className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-lg"
          style={{ filter: 'grayscale(0%)', transform: 'none', opacity: 1 }}>
          <div className="h-32 w-full flex justify-center items-center transition-all duration-200 transform"
            style={{ backgroundColor: '#FFF0D3' }}>

            <svg className=" w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2">
              </path>
            </svg>
          </div>
          <div className=" p-4">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800">Kiota</h3>

              <img className="text-red-200 ml-auto opacity-0 transform duration-200 group-hover:opacity-100 h-3"
                src="/" />


            </div>
            <div className="mt-3 text-sm text-gray-700">Kiota is a multi-tenant application that allows
                        users to manage receipts and invoices from one dashboard without switching accounts.</div>
            <div className="mt-2">
              <span
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">Ongoing Project</span>

            </div>
          </div>
        </a>

        {/* Component 3 */}

        <a href="" target="_blank"
          className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-lg"
          style={{ filter: 'grayscale(0%)', transform: 'none', opacity: 1 }}>
          <div className="h-32 w-full flex justify-center items-center transition-all duration-200 transform"
            style={{ backgroundColor: '#FFF0D3' }}>

            <svg className=" w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2">
              </path>
            </svg>
          </div>
          <div className=" p-4">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800">Mtaani Online</h3>

              <img className="text-red-200 ml-auto opacity-0 transform duration-200 group-hover:opacity-100 h-3"
                src="/" />


            </div>
            <div className="mt-3 text-sm text-gray-700">Mtaani Online is an niched advertising platform built to
            focus on individuals and small business within the same locale helping them promote their
                        products and services.</div>
            <div className="mt-2">
              <span
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">Ongoing Project</span>

            </div>
          </div>
        </a>

      </div>

      {/* Contact */}

      <div className="flex flex-col md:flex-row mt-10">

        <div className="text-base text-gray-900 w-3/5">
          <h2 className="font-bold text-2xl mt-8 mb-3">Contact</h2>
          <p classNameName="font-sm text-gray-700">
            If you are interested in working with me, just drop me a short mail at:
          </p>
          <a href="mailto:cosmasalex@gmail.com">
            <span>
              <b>cosmasalex365@gmail.com</b>
            </span>
          </a>

        </div>
        <div className="text-base text-gray-900 w-2/5">
          <h2 className="font-bold text-2xl mt-8 mb-3">Alternative Channels</h2>
          <div className="mt-2 text-gray-600 mb-1 font-medium flex">

            <a target="_blank" href="#">LinkedIn</a><span className="font-bold mx-2">·</span>
            <a target="_blank" href="#">Resume</a><span className="font-bold mx-2">·</span>
            <a target="_blank" href="#">Twitter</a>

          </div>
        </div>
      </div>

      <div className="mt-8 mb-8">

      </div>

    </div>
    <div className="py-1 bg-primary"></div>


  </div>






);
