import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/booktype-two">Ramadan Special Promo!</Link>
        <Link to="/admin/manage-dates/booktype-one">Tickets to SplashMania Waterpark at Gamuda Cove Selangor</Link>
      </div>
    </section>
  )
}

export default ManageDates