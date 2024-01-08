const Button = ( { text, borderless }) => {
  return ( !borderless ? 
    <button className="border-solid border-[1px] rounded-lg border-white xl:px-8 px-4 py-4 xl:text-xl md:text-lg font-spacegrotesk text-white transition-all hover:bg-white hover:text-main">
    {text}
    </button>
    :
    <button className="xl:px-8 py-4 xl:text-xl md:text-lg font-spacegrotesk text-white underline transition-all hover:scale-110">{text}</button>
  )
}

export default Button