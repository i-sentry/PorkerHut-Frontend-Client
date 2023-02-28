import React, { ReactNode } from 'react'
import NavBar from '../nav-component/NavBar'
import Footer from '../footer-component/Footer'
interface IAppLayoutProps{
    children:ReactNode
}
const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <div>
      <NavBar />
          <div className="children">{children }</div>
      <Footer />
    </div>
  );
};

export default AppLayout