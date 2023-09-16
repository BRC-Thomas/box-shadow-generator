import { useSelector, useDispatch } from "react-redux"
import {addShadow} from "../../features/shadows"
import Shadow from "./Shadow"

export default function ShadowList() {
  const dispatch = useDispatch()
  const shadows = useSelector(state => state.shadows)

  return (
    <div className="">
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="font-bold text-lg">Customize Shadows</p>
        <button 
          onClick={() => dispatch(addShadow())}
          className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-4 focus:ring-offset-1 hover:bg-blue-700 text-white">Add a shadow
        </button>
      </div>
      <ul>
        {shadows.map((shadow, index) => (
          <Shadow 
            key={shadow.id}
            panelNumber={index + 1}
            shadow={shadow}
          />
        ))}
      </ul>
    </div>
  )
}
