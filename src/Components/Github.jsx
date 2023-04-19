import React from 'react'

export default function Github(props) {
    return (
        <div className='container' style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>

            <h1>Conttribute</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo eius ea molestiae aut earum odit eligendi impedit sed magni vitae iste, pariatur dolores facilis, nam quasi fugiat reiciendis aliquid.</h3>
            <a className="Github" href="https://github.com/VinitaRaikwar/TextUtils-dsdc">Click Here</a>
        </div>
    )
}
