const router = require('express').Router()
const places = require("../models/places")

let placesFormatted = data.places.map((place, index) => {
    return (
        <div className="col-sm-6">
            <h2>
                <a href={`/places/${index}`} >
                    {place.name}
                </a>
            </h2>
                <p className="text-center">
                {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} />
                <p className="text-center">
                Located in {place.city}, {place.state}
                </p>
        </div>
    )
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
        if (isNaN(id)) {
        res.render('error404')
        }
        else if (!places[id]) {
        res.render('error404')
        }
        else {
        res.render('places/show', { place: places[id], id })
        }
    })

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
        }
    else if (!places[id]) {
        res.render('error404')
        }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

module.exports = router