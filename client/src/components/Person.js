
function Person({person}) {
  return (
    <div>
        {
            person.map((p, key)=> {
                const {id, name, age, image} = p; //const {사용할변수명} = 객체명
                return(
                    <>
                        <div key={key}>
                            <p><img src={image} alt={name} /></p>
                            <h4>{name}</h4>
                            <p>{age}</p>
                        </div>
                    </>
                );
            })
        }
    </div>
  );

}

export default Person