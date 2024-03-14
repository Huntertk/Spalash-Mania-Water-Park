import '../styles/policypage.scss'
import { v4 as uuidv4 } from 'uuid';
import logo from '../assets/images/logo.png'
import TermsAndCondtionList from '../components/TermsAndCondtionList'

 const termsandconditiondata = [
  {
      id: uuidv4(),
      title: "Limited License",
      list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
  },
  {
      id: uuidv4(),
      title: "Our Relationship",
      list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
  },
  {
      id: uuidv4(),
      title: "Legal Compliance:",
      list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
  },
  {
      id: uuidv4(),
      title: "Eligibility and Registration",
      list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
  },
  {
      id: uuidv4(),
      title: "DMCA Compliance",
      list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
  },
  {
      id: uuidv4(),
      title: "Intellectual Property",
      list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
  },
  {
      id: uuidv4(),
      title: "Linking",
      list:["You may link to our Website, following guidelines provided."]
  },
  {
      id: uuidv4(),
      title: "Links to Other Websites",
      list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
  },
  {
      id: uuidv4(),
      title: "Data Protection",
      list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
  },
  {
      id: uuidv4(),
      title: "Warranty Disclaimer",
      list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
  },
  {
      id: uuidv4(),
      title: "Limitation of Liability",
      list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
  },
  {
      id: uuidv4(),
      title: "Arbitration",
      list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
  },
]

const TermAndConditionPage = () => {
  return (
    <section className='companyPolicyMainContainer'>
        <img src={logo} alt="logo" />
        <h1 className='heading'>Terms and Conditions</h1>
        <div className="underline"></div>
        <p>Welcome to *Malaysia Experience *Management by Travelvago Sdn Bhd! These terms of use (the "Terms") outline the agreement between you and Malaysia Experience Management by Travelvago Sdn Bhd ("Travelvago") regarding the use of our website and associated mobile application (collectively referred to as the "Website"). Please carefully read and understand these Terms. By accessing and using our Website, you agree to be bound by these Terms.</p>
        <ul>
            <h3>Definitions</h3>
            <li>"We," "us," or "our" refers to the owner of the Website.</li>
            <li>A "Member" is an individual registered on our Website.</li>
            <li>A "Provider" is a business offering tours, activities, and travel-related services.
</li>
            <li>A "Profile" is information provided by a Member about their business or themselves.
</li>
            <li>A "User" includes Visitors or Members.</li>
            <li>A "Visitor" is someone browsing our Website.</li>
            <li>A "Customer" is a user purchasing goods/services through the Website.</li>
            <li>"Content" encompasses text, information, graphics, audio, video, and data on our Website.</li>
        </ul>
        <TermsAndCondtionList termsandconditiondata={termsandconditiondata} />
        <h1 className='heading'>General Terms</h1>
        <div className="underline"></div>
        <p>These Terms shall be treated as though they were executed and performed in Malaysia and shall be governed by and construed in accordance with the laws of Malaysia, without regard to conflict of law principles. In addition, you agree to submit to the personal jurisdiction and venue of the courts in Malaysia. Any cause of action by you with respect to our Website must be instituted within one (1) year after the cause of action arose or be forever waived and barred. Should any part of our Legal Terms be held invalid or unenforceable, that portion shall be construed consistent with applicable law, and the remaining portions shall remain in full force and effect. To the extent that any Content on our Website conflicts or is inconsistent with our Legal Terms, our Legal Terms shall take precedence. Our failure to enforce any provision of our Legal Terms shall not be deemed a waiver of such provision nor of the right to enforce such provision.</p>
    </section>
  )
}

export default TermAndConditionPage