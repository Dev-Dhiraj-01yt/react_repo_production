import React from 'react'

function Gravience() {
  return (
    <div>
      <div class="relative mb-4">
    <textarea 
        id="floatingTextarea" 
        placeholder=" " 
        class="peer block w-full h-36 rounded-md border border-gray-300 bg-white px-3 pb-2 pt-6 text-base text-gray-900 outline-none transition-all duration-150 ease-in-out placeholder-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-500/25 resize-y"
    ></textarea>
    <label 
        for="floatingTextarea" 
        class="absolute left-0 top-0 h-full w-full pointer-events-none origin-[0_0] truncate px-3 py-4 text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-2 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:scale-85 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-blue-600"
    >
        Comments
    </label>
</div>

    </div>
  )
}

export default Gravience;
