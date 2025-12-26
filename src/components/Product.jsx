import Card from '../UI/Card'

const Product = ({ image, name, job, socials }) => {
  return (
    <Card className="product">
      <div className="product__img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="product__socials">
        {socials?.map(({ icon, link }, index) => (
          <a
            key={index}
            href={link} // Fixed template literal
            target="_blank"
            rel="noopener noreferrer" // Fixed typo
          >
            {icon}
          </a>
        ))}
      </div>
    </Card>
  )
}

export default Product