import { Disclosure } from '@headlessui/react'
import {FiChevronDown,FiChevronUp} from "react-icons/fi";

const PlaysFilter = (props) => {
  return (
    <>
    <Disclosure >
      {({ open }) => (
        <>
        <div className='bg-white rounded p-2'>
        <Disclosure.Button className="py-2 flex items-center gap-2 ">
            {open ? <FiChevronUp/> : <FiChevronDown/>}
            <span className={open ? "text-red-500" : "text-gray-700"}>{props.title}</span>

        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500 text-sm py-2">
         <div className='flex items-center flex-wrap gap-3'>
            {props.tags.map((tag) => (
                <>
                <div className='border-2 border-stone-200 px-2 py-1'>
                    <span className='text-red-500'>{tag}</span>
                </div>
                </>
            ))}
         </div>
        </Disclosure.Panel>
        </div>
        </>
      )}
    </Disclosure>
    </>
  )
}
export default PlaysFilter;