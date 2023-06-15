import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const Lists = props => {
  const {details, onClear} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details
  const onDelete = () => {
    onClear(id)
  }
  return (
    <li className="li">
      <div className="list-container">
        <p className="time">{timeAccessed}</p>
        <div className="main-container">
          <div className="img-container">
            <img src={logoUrl} alt="domain logo" className="logo-media" />
            <div className="title-container">
              <p>{title}</p>
              <p>{domainUrl}</p>
            </div>
          </div>
          <button data-testid="delete" type="button" className="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="logo-delete"
              onClick={onDelete}
            />
          </button>
        </div>
      </div>
    </li>
  )
}

class RenderLists extends Component {
  state = {searchInput: '', modifiedInput: initialHistoryList}

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onClear = id => {
    const {modifiedInput} = this.state
    const updatedLists = modifiedInput.filter(each => each.id !== id)
    this.setState({modifiedInput: updatedLists})
  }

  render() {
    const {searchInput, modifiedInput} = this.state
    const updatedState = modifiedInput.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="search-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-logo"
              alt="search"
            />
            <div>
              <input
                type="search"
                className="input-container"
                placeholder="Search history"
                onChange={this.onChange}
                value={searchInput}
              />
            </div>
          </div>
        </div>
        <div className="bottom-container">
          {updatedState.length !== 0 ? (
            <div className="card">
              <ul>
                {updatedState.map(each => (
                  <Lists details={each} key={each.id} onClear={this.onClear} />
                ))}
              </ul>
            </div>
          ) : null}
          {updatedState.length === 0 ? (
            <p className="para">There is history no to show</p>
          ) : null}
        </div>
      </div>
    )
  }
}

// Replace your code here
const App = () => <RenderLists />

export default App
