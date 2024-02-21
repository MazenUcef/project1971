import React from 'react'

const GenderCheckBox = ({onChechBoxChange , selectedGender}) => {
  return (
    <>
<div className='flex'>
  <div className='from-control'>
    <label className={`label gap-2 cursor-pointer ${selectedGender === "male"? "selected" : ""}`}>
      <span className='label-text'>Male</span>
      <input checked={selectedGender === "male"}
      onChange={()=>onChechBoxChange("male")}
      type='checkbox' className='checkbox border-slate-500'/>
    </label>
  </div>
  <div className='from-control'>
    <label className={`label gap-2 cursor-pointer ${selectedGender === "female"? "selected" : ""}`}>
      <span className='label-text'>Female</span>
      <input  checked={selectedGender === "female"}
      onChange={()=>onChechBoxChange("female")}
      type='checkbox' className='checkbox border-slate-500'/>
    </label>
  </div>
</div>
  </>
  )
}

export default GenderCheckBox
// STARTER CODE FOR THIS FILE
// const GenderCheckBox = () => {
//   return (
//     <>
// <div className='flex'>
//   <div className='from-control'>
//     <label className={`label gap-2 cursor-pointer`}>
//       <span className='label-text'>Male</span>
//       <input type='checkbox' className='checkbox border-slate-500'/>
//     </label>
//   </div>
//   <div className='from-control'>
//     <label className={`label gap-2 cursor-pointer`}>
//       <span className='label-text'>Female</span>
//       <input type='checkbox' className='checkbox border-slate-500'/>
//     </label>
//   </div>
// </div>
//   </>
//   )
// }