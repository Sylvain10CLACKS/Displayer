

const Button = ({btnType ,onClick ,btnTxt ,bgcolor}) => {
  return (
    <button type={btnType} className={`text-white ${bgcolor} rounded-lg`} onClick={onClick}>
        {btnTxt}
        </button>
  )
}

export default Button
