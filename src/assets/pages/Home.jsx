import { useState } from "react"
import Button from "../../components/Button"

const Home = () => {
  const [name, setName] = useState("Type in your name");
  const [nameValue, setNameValue] = useState("");

  const handleInputChange = (event) => {
    setNameValue(event.target.value)
  }

  const handleClear = () => {

    document.getElementById('para').innerHTML = "Type in your name"
    document.getElementById('input').value = ""
  }

  const handleSubmit = () => {
    setName(nameValue)
  }

  return (
    <main className='w-full  my-10'>
      <div className='w-[500px] mx-auto bg-slate-300  p-10'>
        <p className='text-center' id="para">{name}</p>
        <input type="text" placeholder='Your names' className='bg-white w-[300px] px-4 rounded-lg text-center mx-[5rem]  my-0 ' onChange={handleInputChange} id="input" />
        <div className="p-4 flex gap-5" >
          <Button bgcolor={"bg-purple-700"} btnTxt={"Show name"} btnType={"submit"} onClick={handleSubmit} />
          <Button bgcolor={"bg-black"} btnTxt={"Cancel"} btnType={"reset"} onClick={handleClear} />
        </div>
      </div>
    </main>
  )
}

export default Home

