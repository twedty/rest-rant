const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST Rant</h1>
                <a href='/places'>Come see our places</a>
                <div>
                    <img src="https://placekitten.com/200/300" alt="Cat" />
                    <div>
                        Cat by <a href="placekitten.com">placekitten</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
