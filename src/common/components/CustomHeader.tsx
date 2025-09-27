interface Props {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title = 'JSONPlanceholder', description }: Props) => {
  return (
    <>
      <h1 className="content-center">{ title }</h1>
      <h3 className="content-center"> { description } </h3>
    </>
  );
};
