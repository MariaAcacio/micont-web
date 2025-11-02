'use client';

import CompanyForm from '@/components/company-form/CompanyForm';

export default function FormPage() {
  return (
    <div className="text-black min-h-screen p-8 ml-8 flex flex-col gap-4 w-1/2">
      Complete the form to add a new dashboard
      <CompanyForm />
    </div>
  );
}
