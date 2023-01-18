
export const HeaderComp = ({changeSection}) => {
  
  return (
    <header>
      <h1>ClickUp Incidents</h1>
        <nav>
            <button onClick={ () => changeSection('members') }>People</button>
            <button onClick={ () => changeSection('filters') }>Filters</button>
        </nav>
    </header>
  )
}
