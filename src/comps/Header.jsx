import { useNavigate } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export default function Header() {
  const navi = useNavigate();
  const {toggle, handletheme} = useContext(AppContext)
    return (
      <div className='Header' style={{backgroundColor: toggle?"#e2e1e1":"#242424", boxShadow:toggle?"0px 2px 5px #242424":"0px 2px 5px rgba(234, 234, 234, 0.5)"}}>
        <h1 onClick={()=>navi('/')} style={{cursor:"pointer", color:toggle?"#242424":"#e2e1e1"}} >Rahul Blogs</h1>

        <button onClick={()=>handletheme()} >{toggle?<BsFillSunFill/>:<BsFillMoonStarsFill/>}</button>
      </div>
    );
  }
  