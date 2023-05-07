// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="container">
          {showLeftNavbar ? (
            <div className="left">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul className="list-items">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : (
            ' '
          )}

          {showContent ? (
            <div className="container">
              <h1 className="content">Content</h1>
              <p className="description">Lorem ipsum dolor sit,amel</p>
            </div>
          ) : (
            ' '
          )}
          {showRightNavbar ? (
            <div className="right">
              <h1 className="heading">Right Navbar</h1>
              <p className="para1">Ad 1</p>
              <p className="para1">Ad 2</p>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
