import { ChangeEvent } from "react";

interface LabellInputType {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const LabelInput = ({
  
  placeholder,
  onChange,
  type,
}: LabellInputType) => {
  return (
    <div className="pt-5">
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default LabelInput;
