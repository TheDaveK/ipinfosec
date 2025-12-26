import image from '../images/values.png'; 
import SectionHeader from './SectionHeade' 
import { values } from '../data';
import Card from '../UI/Card';

import { LiaUserSecretSolid } from "react-icons/lia";
import { FaUserSecret } from "react-icons/fa";


const Values = () => {
  return (
    <section className='values'>
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={image} alt="Values" /> 
          </div>
        </div>
        <div className="values__right">
          <SectionHeader icon={<FaUserSecret />} title="Smart Protection for a Digital World" /> 
          <p>
            Through cutting-edge technology and expert services, we uncover, understand, and eliminate cyber threats across every corner of your enterprise.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => (
              <Card key={id} className="values__value"> 
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{desc}</small>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;