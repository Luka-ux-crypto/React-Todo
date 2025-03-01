import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';

function TodosAction() {
  return (
    <>
      <Button title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button title="Clear Completed Todos">
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosAction;
