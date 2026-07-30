

function Aspirantes({ listAspirantes }) {
  return (
    <>
      <section className="content">
        <h2>Aspirantes</h2>



		<article className="person-boxes">
        {
			listAspirantes.map((asp) => (
            <div key={asp.id} className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="box-avatar">
                <img src={asp.img} alt= {asp.name} />
              </div>
              <div className="box-bio">
                <h2 className="bio-name">{asp.name}</h2>
                <p className="bio-position">{asp.profesion}</p>
              </div>
              <div className="box-actions">
                <button>  
                  <i className="bi bi-star"></i>
                </button>
                <button>
                  <i className="bi bi-chat"></i>
                </button>
                <button>
                  <i className="bi bi-envelope"></i>
                </button>
              </div>
            </div>

			))
			
         

        }
		          </article>




      </section>
    </>
  );
}

export default Aspirantes;
