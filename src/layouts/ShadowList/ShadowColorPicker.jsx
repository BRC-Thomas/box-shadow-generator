import { useDispatch } from "react-redux"
import { updateShadowValue } from "../../features/shadows"
export default function ShadowColorPicker({inputData, shadowID}) {

  const dispatch = useDispatch()

  function handleInputs(e){
    dispatch(updateShadowValue({
      inputNumber: inputData.inputNumber,
      value: e.target.value,
      shadowID
    }))
  }

  return (
    <div className="mt-3">
    <p>{inputData.name}</p>
    <div className="flex mt-2">
      <input 
        type="text"
        className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"  
        value={inputData.value}
        onChange={handleInputs}
      />
      <input 
        type="color"
        className="cursor-pointer h-10"
        value={inputData.value}
        onChange={handleInputs}
      />
    </div>
  </div>
  )
}
