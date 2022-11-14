
export const HeaderComp = ({changeSection}) => {
  
  return (
    <header>
        <nav>
            <button onClick={ () => changeSection('members') }>People</button>
            <button onClick={ () => changeSection('filters') }>Filters</button>
        </nav>
    </header>
  )
}
