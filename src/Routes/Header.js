import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { filterdata } from '../STORE/Slicve'
import { Link } from 'react-router-dom'
import { Logout } from '../STORE/cartslice'


function Header() {

    const [open, setopen] = useState(false)
    const dispatch = useDispatch()
    const [Data, setData] = useState([])
    const [querry, setquerry] = useState()

    const authentication = useSelector((state) => state.cart.authentication);
    console.log(authentication);
    const countItem = useSelector((state) => state.cart.cartitems);
    console.log(countItem)

    const handelsearch = (e) => {
        setquerry(e.target.value)
        axios.get(`http://localhost:5780/search?q=${querry}`).then(response => { setData(response.data) })
        setopen(true)
        if (e.target.value < 1) {
            setopen(false)
        }
    }

    useEffect(() => {
        dispatch(filterdata(Data))
    },)


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // const closenavigate = () => {
    //     setIsOpen(false);
    // }

    //const location = useLocation()
    // console.log(location)

    return (
        <div className='header'>
            <div className='hambuger-title'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hqScikJMr1Pdt46RnZ06F-YD3E30kwq54Q&usqp=CAU' alt='#' className='logo'></img>
                <input placeholder='Search Products' className='search-item' onChange={handelsearch} />
                <p className='searchicon'><i class="fa-solid fa-magnifying-glass"></i></p>

                <div className='hampburgerr' onClick={toggleMenu}>  <i class="fa-solid fa-bars"></i></div>
                <div className='mobileNavbardiv'>
                    <ul className={(isOpen) ? "mobileNav" : "hidenav"} >

                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li >
                        <li><Link to="/Mobile" onClick={toggleMenu}>Mobile</Link></li >
                        <li><Link to="/Clothes" onClick={toggleMenu}>Clothes</Link></li >
                        <li><Link to="/Electronics" onClick={toggleMenu}>Electronics</Link></li >
                        <li><Link to="/HealthCare" onClick={toggleMenu}>HealthCare</Link></li >

                    </ul>

                </div>
                <div className={(isOpen) ? "authenticationMobile" : 'authentication'}>

                    <div className='authMobile'>
                        <span className='user'><i class="fa-solid fa-user"></i></span>
                        <span className='counting'>{countItem.length}</span>
                        <Link className='cart-icon' to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
                    </div>
                    <div className='user-fill'>

                        {authentication ? <Link onClick={() => dispatch(Logout())}> Log Out </Link> : <>
                            <Link to="/signup">signup</Link>
                            <Link to="/login">Login</Link>
                        </>}
                    </div>

                    {/* {location.state.id} */}
                </div>
            </div>
            {
                open ? <div className='search-main'>
                    <button className='crossbtn'><i class="fa-solid fa-x"></i></button>
                    {

                        Data?.map(item => {
                            return (
                                <div className='search-detail' key={item.id}>

                                    <div className='search-detail2'>
                                        <img src={item.images[0]} alt='productimg' className={`search-img`}></img>

                                        <span><i class="fa-solid fa-indian-rupee-sign"></i>{item.Dprice}</span>
                                        <span>{item.rating}<i class="fa-sharp fa-solid fa-star"></i></span>
                                        <button>Details</button>

                                    </div>
                                    <hr></hr>


                                </div>
                            )
                        })
                    }
                </div>
                    : ""
            }
        </div>
    )
}



export default Header
