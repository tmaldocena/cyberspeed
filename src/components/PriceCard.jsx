const PriceCard = ({ title, price, list }) => {
  return (
    <div className=" bg-main/20 p-16 w-full rounded-xl h-[27rem] mt-16">
        <h4 className="text-accent font-spacegrotesk mb-8">{ title }</h4>
        <span className="text-white text-4xl font-bold font-unbounded">{ price }</span>
        <ul className="text-accent font-spacegrotesk my-8">
            <li className="my-2">✓ { list[0] }</li>
            <li className="my-2">✓ { list[1] }</li>
            <li className="my-2">✓ { list[2] }</li>
            <li className="my-2">✓ { list[3] }</li>
        </ul>
        <button className="w-full bg-accent mt-4 rounded-lg py-2 font-spacegrotesk font-bold transition-all hover:brightness-90">Pre-order Now</button>
    </div>
  )
}

export default PriceCard