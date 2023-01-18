import { ThreeDots } from "react-loader-spinner"

export const LoadingWhite = () => {
  return (
    <div className='loading'>
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#ffffff" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
     </div>
  )
}
