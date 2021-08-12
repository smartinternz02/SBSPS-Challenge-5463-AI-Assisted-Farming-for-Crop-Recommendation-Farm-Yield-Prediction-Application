import React from 'react'
import footer from '../assets/images/footer.svg'
class Footer extends React.Component {
    render() {
        return (
            <div className="w-full bg-red-500 max-h-1/3">
                <img src={footer} alt="" />
            </div>
        )
    }
}
export default Footer;