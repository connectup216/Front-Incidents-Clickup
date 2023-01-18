import { CirclesWithBar } from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className='loading'>
        <CirclesWithBar
            height="100"
            width="100"
            color="#6A4197"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='circles-with-bar-loading'
        />
        <h2>Receiving Data...</h2>
    </div>
  )
}
