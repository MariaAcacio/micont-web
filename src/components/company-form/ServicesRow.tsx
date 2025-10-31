import { FaPlus } from 'react-icons/fa';
import { useModal } from '../modal/ModalProvider';

export default function ServicesRow() {
  const { openModal } = useModal();
  return (
    <div className="flex gap-2">
      <button
        onClick={e => {
          e.preventDefault();
          openModal();
        }}
        className="w-10 h-10 bg-color-gray-palette border-gray-300 border rounded-lg flex justify-center items-center"
      >
        {' '}
        <FaPlus className="text-gray-400" />
      </button>
      <input
        className="border border-gray-300 rounded-md p-2 bg-white"
        type="text"
        id="description"
        name="description"
      />
    </div>
  );
}
