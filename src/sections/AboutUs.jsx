import Follow from "../components/Follow"

const AboutUs = () => {
  return (
    <div className="bg-main xl:px-64 px-8 xl:py-36 py-16">
        <div className="mb-8">
            <h1 className="font-unbounded xl:text-4xl text-2xl text-accent font-bold">CyberSpeed</h1>
        </div>
        <p className="text-white font-spacegrotesk xl:text-xl">Experience the future of automotive engineering with the CyberSpeed Future Drive. This marvel of technology surges ahead, leaving the rest in neon blue.</p>
        <Follow />
    </div>
  )
}

export default AboutUs