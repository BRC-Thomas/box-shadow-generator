import { useState, useEffect } from "react"
import chevron from '../../assets/Chevron.svg'
import ShadowColorPicker from "./ShadowColorPicker"
import ShadowRange from "./ShadowRange"

export default function Shadow({panelNumber, shadow}) {
  const [toggleShadow, setToggleShadow] = useState(false)

  useEffect(() => {
    if(panelNumber === 1){
      setToggleShadow(true)
    }
  }, [])

  const shadowInputs = shadow.inputs.map((input, index) => {
    if(input.type === "range") {
      return <ShadowRange 
        key={index} 
        inputData={shadow.inputs[index]}
        shadowID={shadow.id}    
      />
    }
    else if(input.type === "color") {
      return <ShadowColorPicker 
        key={index} 
        inputData={shadow.inputs[index]}
        shadowID={shadow.id}
      />
    }
  })

  return (
    <li className="bg-gray-50 border-b border-gray-300">
      <button 
        onClick={() => setToggleShadow(!toggleShadow)}
        className="w-full px-6 py-4 flex justfify-between items-center hover:bg-gray-100"  
      >
        <span>Shadow {panelNumber}</span>
        <img 
          src={chevron} 
          alt="" 
          className="font-bold w-5"
          style={{transform: `${toggleShadow ? 'rotate(90deg)' : 'rotate(0deg)'}`}}
          />
      </button>
      {toggleShadow && <>
        <div className="flex items-end px-6 py-4">
          {/* checkbox */}
          {/* checkbox */}
          <button className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
            Remove
          </button>
        </div>
        <div className="px-6 py-4">
          {shadowInputs}
        </div>
      </>}
    </li>
  )
}
