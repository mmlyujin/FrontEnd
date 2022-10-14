
// function Albums({albums}) { albums
function Albums(props) {
  return (
    <div className="albums-container">
      {
        props.albums.map((album, key)=> {
          return(
            <div className="album" key={key}>
              <img src={"https://via.placeholder.com/168x118.png"} alt="" />
              <h5>{album.id}</h5>
              <h5>{album.title}</h5>
            </div>
          );
        })
      }
    </div>
  )
}

export default Albums