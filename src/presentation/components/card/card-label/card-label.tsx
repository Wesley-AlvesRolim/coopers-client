import './card-label.css';

interface CardLabelProps {
  label: string;
}

const CardLabel = ({ label }: CardLabelProps): JSX.Element => {
  return <li className="card-label">{label}</li>;
};

export default CardLabel;
