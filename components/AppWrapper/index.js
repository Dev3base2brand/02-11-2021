import Footer from 'components/Footer/Footer'
// import GlobalHeader from 'components/GlobalHeader/GlobalHeader';
import NavigationBar from 'components/Navbar/Navbar'
import React from 'react'

function AppWrapper({children}) {
    return (
        <div>
            <NavigationBar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default AppWrapper;
