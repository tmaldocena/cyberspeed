import { useState } from "react"

const Specs = () => {

    const [color, setColor] = useState('')
    return (
        <div className="bg-main xl:px-64 px-8 xl:py-28 py-20 w-full">
        <span className="font-spacegrotesk text-accent text-lg">Specs</span>
        <div className="flex xl:flex-row md:flex-row flex-col justify-between xl:gap-12 gap-8 mt-8">
            <div>
                <h4 className="text-accent text-xl font-unbounded font-bold mb-4">Performance</h4>
                <p className="text-white font-spacegrotesk mb-2">0-60 mph in 2.8 seconds</p>
                <p className="text-white font-spacegrotesk mb-2">320km/h top speed</p>
                <p className="text-white font-spacegrotesk mb-2">500kW motor power.</p>
            </div>
            <div>
                <h4 className="text-accent text-xl font-unbounded font-bold mb-4">Technology</h4>
                <p className="text-white font-spacegrotesk mb-2">Automatic driving: level 4 of autonomy</p>
                <p className="text-white font-spacegrotesk mb-2">UI with holographic screen</p>
                <p className="text-white font-spacegrotesk mb-2">5g connection inside the car</p>
            </div>
            <div>
                <h4 className="text-accent text-xl font-unbounded font-bold mb-4">Design</h4>
                <p className="text-white font-spacegrotesk mb-2">Aerodynamic bodywork</p>
                <p className="text-white font-spacegrotesk mb-2">Carbon fiber structure and integrated solar panels</p>
                <p className="text-white font-spacegrotesk mb-2">Dynamic LED lighting system that adapts to the environment and driving conditions</p>
            </div>
        </div>
        <h4 className="mt-8 font-spacegrotesk font-bold text-accent text-lg">Available colors:</h4>
        <div className="flex flex-row gap-2 my-4">
            <span className="inline-block h-8 w-8 rounded-full bg-accent transition-all hover:scale-125" onMouseOver={()=> setColor('Yellow Sun')}></span>
            <span className="inline-block h-8 w-8 rounded-full bg-second transition-all hover:scale-125" onMouseOver={()=> setColor('Blue Sky')}></span>
            <span className="inline-block h-8 w-8 rounded-full bg-black transition-all hover:scale-125" onMouseOver={()=> setColor('Black Night')}></span>
            <span className="inline-block h-8 w-8 rounded-full bg-white transition-all hover:scale-125" onMouseOver={()=> setColor('White Snow')}></span>
            <span className="inline-block h-8 w-8 rounded-full bg-slate-700 transition-all hover:scale-125" onMouseOver={()=> setColor('Dark Slate')}></span>
        </div>
        <span className="font-spacegrotesk font-bold text-white text-lg">{color}</span>
    </div>
    )
    }

export default Specs