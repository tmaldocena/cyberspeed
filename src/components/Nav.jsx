export const Nav = () => {
  return (
    <header className='py-4 bg-second/10 backdrop-blur border-solid border-b-2 border-white/50 text-white'>
        <nav className="flex xl:mx-64 mx-8 justify-between max-sm:justify-center items-center">
            <div className='flex xl:flex-row md:flex-row flex-col items-center gap-4'>
                <img className="xl:h-12 xl:w-12 h-9 w-9" src="img/logo.png" alt="logo" />
                <h1 className='xl:text-xl texl-lg font-unbounded font-bold'>CyberSpeed Motors</h1>
            </div>
            <div className='flex gap-16 items-center max-sm:hidden'>
                <a href="/" className="xl:text-xl text-lg font-spacegrotesk">Specs</a>
                <a href="/" className="xl:text-lg text-lg font-spacegrotesk px-8 py-2 rounded-md border-solid border-main border-2 hover:bg-second transition-all duration-500 hover:text-main ">
                Buy Now
                </a>
            </div>
      </nav>
    </header>
  )
}
