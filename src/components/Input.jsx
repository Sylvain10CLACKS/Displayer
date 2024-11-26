const Input = ({inputType, placeholderTxt}) => {
  return (
    <div>
        <input type={inputType} className="border-black bg-slate-400 outline-none rounded-md " id="input" placeholder={placeholderTxt}/>
    </div>
  )
}

export default Input

