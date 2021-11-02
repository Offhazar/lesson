import './Card.css';
import Block2 from '../block2/Block2';
import Block3 from '../block3/Block3';
// import './Card.css';

function Card(props) {
  return (
    <Block2 className="Block2">
      <Block3 />
      <Block3 />
      <Block3 />
    </Block2>
  );
}

export default Card;
