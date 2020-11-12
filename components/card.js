const Card = ({ image, title, description }) => {
  return (
    <div className="card-container">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
