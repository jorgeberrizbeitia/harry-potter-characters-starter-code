function Characters() {
  return (
    <div className="characters-container">
      
      <div id="random">
        <h2>Harry Potter Characters</h2>
        <button>Find Random Character</button>

        <div className="card random-card">
          <h4>Random Character</h4>
          <h5>Name: _______ </h5>
          <p>Description: ________</p>

          <button>Add to Favourite</button>
          
        </div>

      </div>

      <div id="fav">

        <h2>Favourite Characters</h2>
        <div className="card fav-card">
          <h5>Name: _______ </h5>
          <p>Description: ________</p>

          <button>Remove from Fav</button>
        </div>

      </div>

    </div>
  )
}
export default Characters
