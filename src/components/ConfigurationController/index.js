// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="container">
          <h1 className="heading">Layout</h1>
          <ul className="items">
            <li className="item1">
              <label htmlFor="content">Content</label>
              <input
                type="checkbox"
                id="content"
                value="content"
                onChange={onToggleShowContent}
              />
            </li>
            <li className="item1">
              <label htmlFor="left">Left Navbar</label>
              <input
                type="checkbox"
                id="left"
                value="left"
                onChange={onToggleShowLeftNavbar}
              />
            </li>
            <li className="item1">
              <label htmlFor="right">Right Navbar</label>
              <input
                type="checkbox"
                id="right"
                value="right"
                onChange={onToggleShowRightNavbar}
              />
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
