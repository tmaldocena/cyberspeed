const LeapNow = () => {
  return (
    <div className="bg-main xl:px-64 px-8 xl:py-28 py-20 w-full">
        <h2 className="xl:text-3xl md:text-2xl text-xl text-white font-bold font-unbounded xl:w-7/12 md:w-9/12 w-10/12">Imagine a realm where speed meets style where the future collides the present. Take a leap into the fast lane.</h2>
        <div className="flex gap-8 mt-8">
          <button className="bg-second shadow-md rounded-md border-main px-4 py-2 text-xl font-spacegrotesk font-bold transition-all hover:bg-second/50 hover:text-white">Leap Now</button>
          <button className="bg-accent rounded-md border-main px-4 py-2 text-xl font-spacegrotesk font-bold transition-all hover:bg-accent/90">FAQ</button>
        </div>
    </div>
  )
}

export default LeapNow