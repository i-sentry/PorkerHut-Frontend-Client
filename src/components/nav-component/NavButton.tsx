import React from 'react'
import { useNavigate } from 'react-router-dom';

interface IProps{
    text: string,
    className: string,
    path:string
}

const NavButton = ({ text, className, path }: IProps) => {
const navigate = useNavigate()
  return <button onClick={()=>navigate(path)} className={className}>{text}</button>;
};

export default NavButton