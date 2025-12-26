import SectionHeader from './SectionHeade'
import { FcRules, } from "react-icons/fc";
import { programs } from '../data'
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";


const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHeader icon={<FcRules />} title="Core CyberSecurity Fundamentals"/>
        
        {/* Moved programs__wrapper inside container for proper layout */}
        <div className="programs__wrapper">
          {
            programs.map(({id, icon, title, info, path}) => ( // Fixed: replaced curly braces with parentheses for implicit return
              <Card className="programs__program" key={id}>
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

export default Programs