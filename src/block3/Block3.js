import Button from '../UI/Button';
import H1 from '../UI/H1';
import Pteg from '../UI/Pteg';
import Div from '../UI/Div';
import './Block3.css';

function Block3() {
  return (
    <Div>
      <H1>Heading</H1>
      <Pteg>
        Lorem ipsum dolor sit ame consetetur adipsicing elit,sed do eiusmod
        tempor ut labore et dolore magna
      </Pteg>
      <div className="butto">
        <Button>view more</Button>
      </div>
    </Div>
  );
}

export default Block3;
