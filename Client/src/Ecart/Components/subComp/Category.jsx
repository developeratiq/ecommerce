import React from 'react'

function Category({selectCategory}) {
    return (
        <>
            <h3>Category</h3>
            <div className="types-items ml-2 mt-3  flex flex-col">
              <section>
              <input name='all'type='radio' value={''} onChange={selectCategory }/>
               <label htmlFor="all">All</label>
              </section>

               <section>
               <input name='mobile' type='radio' value={'mobile'} onChange={selectCategory }/>
            <label htmlFor="hjh">Mobile</label>
               </section>

               <section>
               <input name='laptop' type='radio' value={'laptop'} onChange={selectCategory }/>
               <label htmlFor="jhg">Laptop</label>
               </section>
               <section>
               <input name='watch' type='radio' value={'watch'} onChange={selectCategory }/>
               <label htmlFor="bhjgv">Watch</label>
               </section>
            </div>

        </>
    )
}

export default Category