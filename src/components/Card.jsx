const Card = ({ title, description, hand, reverse }) => {
  let classes = reverse ? "flex xl:flex-row-reverse md:flex-row-reverse flex-col-reverse items-center gap-8" : "flex xl:flex-row md:flex-row flex-col-reverse items-center gap-8";
  let image = hand ? {'--image': 'url("/img/hand.jpg")'} : {'--image': 'url("/img/spaceman.jpg")'};
  return ( 
    <div className={classes}>
        <div className="flex flex-col">
            <h3 className="font-unbounded font-bold text-white xl:text-4xl md:text-2xl text-xl">{ title }</h3>
            <span className="mt-8 font-spacegrotesk text-second xl:text-lg">{ description }</span>
        </div>
        <div style={image} className='bg-[image:var(--image)] bg-cover bg-center xl:w-[800px] md:w-[600px] w-full xl:h-80 md:h-64 h-32 rounded-xl sepia-[60%] hue-rotate-[200deg] saturate-[300%]'>
        </div> 
    </div>
  )
}

export default Card