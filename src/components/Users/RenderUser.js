import DelatModal from '../UI/DelatModal';

function RenderUser(props) {
  function onDelete() {
    props.onDelete(props.id);
  }

  return (
    <>
      {props.modalActive && (
        <DelatModal
          setActive={props.setModalActive}
          onFilter={onDelete}
          onCancel={props.onCancel}
        />
      )}
      {props.children}
    </>
  );
}

export default RenderUser;
