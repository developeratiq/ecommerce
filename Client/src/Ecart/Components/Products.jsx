import React, { useEffect } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from 'axios';
import { useState } from 'react';
import { data } from 'jquery';
import AddToCart from './AddToCart';
import { add } from '../Redux/ProductSlice'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Search from './Search';
import SelectInput from './SelectInput';
import FormatPrice from './FormatPrice';

import { BsGrid, BsListTask, BsSearch, BsFilterCircleFill } from 'react-icons/bs';
import GridView from './GridView';
import ListView from './ListView';
import Cards from './Cards';
import Category from './subComp/Category';
import { Card } from 'react-bootstrap';
import AllProd from './subComp/AllProd';
function Products() {
  // const user = localStorage.getItem('name')

  const dispatch = useDispatch()
  const [datas, setDatas] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [showcart, setShowCart] = useState(false)
  const [searchData, setSearchData] = useState('')
const[sortValue,setSortValue]=useState()

  const [select, setSelect] = useState(null)
  const [query, setQuery] = useState('')

  const [listView, setListView] = useState(false)


  // ---------------------fetching products---------------------------------------

  const url = `https://api.pujakaitem.com/api/products`

  const fetchProducts = () => {
    axios.get(url).then((data) => setDatas(data.data))
      .catch((error) => console.log(error))
  }


  useEffect(() => {
    localStorage.setItem('name','md atiq')

    fetchProducts();

  }, [])

  // -------------logics of price min and max-------------------
  
  const man=datas.map((x)=>Number(x.price) ) 
  const cArray =[...man]
  const maxNumber =Math.max(...cArray)
  const minNumber =Math.min(...cArray)
  
  const _maxNumber =<FormatPrice price={maxNumber}/>
  const _minNumber =<FormatPrice price={minNumber}/>
  const[rangeprice,setRangePrice]=useState(0)
  // -------------logics of price min and max Ends-------------------


  //  localStorage.setItem('name','mdatiq')



  // --------------------query forInput filter---------------------------------

  const handleInputChange = (event) => {
    // console.log(event.taget.value)
    setQuery(event.target.value)
  }
  const filteredItems = datas.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );



  // const filteredItems = datas.filter((product)=>product.name.toLowerCase().indexOf(query.toLowerCase()!== -1))
 

  // ------------------Radio filter ~------------------------

const handleChange =(e)=>  {
 
setSelect(e.target.value)
}


// ------------------all filter--------------------====================

function fiteredData(prodcuts, selected, query,pricerange){
let filteredProduts =prodcuts


//filtering input items
if(query){
 
  filteredProduts=filteredItems
 
}

// console.log(query)
// selected 

if(selected ||pricerange){
 
  filteredProduts = filteredProduts.filter(({category ,company,price})=>{
return category===selected ||price<=pricerange ||company===selected
  }
  )
  
  // console.log(filteredProduts)
}



return filteredProduts.map(({category,name,price ,id ,image,description})=>{
 
  return <Cards
  key={Math.random()}
   name={name}
   price={price}
   image={image}
   id={id}
   desc={description}
   category={category}
   listView={listView}
  
  />
})


}


    const result = fiteredData(datas,select,query,rangeprice)



    useEffect(() => {
      if (select == 'low to high') {
        const price = datas.sort((a, b) => a.price - b.price)

        setDatas([...price])
      } if (select == 'high to low') {
        const price = datas.sort((a, b) => b.price - a.price)

        setDatas([...price])
      }
      if (select == 'a-z') {
        const name = datas.sort((a, b) => a.name.localeCompare(b.name))
        // console.log(name)
        setDatas([...name])
      } if (select == 'z-a') {
        const name = datas.sort((a, b) => b.name.localeCompare(a.name))
        // console.log(name)
        setDatas([...name])
      }

      
    }, [select])


 






  const handleSelect = (e) => {
    const selectedValue =e.target.value
    setSortValue(selectedValue)
   
   
  }

 
  
