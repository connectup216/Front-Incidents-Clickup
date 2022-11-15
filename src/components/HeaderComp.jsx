
export const HeaderComp = ({changeSection}) => {
  
  return (
    <header>
      <h3>ClickUp API Intranet</h3>
        <nav>
            <button onClick={ () => changeSection('members') }>People</button>
            <button onClick={ () => changeSection('filters') }>Filters</button>
        </nav>
    </header>
  )
}
