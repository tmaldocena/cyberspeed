const Follow = () => {
  return (
    <div className="mt-8">
        <h4 className="text-accent font-unbounded font-bold text-2xl">Follow</h4>
        <ul className="text-white font-spacegrotesk text-xl mt-2">
            <li className="border-solid border-b border-white/60 mb-2 py-2">
                <a href='#' className="transition-all hover:font-bold">Facebook</a>
            </li>
            <li className="border-solid border-b border-white/60 mb-2 py-2">
                <a href='#' className="transition-all hover:font-bold">Twitter</a>
            </li>
            <li className="border-solid border-b border-white/60 mb-2 py-2">
                <a href='#' className="transition-all hover:font-bold">X</a>
            </li>
            <li className="mb-2 py-2">
                <a href='#' className="transition-all hover:font-bold">LinkedIn</a>
            </li>
        </ul>
    </div>
  )
}

export default Follow