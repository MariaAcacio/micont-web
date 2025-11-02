'use client';
import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useModal } from '../modal/ModalProvider';
import ServiceFormContent, {
  type ServiceFormContentRef,
} from '../service-form/ServiceFormContent';
import { Service } from './CompanyForm';

export default function ServicesRow({
  onSave,
  services,
}: {
  onSave: (newService: Service) => void;
  services: Service[];
}) {
  const { openModal } = useModal();
  const formRef = useRef<ServiceFormContentRef>(null);

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const handleSave = () => {
      if (formRef.current) {
        const formData = formRef.current.getFormData();

        onSave(formData);
      }
    };

    openModal(<ServiceFormContent ref={formRef} />, handleSave);
  };

  console.log({ services });
  return (
    <div className="flex gap-2">
      <button
        onClick={handleOpenModal}
        className="w-10 h-10 bg-color-gray-palette border-gray-300 cursor-pointer border rounded-lg flex justify-center items-center"
      >
        {' '}
        <FaPlus className="text-gray-400" />
      </button>
      {services && services.map(service => <div>{service.serviceName}</div>)}
      {/* <input
        className="border border-gray-300 rounded-md p-2 bg-white"
        type="text"
        id="description"
        name="description"
      /> */}
    </div>
  );
}
