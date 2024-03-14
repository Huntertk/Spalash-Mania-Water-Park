import '../styles/termsandconditionlist.scss'

const TermsAndCondtionList = ({termsandconditiondata}) => {
    return (
        <div className="homeVisitorTipsMainContainer">
        {
          termsandconditiondata?.map((da, index) => (
            <div key={index}>
            <h1 >{da.title}</h1>
            <ul>
              {
                da.list.map((lis, i) => <li key={i}>{lis}</li>)
              }
            </ul>
            </div>
    
          ))
        }
    </div>
      )
}

export default TermsAndCondtionList