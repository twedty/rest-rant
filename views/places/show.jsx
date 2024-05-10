const React = require('react')
const Def = require('../default')

function show ({place, id}) {
    let comments = (
        <h3 className='inactive'>
            No Comments Yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                    <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={place.pic} alt={place.name} />
                        <h3>
                            Located in {place.city}, {place.state}
                        </h3>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Rating</h2>
                        <h3>
                            Not Rated
                        </h3>
                        <h2>
                            Description
                        </h2>
                        <h3>
                            {place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {place.cuisines}
                        </h4>
                        <a href={`/places/${id}/edit`} className="btn btn-warning">Edit</a>
                        <form method="POST" action={`/places/${id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form> 
                    </div>
                    <div className='col-sm-12'>
                        <h2>Comments</h2>
                        <h3>No Comments</h3>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show

