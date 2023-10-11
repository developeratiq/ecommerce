import React from 'react'

function Category({ selectCategory }) {
    return (
        <>
            <h3>Category</h3>
            <div className="types-items ml-2 mt-3  flex flex-col">
                <section>
                    <input name='çategory' type='radio' id='radioall' value={''} onChange={selectCategory} />
                    <label htmlFor="radioall">All</label>
                </section>

                <section>
                    <input name='çategory' type='radio' id='radiomobile' value={'mobile'} onChange={selectCategory} />
                    <label htmlFor="radiomobile">Mobile</label>
                </section>

                <section>
                    <input name='çategory' type='radio' id='radiolaptop' value={'laptop'} onChange={selectCategory} />
                    <label htmlFor="radiolaptop">Laptop</label>
                </section>
                <section>
                    <input name='çategory' type='radio' id='radiowatch' value={'watch'} onChange={selectCategory} />
                    <label htmlFor="radiowatch">Watch</label>
                </section>
            </div>

        </>
    )
}

export default Category