useEffect(()=>{
 
  if(sortValue=='high to low'){
    const price =datas.sort((a,b)=>b.price-a.price)
    
    setDatas([...price])
  }
  if(sortValue=='low to high'){
    const price =datas.sort((a,b)=>a.price-b.price)

    setDatas([...price])
  }
  if(sortValue=='a-z'){
    const name =datas.sort((a,b)=> a.name.localeCompare(b.name))
   setDatas([...name])
  }if(sortValue=='z-a'){
    const name =datas.sort((a,b)=> b.name.localeCompare(a.name))
   setDatas([...name])
  }
  
},[sortValue])

const comp =datas.map((x)=>x.company)
const uniqueCompany= [...new Set(comp)]

  
const[filtersection,setfiltersection]=useState(true)



  return (
    <>
    <div  className='filtericons text-xl  ' style={{width:"30px"}} 
    onClick={()=>setfiltersection(pre=>!pre)}
    >
    <BsFilterCircleFill className=''></BsFilterCircleFill>
  </div>
      <div className="container ">

       
        <div className="row">
          
          <div className="col-lg-3 col-md-lg-3 filterpart">
            <div className="search">

              <input className='rounded-sm search_box' type="text" placeholder='SEARCH'
                onChange={(e)=>setQuery(e.target.value)}
              />
              <i><BsSearch /></i>
            </div>

           <div className= {filtersection?"belowsearch":"belowsearch_go"}>
           <div className="types mt-16">
              <Category selectCategory={handleChange} />
            </div>

            <div className="sortbycompany  mt-3">
              <h3>Company</h3>
              <select className='bg-transparent p-1 px-2 capitalize mt-3 sort1 '  name="sort" id="sort" form="sortform"
              onChange={(e)=>setSelect(e.target.value)}
              >
              {uniqueCompany
 &&uniqueCompany.map((x)=> <option className='sort1opttion'  key={x} value={x}>{x}</option> )}
              </select>
            </div>
            <div className="sortbyrange  mt-3">
              <h3>Price</h3>
              <label htmlFor="price"><FormatPrice price={rangeprice}/></label>
              <br />
              <input type="range" id="slider"
                min={minNumber} max={maxNumber}  value={rangeprice} onChange={(e)=>setRangePrice(e.target.value)} />
            </div>
           <button className=' filterbtn shadow-lg bg-[#4859CA] rounded-md px-2 py-1 mb-2 capitalize'
           
           onClick={()=>setSelect(null)}
           >clear Filter</button>
           </div>
          </div>









          <div className="col-lg-9 col-md-lg-9 ">
            <div className="head mb-5 flex justify-between">
              <div className="view d-flex gap-3">
                <i className={`grid text-lg ${listView ? "" : "activeView"}`}


                  onClick={(() => setListView(pre => !pre))}
                >
                  <BsGrid />
                </i>
                <i className={`grid text-lg ${listView ? "activeView" : ""}`}
                  onClick={(() => setListView(pre => !pre))}
                >
                  <BsListTask />
                </i>
              </div>

              <div className="totalprod">
                {result.length} total products
              </div>
              <div className="sorting bg-transparent">

                <select className='bg-transparent p-1 px-2 capitalize ' style={{ border: "1px solid grey" }} name="sort" id="sort" form="sortform"
                  onChange={(e)=>setSortValue(e.target.value)}
                >
                  <option value="a-z" >Name(A-Z)</option>
                  <option value="z-a">Name(Z-A)</option>
                  <option value="low to high">Price(low to high)</option>
                  <option value="high to low">Price(high to low)</option>
                  {/* <option value="audi">Audi</option> */}
                </select>

              </div>
            </div>
            <div className="allproducts   h-[80vh] overflow-scroll mt-[-4vh]">

            <AllProd product={result}/>
            </div>

            



          </div>
        </div>
      </div>

    </>
  )
}

export default Products