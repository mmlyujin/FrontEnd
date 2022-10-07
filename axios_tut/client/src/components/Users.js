function Users({ products }) {
  return (
    <div className="container">
      <h1>Item Lists</h1>
      <div className="box-container">
        {products.map((p, key) => {
          //key : 내용을 감싸는 태그
          return (
            <div className="box" key={key}>
              <div className="img-container">
                <img src={p.thumbnail} alt={p.title} />
              </div>
              <div className="content-container">
                <h2>
                  {p.title} ({p.stock})
                </h2>
                <h4>
                  <del>600</del>
                  {p.price}
                </h4>
                <h4>{p.brand}</h4>
                <p>{p.description.substring(0, 40) + " ... "}</p>
                <p className="read">Read More</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
