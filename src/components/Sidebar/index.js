import React from "react";
import {SidebarContainer, 
    SidebarMenu, 
    SidebarLink,
     SidebarRoute, 
     SideBtnWrap, 
     Icon, 
     CloseIcon} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) =>{
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
           </Icon>
           <SidebarMenu>
            <SidebarLink to="/">Pizzas</SidebarLink>
            <SidebarLink to="/">Deserts</SidebarLink>
            <SidebarLink to="/">Full Course Menu</SidebarLink>
           </SidebarMenu>
           <SideBtnWrap>
            <SidebarRoute to="/">Place Order</SidebarRoute>
           </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar