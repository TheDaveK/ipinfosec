import SectionHeader from './SectionHeade'
import { FcSurvey } from "react-icons/fc";
import { mainservice } from '../data'
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";


const Mainservice = () => {
  return (
    <section className="Service">
      <div className="container Service__container">
        <SectionHeader icon={<FcSurvey />} title="IPINFOSEC – Service Plans"/>
        
        {/* Moved programs__wrapper inside container for proper layout */}
        <div className="Service__wrapper">
          {
            mainservice.map(({id, icon, title, info, path}) => ( // Fixed: replaced curly braces with parentheses for implicit return
              <Card className="Service__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <AiFillCaretRight/>
                </Link>
              </Card>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Mainservice