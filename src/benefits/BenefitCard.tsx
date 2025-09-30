
interface Props {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

function BenefitCard (props: Props) {
  return (
    <div className={'benefit-card' + (props.className ? ` ${props.className}` : '')}>
      <img src={props.imageSrc} alt={props.imageAlt} />
      <div className='benefit-card__text'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default BenefitCard;