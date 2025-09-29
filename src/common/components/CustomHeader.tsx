interface Props {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title = 'JSONPlaceholder', description }: Props) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      {description && <h3 className="text-lg text-gray-600 mt-2">{description}</h3>}
    </div>
  );
};
