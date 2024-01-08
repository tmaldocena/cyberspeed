import Button from "../components/Button"

const Hero = () => {
  return (
    <div className="xl:mx-64 mx-8 xl:mt-36 mt-16 xl:gap-20 gap-4 xl:h-[80vh] h-[90vh]">
        <h1 className="font-unbounded font-bold xl:text-5xl md:text-2xl text-lg text-white">Unveiling the CyberSpeed Future Drive</h1>
        <div className="flex xl:gap-8 gap-4 py-16">
            <Button text='Know More' borderless></Button>
            <Button text='Pre-order Now'></Button>
        </div>
    </div>
  )
}

export default Hero